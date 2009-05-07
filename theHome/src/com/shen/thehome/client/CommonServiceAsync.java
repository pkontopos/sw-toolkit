package com.shen.thehome.client;

import java.util.List;

import com.google.gwt.user.client.rpc.AsyncCallback;

public interface CommonServiceAsync {
	void greetServer(String input, AsyncCallback<String> callback);

	void login(String userId, AsyncCallback<String> callback);

	void getUsers(AsyncCallback<List<String>> callback);

	void sendMessage(String msg, String sendTo,AsyncCallback callback);

	void fetchMessage(AsyncCallback<List<String>> callback);
}
