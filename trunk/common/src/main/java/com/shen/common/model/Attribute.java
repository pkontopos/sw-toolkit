/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.shen.common.model;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

/**
 * 
 * @author ZhijieS
 */
@Retention(RetentionPolicy.RUNTIME)
public @interface Attribute {
	
	String type() default "";

	String name() default "";

	String desc() default "";

	String restriction() default "";

	String errorMessage() default "";
}
