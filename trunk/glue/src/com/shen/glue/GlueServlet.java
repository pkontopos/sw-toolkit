package com.shen.glue;

import java.io.IOException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.shen.glue.plugin.HibernatePlugin;
import com.shen.glue.plugin.JsonPlugin;
import com.shen.glue.plugin.Plugin;

public class GlueServlet extends HttpServlet {
	public static String URI = "URI";
	public static String REQUEST = "REQUEST";
	public static String RESPONSE = "RESPONSE";
	Logger logger = Logger.getLogger(GlueServlet.class);

	private static final long serialVersionUID = 1L;
	Glue glue = Glue.get();

	public GlueServlet() {
		super();
		Glue.plugins.add(new HibernatePlugin());
		Glue.plugins.add(new JsonPlugin());
		System.out.println("Glue servlet is started");
	}

	@Override
	protected void service(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		String uri = request.getRequestURI();
		String context = request.getContextPath();
		uri = uri.substring(context.length() + 1);
		// inject req,resp to bean
		Glue.put(URI, uri);
		Glue.put(REQUEST, request);
		Glue.put(RESPONSE, response);
		Glue.addRS(request);
		Glue.addRS(response);

		Method handlerMethod = glue.getHandlerMethod(uri);
		if (handlerMethod != null) {
			List<Object> args = new ArrayList<Object>();
			for (Plugin plugin : Glue.plugins) {
				if (plugin.accept()) {
					plugin.exe(args, handlerMethod);
				}
			}
			Object handler = glue.getHandler(uri);
			logger.debug(uri + "->" + handler.getClass().getSimpleName() + "."
					+ handlerMethod.getName());
			try {
				//System.out.println("-----------"+args.size());
				Object retObj = handlerMethod.invoke(handler, args.toArray());
				for (int i = Glue.plugins.size() - 1; i >= 0; i--) {
					Plugin plugin = Glue.plugins.get(i);
					if (plugin.accept()) {
						plugin.onSuccess(retObj);
					}
				}
			} catch (Exception e) {
				for (int i = Glue.plugins.size() - 1; i >= 0; i--) {
					Plugin plugin = Glue.plugins.get(i);
					if (plugin.accept()) {
						plugin.onError(e);
					}
				}
			}
		}
	}

	@Override
	public void destroy() {
		Glue.rs.remove();// ?
		super.destroy();
	}
}
