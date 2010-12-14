package com.shen.glue;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

import com.shen.glue.annotation.Bean;
import com.shen.glue.annotation.Url;
import com.shen.glue.common.ClassFinder;
import com.shen.glue.common.Utils;
import com.shen.glue.plugin.Plugin;

public class Glue {
	Logger logger = Logger.getLogger(Glue.class);
	
	@SuppressWarnings("rawtypes")
	public static List<Class> plugins = new ArrayList<Class>();

	public static ThreadLocal<Map<String, Object>> attr = new ThreadLocal<Map<String, Object>>() {
		protected synchronized Map<String, Object> initialValue() {
			return new HashMap<String, Object>();
		}
	};

	public static void putSessionAttribute(String key, Object obj) {
		attr.get().put(key, obj);
	}

	public static Object getSessionAttribute(String key) {
		return attr.get().get(key);
	}

	private Map<String, HandlerCfg> handlerCfgMap = new HashMap<String, HandlerCfg>();
	@SuppressWarnings("rawtypes")
	private Map<Class, Object> singletonPool = new HashMap<Class, Object>();

	@SuppressWarnings({ "rawtypes" })
	private void scanPkgs() {
		String[] names = beanDir.split(",");
		for (String pkg : names) {
			List<Class> clses = ClassFinder.getClasses(pkg);
			for (Class cls : clses) {
				registerHandler(cls);
				if (Plugin.class.isAssignableFrom(cls)) {
					try {
						plugins.add(cls);
					} catch (Exception e) {
						e.printStackTrace();
					}
				}
			}
		}
	}

	@SuppressWarnings({ "rawtypes" })
	public void registerHandler(Class cls) {
		try {
			Method[] methods = cls.getMethods();
			for (Method method : methods) {
				Url urlTag = method.getAnnotation(Url.class);
				String url = urlTag.value();
				if (urlTag != null) {
					handlerCfgMap.put(url, new HandlerCfg(cls, method));
				}
			}
		} catch (Exception e) {
		}
	}

	public HandlerCfg getHandler(String uri) {
		return handlerCfgMap.get(uri);
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public Object getBean(Class cls) {
		Object bean = null;
		try {
			// System.out.println(typePool);
			bean = singletonPool.get(cls);
			if (bean == null) {
				try {
					Constructor con = cls.getConstructor(new Class[0]);
					bean = con.newInstance();
					Bean beanCfg = (Bean) cls.getAnnotation(Bean.class);
					if ((beanCfg != null) && (beanCfg.singleton())) {
						singletonPool.put(cls, bean);
					}
				} catch (Exception e) {

				}
				// wire it
				if (bean != null) {
					Field[] fields = bean.getClass().getDeclaredFields();
					for (Field field : fields) {
						try {
							Class type = field.getType();
							if (type.isPrimitive()||type.equals(String.class)){
								continue;
							}
							Object targetBean = getBean(type);
							field.setAccessible(true);
							if (field.get(bean) == null) {
								if (targetBean != null) { // from beans,includes singleton
									field.set(bean, targetBean);
								} else { // from session attributes
									Map<String, Object> resource = attr.get();
									for (Object rs : resource.values()) {
										if (field.getType().isInstance(rs)) {
											field.set(bean, rs);
										}
									}
								}
							}
						} catch (Exception e) {
							e.printStackTrace();
						}
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			logger.info("can't find bean: " + cls.getSimpleName()); 
		}
		return bean;
	}

	public static String beanDir;

	public Glue() {
		Glue.beanDir = Utils.getCfg("beanDir");
		scanPkgs();
		logger.info("initialized singleton:" + singletonPool.keySet());
	}

	public static Glue instance = null;

	public static Glue get() {
		if (instance == null) {
			instance = new Glue();
		}
		return instance;
	}

	public static void main(String[] args) {
		new Glue();
	}

	public static class HandlerCfg {
		@SuppressWarnings("rawtypes")
		public Class cls;
		public Method method;

		@SuppressWarnings("rawtypes")
		public HandlerCfg(Class cls, Method method) {
			super();
			this.cls = cls;
			this.method = method;
		}
	}
}
