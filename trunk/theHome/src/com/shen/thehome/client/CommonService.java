package com.shen.thehome.client;

import java.util.List;

import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;

/**
 * The client side stub for the RPC service.
 */
@RemoteServiceRelativePath("common")
public interface CommonService extends RemoteService {
	String greetServer(String name);

	String login(String userId);
	List<String> getUsers();

	void sendMessage(String msg, String sendTo);

	List<String> fetchMessage();

}

