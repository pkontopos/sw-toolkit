package com.shen.glue.test;

import java.lang.reflect.Method;
import java.util.Date;
import java.util.List;

import org.apache.log4j.Logger;

import com.shen.glue.plugin.Plugin;

public class LogPlugin extends Plugin {
	Logger logger = Logger.getLogger(LogPlugin.class);

	@Override
	public void exe(List<Object> args, Method handler) {
		put("start", new Date());
	}

	@Override
	public void onSuccess(Object ret) {
		logger.debug("finished in " + getTime() + "ms");
	}

	@Override
	public void onError(Exception e) {
		logger.debug("finished with error in " + getTime() + "ms");
	}

	private long getTime() {
		Date t1 = (Date) get("start");
		Date t2 = new Date();
		return t2.getTime() - t1.getTime();
	}
}
