package com.shen.glue.plugin;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.beanutils.BeanUtils;

import com.google.gson.Gson;
import com.shen.glue.Glue;
import com.shen.glue.GlueServlet;

public class HttpPlugin extends Plugin {

	@Override
	public boolean accept() {
		String uri = (String) Glue.get(GlueServlet.URI);
		return (uri.endsWith(".json") || uri.endsWith(".html"));
	}

	@Override
	public void exe(List<Object> args, Method handler) {
		Gson gson = new Gson();
		Class<?>[] types = handler.getParameterTypes();
		HttpServletResponse resp = (HttpServletResponse) Glue
				.get(GlueServlet.RESPONSE);
		HttpServletRequest req = (HttpServletRequest) Glue
				.get(GlueServlet.REQUEST);
		String json = req.getParameter("json");
		for (Class<?> clazz : types) {
			Object arg = null;
			if (clazz.isInstance(resp)) {
				arg = resp;
			} else if (clazz.isInstance(req)) {
				arg = req;
			} else if (clazz.equals(Map.class)) {
				arg = easyMap(req.getParameterMap());
			} else if (json != null) {
				arg = gson.fromJson(json, clazz);
				json = null;
			} else {
				try {
					arg = clazz.getConstructor().newInstance(new Object[0]);
					BeanUtils.populate(arg, req.getParameterMap());
				} catch (Exception e) {
				}
			}
			args.add(arg);
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

	@Override
	public void onSuccess(Object retObj) {
		String uri = (String) Glue.get(GlueServlet.URI);
		if (uri.endsWith(".json")) {
			setRetObj(retObj);
		} else {
			if ((retObj != null) && (retObj instanceof String)) {
				setForwardTo((String) retObj);
			}
		}
	}

	@Override
	public void onError(Exception e) {
		setContents("error:" + stack2string(e));
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
