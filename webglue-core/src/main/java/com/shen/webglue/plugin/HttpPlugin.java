package com.shen.webglue.plugin;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.beanutils.BeanUtils;
import org.apache.log4j.Logger;

import com.google.gson.Gson;
import com.shen.webglue.GlueServlet;
import com.shen.webglue.core.Glue;
import com.shen.webglue.core.Plugin;

/**
 * does 2 things:
 * 1  when request comes, it try to auto populate data
 * 2  when method returns an object:
 *    a  if it's a string end with jsp, it forwards to that page
 *    b  if it's a normal string, write it to response
 *    c  if it's an object with json appendix uri , convert to json string and write to response.
 *    d  otherwise auto forward to the jsp page with same name.
 * @author ZhijieS
 *
 */
public class HttpPlugin implements Plugin {
	Logger logger = Logger.getLogger(HttpPlugin.class);

	private boolean isAccept() {
		String uri = (String) Glue.get(GlueServlet.URI);
		return (uri.endsWith(".json") || uri.endsWith(".html"));
	}

	@Override
	public void onStart(List<Object> args, Method handler) {
		if (!isAccept()) {
			return;
		}

		Gson gson = new Gson();
		Class<?>[] types = handler.getParameterTypes();
		HttpServletResponse resp = (HttpServletResponse) Glue
				.get(GlueServlet.RESPONSE);
		HttpServletRequest req = (HttpServletRequest) Glue
				.get(GlueServlet.REQUEST);
		String json = req.getParameter("json");
		for (Class<?> clazz : types) {
			Object arg = null;
			try {
				if (clazz.isInstance(resp)) {
					arg = resp;
				} else if (clazz.isInstance(req)) {
					arg = req;
				} else if (clazz.equals(Map.class)) {// a map
					arg = easyMap(req.getParameterMap());
				} else if (json != null) {// a user defined Object with JSON data
					arg = gson.fromJson(json, clazz);
					json = null;
				} else {// a user defined Object with http request parameters.
					try {
						arg = clazz.getConstructor().newInstance(new Object[0]);
						BeanUtils.populate(arg, req.getParameterMap());
					} catch (Exception e) {
					}
				}
			} catch (Exception e) {
				logger.info("can't populate " + clazz);
			}
			args.add(arg);
		}
	}

	@Override
	public void onFinish(Exception e) {
		if (e != null) {
			String msg = "error:" + stack2string(e);
			Glue.put(GlueServlet.PAGE_OBJ, msg);
		} else {
			Object retObj = Glue.get(Glue.RETURN_OBJ);
			if (retObj != null) {

				if (retObj instanceof String) { // html or uri
					String retStr = (String) retObj;
					if (retStr.endsWith("jsp")) {//goto jsp
						GlueServlet.setForward(retStr);
						GlueServlet.setPageObj(retObj);
					} else {// html content
						GlueServlet.setForward(null);
						GlueServlet.setPageObj(retObj);
					}
				} else { //   convert Object to gson string
					String uri = GlueServlet.getOrginalUri();
					if (uri.endsWith("json")) {
						Gson gson = new Gson();
						String json = gson.toJson(retObj);
						GlueServlet.setPageObj(json);
					} else {// auto use original uri  
						uri = uri.split(".")[0] + ".jsp";
						GlueServlet.setForward(uri);
						GlueServlet.setPageObj(retObj);
					}
				}
			}
		}
	}

	@SuppressWarnings("rawtypes")
	private Map<String, String> easyMap(Map oldMap) {
		Map<String, String> ret = new HashMap<String, String>();
		for (Object key : oldMap.keySet()) {
			String[] values = (String[]) oldMap.get(key);
			String value = arrayToString(values, ",");
			ret.put(key.toString(), value);
		}
		return ret;
	}

	private String arrayToString(String[] a, String separator) {
		String result = "";
		if (a.length > 0) {
			result = a[0]; // start with the first element
			for (int i = 1; i < a.length; i++) {
				result = result + separator + a[i];
			}
		}
		return result;
	}

	public static String stack2string(Exception e) {
		try {
			StringWriter sw = new StringWriter();
			PrintWriter pw = new PrintWriter(sw);
			e.printStackTrace(pw);
			return "------\r\n" + sw.toString() + "------\r\n";
		} catch (Exception e2) {
			return "bad stack2string";
		}
	}

}
