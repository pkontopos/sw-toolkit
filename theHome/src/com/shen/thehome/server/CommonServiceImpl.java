package com.shen.thehome.server;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.google.gwt.user.server.rpc.RemoteServiceServlet;
import com.shen.thehome.client.CommonService;

/**
 * The server side implementation of the RPC service.
 */
@SuppressWarnings("serial")
public class CommonServiceImpl extends RemoteServiceServlet implements
		CommonService {
	MessageStore ms = new MemoryMessageStore();
	Map<String, Date> userMap = new LinkedHashMap<String, Date>();

	public String greetServer(String input) {
		String serverInfo = getServletContext().getServerInfo();
		String userAgent = getThreadLocalRequest().getHeader("User-Agent");
		return "Hello, " + input + "!<br><br>I am running " + serverInfo
				+ ".<br><br>It looks like you are using:<br>" + userAgent;
	}

	@Override
	public List<String> fetchMessage() {
		Date lastFetch = (Date) userMap.get(getCurrentUser());
		if (lastFetch == null) {// get 1 day ago
			Calendar c1 = Calendar.getInstance();
			c1.add(Calendar.DATE, -1);
			lastFetch = c1.getTime();
		}
		userMap.put(getCurrentUser(), new Date());
		return ms.fetchMessage(getCurrentUser(), lastFetch);
	}

	@Override
	public void sendMessage(String msg, String receiver) {
		ms.sendMessage(msg, getCurrentUser(), receiver);
	}

	@Override
	public String login(String userId) {
		String oldId = (String) getSession().getAttribute("userId");
		getSession().setAttribute("userId", userId);
		userMap.put(userId, new Date());
		userMap.remove(oldId);
		return "login in";
	}

	@Override
	public List<String> getUsers() {
		// remove idle user (1 min);
		long now = new Date().getTime();
		long expireTime = 60 * 1000;
		Set<String> userSet = userMap.keySet();
		List<String> removedUser = new ArrayList<String>();
		for (String userId : userSet) {
			Date last = (Date) userMap.get(userId);
			if ((now - last.getTime()) > expireTime) {
				removedUser.add(userId);
			}
		}
		for (String userId : removedUser) {
			userMap.remove(userId);
		}
		List<String> uList = new ArrayList<String>(userSet);

		return uList;
	}

	private String getCurrentUser() {
		String userId = (String) getSession().getAttribute("userId");
		if (userId == null)
			userId = "unknown";
		return userId;
	}

	private HttpSession getSession() {
		HttpServletRequest request = this.getThreadLocalRequest();
		HttpSession session = request.getSession();
		return session;
	}
}
