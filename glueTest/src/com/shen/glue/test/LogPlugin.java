package com.shen.glue.test;

import java.lang.reflect.Method;
import java.util.Date;
import java.util.List;

import org.apache.log4j.Logger;

import com.shen.glue.Glue;
import com.shen.glue.plugin.Plugin;

public class LogPlugin extends Plugin {
	Logger logger = Logger.getLogger(LogPlugin.class);
	Date start = new Date();

	@Override
	public void exe(List<Object> args, Method handler) {
		start = new Date();
	}

	@Override
	public void onSuccess(Object ret) {
		String info = Glue.getThreadAttribute("HANDLER_INFO").toString();
		logger.info(info + " is finished in " + getTime() + "ms");
	}

	@Override
	public void onError(Exception e) {
		String info = Glue.getThreadAttribute("HANDLER_INFO").toString();
		logger.error(info + " is finished with error in " + getTime() + "ms");
	}

	private long getTime() { 
		return new Date().getTime() - start.getTime();
	}
}
