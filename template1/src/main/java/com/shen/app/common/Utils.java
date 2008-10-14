package com.shen.app.common;

import java.lang.reflect.InvocationTargetException;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.beanutils.BeanUtils;

public class Utils {
	public static void populate(Object bean, HttpServletRequest request, String prefix) {
        Map map = request.getParameterMap();
        Map valueMap = new HashMap();
        Set keys = map.keySet();
        for (Object key : keys) {
            if (key instanceof String) {
                String theKey = (String) key;
                if ((prefix!=null)&&(theKey.indexOf(prefix) == 0)) {
                    String newKey = theKey.substring(prefix.length());
                    valueMap.put(newKey, map.get(key));
                }else{
                	valueMap.put(key, map.get(key));
                }
            }
        }
        //System.out.println(valueMap);
        try {
            BeanUtils.populate(bean, valueMap);
        } catch (IllegalAccessException ex) {
            Logger.getLogger(Utils.class.getName()).log(Level.SEVERE, null, ex);
        } catch (InvocationTargetException ex) {
            Logger.getLogger(Utils.class.getName()).log(Level.SEVERE, null, ex);
        }
    } 
}
