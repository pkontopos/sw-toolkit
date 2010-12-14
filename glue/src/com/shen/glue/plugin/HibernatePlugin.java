package com.shen.glue.plugin;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.List;

import javax.persistence.Entity;

import org.apache.log4j.Logger;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.shen.glue.Glue;
import com.shen.glue.annotation.Url;
import com.shen.glue.common.ClassFinder;

public class HibernatePlugin extends Plugin {
	final public static String SESSION = "SESSION";
	final public static String TX = "TX";

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
	public boolean accept() {
		return true;
	}

	@Override
	public void exe(List<Object> args, Method handler) {
		Url tag = handler.getAnnotation(Url.class);
		if (tag.transaction()) {
			Session sess = sf.openSession();
			sess.setDefaultReadOnly(tag.readOnly());
			tx = sess.beginTransaction();
			Glue.putThreadAttribute(SESSION, sess);
			Glue.putThreadAttribute(TX, tx);
		}
	}

	@Override
	public void onSuccess(Object ret) {
		if (tx != null) {
			tx.commit();
			logger.debug("commited");
		}
	}

	@Override
	public void onError(Exception e) {
		//e.printStackTrace();
		if (tx != null) {
			tx.rollback();
		}
		if (e instanceof InvocationTargetException) {
			InvocationTargetException ex = (InvocationTargetException) e;
			e = (Exception) ex.getCause();
		}
		StackTraceElement st = e.getStackTrace()[0];
		logger.error("rollbacked because of " + e.getClass().getSimpleName()
				+ " from (" + st.getFileName() + ":" + st.getLineNumber() + ")");
	}

	public void destory() {
		sf.close();
	}

}
