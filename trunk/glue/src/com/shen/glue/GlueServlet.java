package com.shen.glue;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.google.gson.Gson;
import com.shen.glue.Glue.HandlerCfg;
import com.shen.glue.plugin.HibernatePlugin;
import com.shen.glue.plugin.HttpPlugin;
import com.shen.glue.plugin.Plugin;

public class GlueServlet extends HttpServlet {
	public static String URI = "URI";
	public static String REQUEST = "REQUEST";
	public static String RESPONSE = "RESPONSE";
	public static String SERVLET_CONTEXT = "SERVLET_CONTEXT";
	public static String HANDLER_INFO = "HANDLER_INFO";
	Logger logger = Logger.getLogger(GlueServlet.class);

	private static final long serialVersionUID = 1L;
	Glue glue = Glue.get();

	public GlueServlet() {
		super();
		Glue.plugins.add(HibernatePlugin.class);
		Glue.plugins.add(HttpPlugin.class);
		logger.info("Glue servlet is started");
	}

	@Override
	protected void service(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		String uri = request.getRequestURI();
		String context = request.getContextPath();
		uri = uri.substring(context.length() + 1);
		// inject req,resp to bean
		ServletContext ctx = getServletConfig().getServletContext();

		Glue.putThreadAttribute(URI, uri);
		Glue.putThreadAttribute(REQUEST, request);
		Glue.putThreadAttribute(RESPONSE, response);
		Glue.putThreadAttribute(SERVLET_CONTEXT, ctx);

		HandlerCfg handlerCfg = glue.getHandler(uri);
		if (handlerCfg != null) {
			List<Object> args = new ArrayList<Object>();
			List<Plugin> plugins = new ArrayList<Plugin>();
			for (Class<Plugin> pluginCls : Glue.plugins) {
				try {
					Plugin plugin;
					plugin = (Plugin) pluginCls.getConstructor(new Class[0])
							.newInstance(new Object[0]);
					plugins.add(plugin);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
			for (Plugin plugin : plugins) {
				if (plugin.accept()) {
					plugin.exe(args, handlerCfg.method);
				}
			}
			Object handler = glue.getBean(handlerCfg.cls);
			String info = uri + "->" + handler.getClass().getSimpleName() + "."
					+ handlerCfg.method.getName();
			Glue.putThreadAttribute(HANDLER_INFO, info);
			logger.debug(info);
			String forward = null;
			String content = null;
			Object retObj = null;
			try {
				retObj = handlerCfg.method.invoke(handler, args.toArray());
				Collections.reverse(plugins);
				for (Plugin plugin : plugins) {
					if (plugin.accept()) {
						plugin.forward = forward;
						plugin.content = content;
						plugin.retObj = retObj;
						plugin.onSuccess(retObj);
						forward = plugin.forward;
						content = plugin.content;
						retObj = plugin.retObj;
					}
				}
			} catch (Exception e) {
				for (Plugin plugin : plugins) {
					if (plugin.accept()) {
						plugin.forward = forward;
						plugin.content = content;
						plugin.retObj = retObj;
						plugin.onError(e);
						forward = plugin.forward;
						content = plugin.content;
						retObj = plugin.retObj;
					}
				}
			}
			if (forward != null) {
				request.setAttribute("obj", retObj);
				ctx.getRequestDispatcher("/" + forward + ".jsp").forward(
						request, response);
			} else if (content != null) {
				response.getWriter().println(content);
			} else if (retObj != null) {
				Gson gson = new Gson();
				String json = gson.toJson(retObj);
				response.getWriter().println(json);
			}
		}
		Glue.attr.remove();
	}

	@Override
	public void destroy() {
		Glue.attr.remove();
		super.destroy();
	}
}
