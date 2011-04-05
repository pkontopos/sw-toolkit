package com.shen.webglue.core;

import java.lang.reflect.Method;
import java.util.List;

public interface Plugin {
	/**
	 * starting a page
	 * @param args
	 * @param handler
	 */
	abstract public void onStart(List<Object> args, Method handler);

	/**
	 * returning 
	 * @param retObj
	 */
	abstract public void onFinish(Exception e);

}
