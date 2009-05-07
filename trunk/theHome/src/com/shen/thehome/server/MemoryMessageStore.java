package com.shen.thehome.server;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class MemoryMessageStore implements MessageStore {
	private List<Message> messageList = new ArrayList<Message>();
	private long expireTime = 0;// 10 * 60 * 1000 10mins

	@Override
	public List<String> fetchMessage(String receiver, Date lastFetch) {
		long last = lastFetch.getTime();
		List<String> newList = new ArrayList<String>();
		for (Message message : messageList) {
			if  (last < message.time.getTime())  {
				newList.add(message.sender+": "+message.message);
			}
		} 
		return newList;
	}

	@Override
	public void sendMessage(String msg, String sender, String receiver) {
		Message message = new Message();
		message.message = msg;
		message.sender = sender;
		message.receiver = receiver;
		messageList.add(message);
		checkExpire();
	}

	@Override
	public void setExpireTime(long time) {
		expireTime = time;
	}

	private void checkExpire() {
		if (expireTime == 0)
			return;
		long now = new Date().getTime();
		List<Message> expiredList = new ArrayList<Message>();
		for (Message message : messageList) {
			if ((now - message.time.getTime()) > expireTime) {
				expiredList.add(message);
			}
		}
		for (Message message : expiredList) {
			expiredList.remove(message);
		}
	}

}

class Message {
	String message = "";
	String sender = "";
	String receiver = "";
	Date time = new Date();
}