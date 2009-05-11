package com.shen.thehome.client;

import java.util.List;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.json.client.JSONArray;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONString;

public class JQuery {
	public static native String run(JavaScriptObject command) /*-{
		return $wnd.patch(command);
	}-*/;

	public static String exe(String method, List<String> parameters) {
		JSONObject obj = new JSONObject();
		obj.put("method", new JSONString(method));
		JSONArray params = new JSONArray();
		int index = 0;
		for (String para : parameters) { 
			params.set(index, new JSONString(para));
			index++;
		}
		obj.put("params", new JSONArray()); 
		JavaScriptObject jsObj = obj.getJavaScriptObject();
		return run(jsObj);
	}

}
