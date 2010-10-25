package com.shen.apptest.util;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

public class Utils implements ApplicationContextAware {

	private static ApplicationContext context;

	public void setApplicationContext(ApplicationContext applicationContext) {
		Utils.context = applicationContext;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static List getSpringBeans(String match) {
		List l = new ArrayList();
		String[] beanArray = context.getBeanDefinitionNames();
		for (int j = 0; j < beanArray.length; j++) {
			if (isMatch(beanArray[j], match)) {
				l.add(context.getBean(beanArray[j]));
			}
		}
		return l;
	}

	public static Object getBean(String match) {
		String[] beanArray = context.getBeanDefinitionNames();
		for (int j = 0; j < beanArray.length; j++) {
			if (isMatch(beanArray[j], match)) {
				return context.getBean(beanArray[j]);
			}
		}
		return null;
	}

	static private boolean isMatch(String beanName, String mappedName) {
		return (mappedName.equals(beanName))
				|| (mappedName.endsWith("*") && beanName.startsWith(mappedName
						.substring(0, mappedName.length() - 1)))
				|| (mappedName.startsWith("*") && beanName.endsWith(mappedName
						.substring(1, mappedName.length())));
	}
	
	public static UserDetails getUserDetails() {
		try {
			SecurityContext context = SecurityContextHolder.getContext();
			if (context == null) { return null; } 
			Authentication auth = context.getAuthentication();
			if (auth == null) { return null; } 
			Object principal = auth.getPrincipal();
			if (principal instanceof UserDetails) {
				return ((UserDetails) principal);
			}
		} catch (Exception e) {

		} 
		return null;
	}
}
