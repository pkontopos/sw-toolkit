package com.shen.webglue.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * example : @Uri("testUrl.json")
 * @return
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface Uri {

	String value();

	/**
	 * for hibernate plugin
	 * set to false if doesn't need hibernate support
	 * @return
	 */
	boolean transaction() default true;

	/**
	 * for hibernate plugin
	 * set to true if it's readonly for database
	 * @return
	 */
	boolean readOnly() default false;
}
