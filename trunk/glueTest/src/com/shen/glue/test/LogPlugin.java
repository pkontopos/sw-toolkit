package com.shen.glue.test;

import java.lang.reflect.Method;
import java.util.Date;
import java.util.List;

import org.apache.log4j.Logger;

import com.shen.glue.Glue;
import com.shen.glue.plugin.Plugin;

public class LogPlugin extends Plugin {
	Logger logger = Logger.getLogger(LogPlugin.class);

	@Override
	public void exe(List<Object> args, Method handler) {
		put("start", new Date());
	}

	@Override
	public void onSuccess(Object ret) {
		String info = Glue.get("HANDLER_INFO").toString();
		logger.info(info + " is finished in " + getTime() + "ms");
	}

	@Override
	public void onError(Exception e) {
		String info = Glue.get("HANDLER_INFO").toString();
		logger.error(info + " is finished with error in " + getTime() + "ms");
	}

	private long getTime() {
		Date t1 = (Date) get("start");
		Date t2 = new Date();
		return t2.getTime() - t1.getTime();
	}
}
