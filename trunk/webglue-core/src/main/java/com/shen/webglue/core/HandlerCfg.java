package com.shen.webglue.core;

import java.lang.reflect.Method;

@SuppressWarnings("rawtypes")
public class HandlerCfg {

	public Class cls;
	public Method method;

	public HandlerCfg(Class cls, Method method) {
		super();
		this.cls = cls;
		this.method = method;
	}

	@Override
	public String toString() {
		return " ["+cls.getSimpleName() + "." + method.getName()+"()]";
	}
}