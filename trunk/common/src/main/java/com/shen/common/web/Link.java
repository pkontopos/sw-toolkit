/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.shen.common.web;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

/**
 *
 * @author ZhijieS
 */
@Retention(RetentionPolicy.RUNTIME) 
public @interface Link {
    String value() ;
}
