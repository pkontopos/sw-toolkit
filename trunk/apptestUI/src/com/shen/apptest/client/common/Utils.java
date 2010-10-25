package com.shen.apptest.client.common;

import java.util.HashMap;
import java.util.Map;

import com.google.gwt.core.client.GWT;
import com.google.gwt.http.client.Request;
import com.google.gwt.http.client.RequestBuilder;
import com.google.gwt.http.client.RequestCallback;
import com.google.gwt.http.client.RequestException;
import com.google.gwt.http.client.Response;
import com.google.gwt.http.client.URL;
import com.google.gwt.user.client.ui.HasName;
import com.google.gwt.user.client.ui.HasValue;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.gwt.user.client.ui.Widget;

public class Utils {
	public static interface Callback {
		public abstract void exec(String ret);
	}

	@SuppressWarnings("rawtypes")
	public static Map<String, String> getValues(HasWidgets container) {
		Map<String, String> values = new HashMap<String, String>();
		for (Widget widget : container) {
			if ((widget instanceof HasValue) && (widget instanceof HasName)) {
				String name = ((HasName) widget).getName();
				Object value = ((HasValue) widget).getValue();
				values.put(name, value.toString());
			} else if (widget instanceof HasWidgets) {
				values.putAll(getValues((HasWidgets) widget));
			}
		}
		return values;
	}

	public static void post(String url, Map<String, Object> params,
			final Callback callback) {
		StringBuffer sb = new StringBuffer();
		if (params != null) {
			for (Object key : params.keySet()) {
				String name = (String) key;
				String value = (params.get(key) != null) ? params.get(key)
						.toString() : "";
				if (sb.length() > 0) {
					sb.append("&");
				}
				String encodedName = URL.encodeQueryString(name);
				sb.append(encodedName);
				sb.append("=");
				String encodedValue = URL.encodeQueryString(value);
				sb.append(encodedValue);
			}
		}
		String data = sb.toString();
		GWT.log(data);
		System.out.println(data);
		try {
			if (GWT.isScript()) {
				url = "../../" + url;
			} else {
				url = "../" + url;
			}

			RequestBuilder builder = new RequestBuilder(RequestBuilder.POST,
					url);
			builder.setHeader("Content-type",
					"application/x-www-form-urlencoded");

			builder.sendRequest(data, new RequestCallback() {
				public void onError(Request request, Throwable exception) {
					if (callback != null) {
						callback.exec(null);
					}
				}

				public void onResponseReceived(Request request,
						Response response) {
					if (response.getStatusCode() == Response.SC_FORBIDDEN) {

					} else if (callback != null) {
						callback.exec(response.getText());
					}
				}
			});
		} catch (RequestException e) {
			if (callback != null)
				callback.exec(null);
		}
	}
}
