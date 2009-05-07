package com.shen.thehome.server;

import java.util.Date;
import java.util.List;

public interface MessageStore {
	List<String> fetchMessage(String receiver,Date lastFetch);
	void sendMessage(String msg,String sender,String receiver);
	void setExpireTime(long time);
}
