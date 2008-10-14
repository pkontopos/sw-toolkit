/**
 * @author shen
 * 03/10/2008 
 */
package com.shen.app.common;

import java.lang.reflect.Method;

import org.aopalliance.intercept.MethodInterceptor;
import org.aopalliance.intercept.MethodInvocation;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class CommonLogger implements MethodInterceptor {

	public Object invoke(MethodInvocation invocation) throws Throwable {

		Log logger = LogFactory.getLog(invocation.getThis().getClass());
		Method m = invocation.getMethod();
		if (logger.isDebugEnabled()) {
			
			StringBuffer sb = new StringBuffer();
			sb.append(m.getName() + "(");
			Object[] objArray = invocation.getArguments();
			for (Object obj : objArray) {
				sb.append(obj + ",");
			}
			sb.append(")");
			logger.debug(sb + "  - start"); //$NON-NLS-1$ //$NON-NLS-2$
		}
		Object rval = invocation.proceed();
		if (logger.isDebugEnabled()) {
			logger.debug(m.getName() + " - end"); //$NON-NLS-1$
		}
		return rval;
	}
}
