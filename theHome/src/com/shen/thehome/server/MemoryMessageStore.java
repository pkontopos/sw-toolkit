package com.shen.thehome.server;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;

public class MemoryMessageStore implements MessageStore {
	private List<Message> messageList = Collections
			.synchronizedList(new ArrayList<Message>());

	private long expireTime = 0;// 10 * 60 * 1000 10mins

	@Override
	public List<String> fetchMessage(String receiver, Date lastFetch) {
		// long last = lastFetch.getTime();
		List<String> newList = new ArrayList<String>();
		for (int i = messageList.size() - 1; i >= 0; i--) {
			Message message = messageList.get(i);
			if (lastFetch.before(message.time)) {
				String time = new SimpleDateFormat("yyyy/MM/dd HH:mm")
						.format(message.time);
				newList.add("(" + time + ")\n" + message.sender + ": "
						+ message.message);
			} else {
				break;
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