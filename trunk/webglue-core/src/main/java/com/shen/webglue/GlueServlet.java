package com.shen.webglue;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.shen.webglue.core.Glue;
import com.shen.webglue.core.Plugin;
import com.shen.webglue.plugin.HibernatePlugin;
import com.shen.webglue.plugin.HttpPlugin;

public class GlueServlet extends HttpServlet {
	public static String URI = "URI";
	public static String REQUEST = "REQUEST";
	public static String RESPONSE = "RESPONSE";
	public static String SERVLET_CONTEXT = "SERVLET_CONTEXT";

	public static final String PAGE_URI = "PAGE_URI";
	public static final String PAGE_OBJ = "PAGE_OBJ";

	Logger logger = Logger.getLogger(GlueServlet.class);

	private static final long serialVersionUID = 1L;
	Glue glue = Glue.get();

	public GlueServlet() {
		super();
		Glue.plugins.add(HibernatePlugin.class);
		Glue.plugins.add(HttpPlugin.class);
		logger.info("Glue servlet started");
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

		logger.debug(Glue.getTruck());

		Glue.get().run(uri);

		if (getPageUri() != null) {
			request.setAttribute("obj", getPageUri());
			ctx.getRequestDispatcher("/" + getPageUri()).forward(request,
					response);
		} else if (getPageObj() != null) {
			response.getWriter().println(getPageObj());
		}
		Glue.clear();
	}

	@Override
	public void destroy() {
		//should clear all trucks
		super.destroy();
	}

	public static void setPageUri(String url) {
		Glue.put(GlueServlet.PAGE_URI, url);
	}

	public static String getPageUri() {
		return (String) Glue.get(GlueServlet.PAGE_URI);
	}

	public static void setPageObj(Object obj) {
		Glue.put(GlueServlet.PAGE_OBJ, obj);
	}

	public static Object getPageObj() {
		return Glue.get(GlueServlet.PAGE_OBJ);
	}

	public static String getOrginalUri() {
		return (String) Glue.get(GlueServlet.URI);
	}
}
