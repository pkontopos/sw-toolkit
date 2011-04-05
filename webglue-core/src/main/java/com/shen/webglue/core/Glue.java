package com.shen.webglue.core;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

import com.shen.webglue.annotation.Bean;
import com.shen.webglue.annotation.Uri;
import com.shen.webglue.common.ClassFinder;
import com.shen.webglue.common.Utils;

public class Glue {

	public static final String RETURN_OBJ = "RETURN_OBJ";
	public static String HANDLER_INFO = "HANDLER_INFO";

	public static String beanDir = null;

	Logger logger = Logger.getLogger(Glue.class);

	@SuppressWarnings("rawtypes")
	public static List<Class> plugins = new ArrayList<Class>();

	private Map<String, HandlerCfg> handlerCfgMap = new HashMap<String, HandlerCfg>();
	@SuppressWarnings("rawtypes")
	private Map<Class, Object> singletonPool = new HashMap<Class, Object>();

	@SuppressWarnings({ "rawtypes" })
	private void scanPkgs() {
		String[] names = beanDir.split(",");
		int clsCount = 0;
		for (String pkg : names) {
			List<Class> clses = ClassFinder.getClasses(pkg);
			clsCount = clses.size();
			for (Class cls : clses) {
				tryRegisterBean(cls);
			}
		}
		logger.debug(beanDir + " scaned, " + clsCount + " classes found");
	}

	@SuppressWarnings({ "rawtypes" })
	public void tryRegisterBean(Class cls) {
		try {
			Method[] methods = cls.getMethods();
			for (Method method : methods) {
				Uri urlTag = method.getAnnotation(Uri.class);
				String url = urlTag.value();
				if (urlTag != null) {
					HandlerCfg handlerCfg = new HandlerCfg(cls, method);
					handlerCfgMap.put(url, handlerCfg);
					logger.debug("handler added:" + url + "=" + handlerCfg);
				}
			}
			if (Plugin.class.isAssignableFrom(cls)) {
				try {
					plugins.add(cls);
					logger.debug("plugin added:" + cls);
				} catch (Exception e) {
					e.printStackTrace();
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
							if (type.isPrimitive() || type.equals(String.class)) {
								continue;
							}
							Object targetBean = getBean(type);
							field.setAccessible(true);
							if (field.get(bean) == null) {
								if (targetBean != null) { // from beans,includes singleton
									field.set(bean, targetBean);
								} else { // from session attributes
									Map<String, Object> truck = getTruck();
									for (Object rs : truck.values()) {
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

	public Object run(String uri) {
		HandlerCfg handlerCfg = getHandler(uri);
		if (handlerCfg != null) {
			List<Object> args = new ArrayList<Object>();
			List<Plugin> plugins = new ArrayList<Plugin>();
			for (Class<Plugin> pluginCls : Glue.plugins) {
				try {
					Plugin plugin;
					plugin = (Plugin) pluginCls.getConstructor(new Class[0])
							.newInstance(new Object[0]);
					plugins.add(plugin);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
			for (Plugin plugin : plugins) {
				plugin.onStart(args, handlerCfg.method);
			}
			Object handler = getBean(handlerCfg.cls);
			String info = uri + "->" + handler.getClass().getSimpleName() + "."
					+ handlerCfg.method.getName();
			Glue.put(HANDLER_INFO, info);
			logger.debug(info);
			try {
				Object retObj = handlerCfg.method.invoke(handler,
						args.toArray());
				Glue.put(RETURN_OBJ, retObj);
				Collections.reverse(plugins);
				for (Plugin plugin : plugins) {
					plugin.onFinish(null);
				}
			} catch (Exception e) {
				logger.error("exception:" + e);
				for (Plugin plugin : plugins) {
					plugin.onFinish(e);
				}
			}
		} else {
			logger.debug("no handler found for " + uri);
		}
		Object ret = Glue.get(RETURN_OBJ);
		logger.debug("ret:" + ret);
		return ret;
	}

	private static Glue instance = null;

	public static Glue get() {
		if (instance == null) {
			instance = new Glue();
			if (Glue.beanDir == null) {
				Glue.beanDir = Utils.getCfg("beanDir");
			}
			instance.scanPkgs();
		}
		return instance;
	}

	/**
	 * Using ThreadLocal to allow Code access DataTruck instance freely;
	 */
	public static ThreadLocal<DataTruck> truckInstance = new ThreadLocal<DataTruck>() {
		protected synchronized DataTruck initialValue() {
			return new DataTruck();
		}
	};

	public static DataTruck getTruck() {
		return truckInstance.get();
	}

	/**
	 * push to threadlocal valueMap
	 * @param key
	 * @param obj
	 */
	public static void put(String key, Object obj) {
		getTruck().put(key, obj);
	}

	/**
	 * get obj from threadlocal valueMap
	 * @param key
	 * @return
	 */
	public static Object get(String key) {
		return getTruck().get(key);
	}

	public static void clear() {
		getTruck().clear();
	}
}
