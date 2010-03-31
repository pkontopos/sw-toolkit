package com.shen.common.web;

import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.imageio.ImageIO;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.beanutils.BeanUtils;

import com.shen.common.model.Model;
import com.shen.common.util.ClassHelpler;

import flexjson.JSONSerializer;

/**
 * 
 * @author ZhijieS
 */
public class Dispatcher extends HttpServlet {
	private static final long serialVersionUID = 7871314298902796585L;

	String pkg = null;
	String imageFormat = null;
	List<Handler> handlerList = new ArrayList<Handler>();

	@Override
	public void init(ServletConfig config) throws ServletException {
		super.init(config);
		pkg = config.getInitParameter("package");

		imageFormat = (String) get(config.getInitParameter("imageFormat"),
				"jpeg");

		List<Class> clsList = ClassHelpler.getClasses(pkg);
		for (Class cls : clsList) {
			try {
				Object obj = cls.newInstance();
				Method[] methods = cls.getDeclaredMethods();
				for (Method method : methods) {
					if (method.getModifiers() == Modifier.PUBLIC) {
						String link = getLink(method);
						if (link != null) {
							Handler handler = new Handler();
							handler.link = link;
							handler.obj = obj;
							handler.method = method;
							handler.imageFormat = imageFormat;
							handlerList.add(handler);
						}
					}
				}
			} catch (Exception ex) {
				ex.printStackTrace();
			}
		}
		System.out.println("init " + handlerList.size() + " controllers from "
				+ pkg);
	}

	String getLink(Method method) {

		String mLink = null;
		Link methodLink = method.getAnnotation(Link.class);
		if (methodLink != null) {
			mLink = methodLink.value();
		}
		if (mLink == null) {
			mLink = method.getName();
		}

		String cLink = null;
		Link classLink = method.getDeclaringClass().getAnnotation(Link.class);
		if (classLink != null) {
			cLink = classLink.value();
		}
		if (cLink == null) {
			cLink = method.getDeclaringClass().getSimpleName();
			if (cLink.endsWith("Controller")) {
				cLink = cLink.substring(0, cLink.lastIndexOf("Controller"));
			}
		}

		if (!mLink.startsWith("/")) {
			mLink = "/" + cLink + "/" + mLink;
		}

		return mLink.toLowerCase();
	}

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		boolean handled = false;
		for (Handler handler : handlerList) {
			boolean ret = handler.handle(req, resp);
			if (ret) {
				handled = true;
			}

		}
		if (handled == false) {
			resp.setContentType("text/html");
			PrintWriter out = resp.getWriter();
			out.println("<li>can't find handler method for this URL under "
					+ pkg + "</li>");
			out
					.println("<li>URL format should be context/[className]/[methodName]/...</li>");
			out
					.println("<li>'Controller' will be auto removed from ClassName. For example, the URL for UserController(which has a method called create) is context/user/create/...</li>");
		}

	}

	private Object get(Object obj, Object def) {
		Object ret = (obj == null) ? obj : def;
		return ret;
	}
}

class Handler {
	String imageFormat;

	String link;
	Object obj;
	Method method;

	public boolean handle(HttpServletRequest req, HttpServletResponse resp) {
		String uri = req.getRequestURI();
		String context = req.getContextPath();
		uri = uri.substring(context.length());
		String[] param = check(uri);
		if (param != null) {
			try {
				int index = 0;
				Class[] types = method.getParameterTypes();
				Object[] args = new Object[types.length];
				
				for (int i = 0; i < types.length; i++) { 
					Class type = types[i]; 
					if (HttpServletRequest.class.equals(type)) {
						args[i] = req;
					} else if (HttpServletResponse.class.equals(type)) {
						args[i] = resp;
					} else if (Map.class.equals(type)) {
						args[i] = getMap(req);
					} else if (type.getAnnotation(Model.class) != null) {
						Map map = getMap(req);
						Object model = type.newInstance();
						try {
							BeanUtils.populate(model, map);
						} catch (Exception e) {
						}
						args[i] = model;
					} else {
						Object value = null;
						if (param.length > index) {
							if (Long.class.equals(type)) {
								try {
									value = Long.parseLong(param[index]);
								} catch (Exception e) {

								}
							} else {
								value = param[index];
							}
						}
						args[i] = value;
						index++;
					}
				}
				Object ret = method.invoke(obj, args);
				resp.setContentType("text/html;charset=UTF-8");
				resp.setHeader("Cache-Control", "no-cache");
				if (ret != null) {
					if (ret instanceof BufferedImage) {
						resp.setContentType("image/" + imageFormat);
						ImageIO.write((BufferedImage) ret, imageFormat, resp
								.getOutputStream());
					} else {// to json
						JSONSerializer serializer = new JSONSerializer();
						String json = serializer.serialize(ret);
						// resp.setContentType("text/x-json;charset=UTF-8");
						resp.getWriter().write(json);
					}
				}
			} catch (Exception ex) {
				ex.printStackTrace();
			}
			return true;
		}
		return false;
	}

	private String[] check(String uri) {
		if (uri.startsWith(link)) {
			System.out.println(uri + "->" + link);
			String p = uri.substring(link.length(), uri.lastIndexOf("."))
					.trim();
			if (p.length() == 0) {
				return new String[0];
			} else {
				String[] params = uri.substring(link.length() + 1,
						uri.lastIndexOf(".")).split("/");
				return params;
			}
		}
		return null;
	}

	private Map getMap(HttpServletRequest req) {
		Map map = new HashMap();
		Map theMap = req.getParameterMap();
		for (Object key : theMap.keySet()) {
			StringBuffer sb = new StringBuffer();
			map.put(key, sb);
			String[] strs = (String[]) theMap.get(key);
			if (strs != null) {
				for (String str : strs) {
					if (sb.length() > 0) {
						sb.append(",");
					}
					sb.append(str);
				}
			}
		}
		return map;

	}

}
