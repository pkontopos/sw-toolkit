package com.shen.webglue.plugin;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.List;

import javax.persistence.Entity;

import org.apache.log4j.Logger;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.shen.webglue.annotation.Uri;
import com.shen.webglue.common.ClassFinder;
import com.shen.webglue.core.Glue;
import com.shen.webglue.core.Plugin;

public class HibernatePlugin implements Plugin {
	final public static String HIBERNATEPLUGIN_SESSION = "HIBERNATEPLUGIN_SESSION";
	final public static String HibernatePlugin_TX = "HibernatePlugin_TX";

	Logger logger = Logger.getLogger(HibernatePlugin.class);
	public static SessionFactory sf;
	Transaction tx;

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public HibernatePlugin() {
		if (sf == null) {
			Configuration cfg = new Configuration();
			String[] names = Glue.beanDir.split(",");
			for (String pkg : names) {
				List<Class> clses = ClassFinder.getClasses(pkg);
				for (Class cls : clses) {
					if (cls.isAnnotationPresent(Entity.class)) {
						cfg.addAnnotatedClass(cls);
					}
				}
			}
			sf = cfg.buildSessionFactory();
		}
	}

	@Override
	public void onStart(List<Object> args, Method handler) {
		Uri tag = handler.getAnnotation(Uri.class);
		if (tag.transaction()) {
			Session sess = sf.openSession();
			sess.setDefaultReadOnly(tag.readOnly());
			tx = sess.beginTransaction();
			Glue.put(HIBERNATEPLUGIN_SESSION, sess);
			Glue.put(HibernatePlugin_TX, tx);
		}
	}

	@Override
	public void onFinish(Exception e) {
		if (e != null) {
			if (tx != null) {
				tx.rollback();
			}
			if (e instanceof InvocationTargetException) {
				InvocationTargetException ex = (InvocationTargetException) e;
				e = (Exception) ex.getCause();
			}
			StackTraceElement st = e.getStackTrace()[0];
			logger.error("rollbacked because of "
					+ e.getClass().getSimpleName() + " from ("
					+ st.getFileName() + ":" + st.getLineNumber() + ")");
		} else {
			if (tx != null) {
				tx.commit();
				logger.debug("commited");
			}
		}

	}

	public void destory() {
		sf.close();
	}

}
