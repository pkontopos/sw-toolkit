package com.shen.glue.common;

import java.io.IOException;
import java.util.Properties;

import com.shen.glue.GlueServlet;

public class Utils {
	public static String getCfg(String... key) {
		Properties properties = new Properties();
		try {
			properties.load(GlueServlet.class
					.getResourceAsStream("/glue.properties"));
		} catch (IOException e) {
			e.printStackTrace();
		}
		String value = properties.getProperty(key[0]);
		if ((key.length > 1) && (value == null)) {
			value = key[1];
		}
		return value;
	}
}
