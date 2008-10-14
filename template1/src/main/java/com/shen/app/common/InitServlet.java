/**
 * @author shen
 * 03/10/2008 
 */
package com.shen.app.common;

import java.io.File;
import java.io.IOException;
import java.util.Properties;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;

import org.apache.log4j.PropertyConfigurator;

public class InitServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	static final String PROPFILE = "/log4j.properties";
	static final String KEY = "log4j.appender.R.File";
	static final String FOLDER = "log/";

	@Override
	public void init() throws ServletException {
		try {
			initLog();

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	private void initLog() throws IOException {
		String workDir = getServletContext().getRealPath("/");
		System.setProperty("app.dir", workDir);
		Properties p = new Properties();
		p.load(getClass().getResourceAsStream(PROPFILE));
		String logDir = workDir + FOLDER;
		File dir = new File(logDir);
		if (!dir.exists())
			dir.mkdirs();
		p.setProperty(KEY, logDir + p.getProperty(KEY));
		PropertyConfigurator.configure(p);
	}

	public static void main(String[] args) {
		System.out.println(HttpServlet.class.getResourceAsStream(PROPFILE));
	}
}
