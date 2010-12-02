package com.shen.glue.plugin;

import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
}
