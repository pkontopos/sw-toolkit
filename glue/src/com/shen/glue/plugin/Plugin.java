package com.shen.glue.plugin;

import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.shen.glue.Glue;

public abstract class Plugin {
	public boolean accept() {
		return true;
	}

	abstract public void exe(List<Object> args, Method handler);

	abstract public void onSuccess(Object retObj);

	abstract public void onError(Exception e);

	public static ThreadLocal<Map<String, Object>> threadResource = new ThreadLocal<Map<String, Object>>() {
		protected synchronized Map<String, Object> initialValue() {
			return new HashMap<String, Object>();
		}
	};

	public void put(String attr, Object obj) {
		threadResource.get().put(attr, obj);
	}

	public Object get(String attr) {
		return threadResource.get().get(attr);
	}

	public static String RETOBJ = "PLUGIN_RETOBJ";
	public static String CONTENTS = "PLUGIN_CONTENTS";
	public static String FORWARDTO = "PLUGIN_FORWARDTO";

	public Object getRetObj() {
		return Glue.get(RETOBJ);
	}

	public void setRetObj(Object retObj) {
		Glue.put(RETOBJ, retObj);
	}

	public String getContents() {
		return (String) Glue.get(CONTENTS);
	}

	public void setContents(String contents) {
		Glue.put(CONTENTS, contents);
	}

	public String getForwardTo() {
		return (String) Glue.get(FORWARDTO);
	}

	public void setForwardTo(String forwardTo) {
		Glue.put(FORWARDTO, forwardTo);
	}

}
