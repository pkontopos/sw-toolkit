package com.shen.glue.plugin;

import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.shen.glue.Glue;

public abstract class Plugin {
	public Object retObj;
	public String content;
	public String forward;
	
	public boolean accept() {
		return true;
	}

	abstract public void exe(List<Object> args, Method handler);

	abstract public void onSuccess(Object retObj);

	abstract public void onError(Exception e); 

	 
}
