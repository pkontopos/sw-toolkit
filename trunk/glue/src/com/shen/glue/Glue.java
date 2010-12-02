package com.shen.glue;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.shen.glue.annotation.Bean;
import com.shen.glue.annotation.Url;
import com.shen.glue.common.ClassFinder;
import com.shen.glue.common.Utils;
import com.shen.glue.plugin.Plugin;

public class Glue {

	public static List<Plugin> plugins = new ArrayList<Plugin>();

	public static ThreadLocal<Map<String, Object>> rs = new ThreadLocal<Map<String, Object>>() {
		protected synchronized Map<String, Object> initialValue() {
			return new HashMap<String, Object>();
		}
	};
	public static ThreadLocal<Map<String, Object>> attr = new ThreadLocal<Map<String, Object>>() {
		protected synchronized Map<String, Object> initialValue() {
			return new HashMap<String, Object>();
		}
	};

	public static void put(String key, Object obj) {
		attr.get().put(key, obj); 
	}

	public static Object get(String key) {  
		return attr.get().get(key); 
	}

	public static void addRS(String name, Object resource) {
		rs.get().put(name, resource);
	}

	public static Object getRS(String name) {
		return rs.get().get(name);
	}

	public static void addRS(Object resource) {
		rs.get().put(resource.getClass().getSimpleName(), resource);
	}

	@SuppressWarnings("rawtypes")
	private Map<String, Class> typePool = new HashMap<String, Class>();
	private Map<String, String> handlerList = new HashMap<String, String>();
	private Map<String, Method> handlerMethodList = new HashMap<String, Method>();
	private Map<String, Object> singletonPool = new HashMap<String, Object>();

	@SuppressWarnings({ "rawtypes", "unchecked" })
	private void scanPkgs() {
		String[] names = beanDir.split(",");
		for (String pkg : names) {
			List<Class> clses = ClassFinder.getClasses(pkg);
			for (Class cls : clses) {
				if (cls.isAnnotationPresent(Bean.class)) {
					addBean(null, null, cls);
				}

				if (Plugin.class.isAssignableFrom(cls)) {
					System.out.println("go!");
					try {
						Plugin plugin = (Plugin) cls.getConstructor(
								new Class[0]).newInstance(new Object[0]);
						plugins.add(plugin);
					} catch (Exception e) {
						e.printStackTrace();
					} 
				}
			}
		}
	}
	public Method getHandlerMethod(String url) {
		return handlerMethodList.get(url);
	}

	public Object getHandler(String url) { 
		return getBean(handlerList.get(url));
	}

	@SuppressWarnings("rawtypes")
	public void addBean(Object bean, String beanName, Class cls) {
		try {
			if (beanName == null) {
				beanName = cls.getSimpleName();
			}
			if (cls == null) {
				cls = bean.getClass();
			}
			typePool.put(beanName, cls);
			if (bean != null) {
				singletonPool.put(beanName, bean);
			}
			// check url annotation
			Method[] methods = cls.getMethods();
			for (Method method : methods) {
				Url urlTag = method.getAnnotation(Url.class);
				String url = urlTag.value();
				if (urlTag != null) {
					handlerList.put(url, beanName);
					handlerMethodList.put(url, method);
				}
			}
			System.out.println("bean added:" + beanName);
		} catch (Exception e) {

		}
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public Object getBean(String clsName) {
		Object bean = null;
		try {
			// System.out.println(typePool);
			bean = singletonPool.get(clsName);
			Class beanCls = typePool.get(clsName);
			if ((bean == null) && (beanCls != null)
					&& beanCls.isAnnotationPresent(Bean.class)) {
				Bean beanCfg = (Bean) beanCls.getAnnotation(Bean.class);
				Constructor con = beanCls.getConstructor(new Class[0]);
				bean = con.newInstance();
				if (beanCfg.singleton()) {
					singletonPool.put(beanCls.getSimpleName(), bean);
				}
			}
			// wire it
			if ((bean != null) && (beanCls != null)) {
				Field[] fields = bean.getClass().getDeclaredFields();
				for (Field field : fields) {
					try {
						String targetClsName = field.getType().getSimpleName();
						Object targetBean = getBean(targetClsName);
						field.setAccessible(true);
						if (field.get(bean) == null) {
							if (targetBean != null) {
								// from beans
								field.set(bean, targetBean);
							} else {
								// from resourcePool
								Map<String, Object> resource = rs.get();
								// System.out.println("resourcePool"+resource.size());
								for (String rName : resource.keySet()) {
									Object rs = resource.get(rName);
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

		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("can't find bean: " + clsName);
		}
		return bean;
	}

	public static String beanDir;

	public Glue() {
		Glue.beanDir = Utils.getCfg("beanDir");

		scanPkgs();

		System.out.println("initialized singleton:" + singletonPool.keySet());
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
}
