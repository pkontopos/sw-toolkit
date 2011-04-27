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

	public static final String FORWARD_TO = "PAGE_URI";
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

		if (getForward() != null) {
			request.setAttribute("obj", getPageObj());
			ctx.getRequestDispatcher("/" + getForward()).forward(request,
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

	/**
	 * if it's set, means the page needs to be forwarded to that url
	 * @param url
	 */
	public static void setForward(String url) {
		Glue.put(GlueServlet.FORWARD_TO, url);
	}

	public static String getForward() {
		return (String) Glue.get(GlueServlet.FORWARD_TO);
	}

	/**
	 * 1 if the page will be forwarded to an jsp, then this is put in application attribute named "obj";
	 * 2 otherwise it will be converted to a json string and written to response
	 * @param url
	 */
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
