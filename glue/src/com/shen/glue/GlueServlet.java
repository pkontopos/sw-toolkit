package com.shen.glue;

import java.io.IOException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.google.gson.Gson;
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
		Glue.plugins.add(new HibernatePlugin());
		Glue.plugins.add(new HttpPlugin());
		System.out.println("Glue servlet is started");
	}

	@Override
	protected void service(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		String uri = request.getRequestURI();
		String context = request.getContextPath();
		uri = uri.substring(context.length() + 1);
		// inject req,resp to bean
		ServletContext ctx = getServletConfig().getServletContext();

		Glue.put(URI, uri);
		Glue.put(REQUEST, request);
		Glue.put(RESPONSE, response);
		Glue.put(SERVLET_CONTEXT, ctx);
		Glue.addRS(request);
		Glue.addRS(response);

		Method handlerMethod = glue.getHandlerMethod(uri);
		if (handlerMethod != null) {
			List<Object> args = new ArrayList<Object>();
			for (int i = Glue.plugins.size() - 1; i >= 0; i--) {
				Plugin plugin = Glue.plugins.get(i);
				if (plugin.accept()) {
					plugin.exe(args, handlerMethod);
				}
			}
			Object handler = glue.getHandler(uri);
			String info = uri + "->" + handler.getClass().getSimpleName() + "."
					+ handlerMethod.getName();
			Glue.put(HANDLER_INFO, info);
			logger.debug(info);
			try {
				Object retObj = handlerMethod.invoke(handler, args.toArray());
				for (Plugin plugin : Glue.plugins) {
					if (plugin.accept()) {
						plugin.onSuccess(retObj);
					}
				}
			} catch (Exception e) {
				for (Plugin plugin : Glue.plugins) {
					if (plugin.accept()) {
						plugin.onError(e);
					}
				}
			}
			String forwardTo = (String) Glue.get(Plugin.FORWARDTO);
			String contents = (String) Glue.get(Plugin.CONTENTS);
			Object jsonObj = Glue.get(Plugin.RETOBJ);
			if (forwardTo != null) {
				ctx.getRequestDispatcher("/" + forwardTo + ".jsp").forward(
						request, response);
			} else if (contents != null) {
				response.getWriter().println(contents);
			} else if (jsonObj != null) {
				Gson gson = new Gson();
				String json = gson.toJson(jsonObj);
				HttpServletResponse resp = (HttpServletResponse) Glue
						.get(GlueServlet.RESPONSE);
				resp.getWriter().println(json);
			}
		}
		Glue.attr.remove();
	}

	@Override
	public void destroy() {
		Glue.rs.remove();// ?
		super.destroy();
	}
}
