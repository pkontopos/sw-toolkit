package com.shen.smtb;

import java.util.HashMap;
import java.util.Map;

import android.content.Context;
import android.graphics.Bitmap;
import android.util.Log;
import android.view.View;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class SiteReader {
	Context ctx;
	Callback callback;
	WebView webView;
	private String tag = "SMTB";
	Map<String, String> params = new HashMap<String, String>();
	String siteName = null;
	String defineStr = null;

	public SiteReader(Context context) {
		this.ctx = context;
		webView = new WebView(ctx);

		webView.setWebViewClient(new WebViewClient() {
			public boolean shouldOverrideUrlLoading(WebView view, String url) {
				view.loadUrl(url);
				return true;
			}

			@Override
			public void onReceivedError(WebView view, int errorCode,
					String description, String failingUrl) {

				Log.e(tag, "" + errorCode);
				super.onReceivedError(view, errorCode, description, failingUrl);
			}

			@Override
			public void onPageStarted(WebView view, String url, Bitmap favicon) {
				callback.onChange("loading " + url, 0);
				super.onPageStarted(view, url, favicon);
			}

			@Override
			public void onPageFinished(WebView view, String url) {
				callback.onChange("reading page", 0);
				String jqueryStr = Utils.readFile(ctx, "jquery");
				webView.loadUrl("javascript:" + jqueryStr);
				Log.i(tag, "jquery is loaded");
				webView.loadUrl("javascript: var SMTB={};");
				Map<String, String> params = new HashMap<String, String>();
				params.putAll(getParameters());
				params.put("url", url);
				for (String key : params.keySet()) {
					String script = " SMTB." + key + "='"
							+ getParameters().get(key) + "';";
					webView.loadUrl("javascript:" + script);
				}
				Log.i(tag, "params is set");
				String sc = getOnLoadScript(url);
				if (sc != null) {
					webView.loadUrl("javascript:" + sc);
					Log.i(tag, "scripts is excuted");
				}

				super.onPageFinished(view, url);
				Log.i(tag, "------on page load done---------");
			}
		});
		webView.setWebChromeClient(new WebChromeClient() {
			@Override
			public void onProgressChanged(WebView view, int progress) {
				callback.onChange(null, progress);
			}
		});
		webView.getSettings().setJavaScriptEnabled(true);
		webView.getSettings().setLoadsImagesAutomatically(false);
		webView.getSettings().setLoadWithOverviewMode(true);
		webView.setVisibility(View.INVISIBLE);
		webView.addJavascriptInterface(new JSInterface(), "SMTB_CALL");
	}

	public void setCallback(Callback callback) {
		this.callback = callback;
	}

	public void loadSite(String siteName) {
		this.siteName = siteName;
		defineStr = Utils.readFile(ctx, "sites/" + siteName);
		webView.loadUrl(getUrl());
	}

	public class JSInterface {
		public void setValue(final String msg) {
			callback.onFinish(msg, siteName);
		}
	}

	public interface Callback {

		void onChange(String msg, Integer progress);

		void onFinish(String msg, String server);
	}

	private Map<String, String> getParameters() {
		params.put("user", "zhijieshen");
		params.put("pass", "tianqi123");
		return params;
	}

	private String getUrl() {
		String[] defines = defineStr.split("\n");
		for (String line : defines) {
			if (line.startsWith("URL=")) {
				return line.substring(4);
			}
		}
		return null;
	}

	private String getOnLoadScript(String pageUrl) {
		int pos = defineStr.toLowerCase().indexOf(pageUrl.toLowerCase().trim());
		if (pos != -1) {
			int scriptStart = defineStr.indexOf("<--", pos) + 3;
			int scriptEnd = defineStr.indexOf("-->", pos);
			Log.i(Utils.tag, scriptStart + "-" + scriptEnd);
			String script = defineStr.substring(scriptStart, scriptEnd);
			// Log.i(Utils.tag, "found: " + script);
			if (!script.contains("URL=")) {
				Log.i(Utils.tag, pageUrl + ",loading scripts:" + script);
				return script;
			} else {
				Log.i(Utils.tag, "doesn't have script for" + pageUrl + ","
						+ script);
			}
		} else {
			Log.i(Utils.tag, "CAN'T FIND " + pageUrl + " >" + defineStr);
		}
		// Log.i(Utils.tag, "no scripts for " + pageUrl);
		return null;
	}
}
