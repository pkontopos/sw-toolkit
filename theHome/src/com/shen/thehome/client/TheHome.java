package com.shen.thehome.client;

import java.util.Date;
import java.util.List;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.event.dom.client.ChangeHandler;
import com.google.gwt.event.dom.client.KeyUpEvent;
import com.google.gwt.event.dom.client.KeyUpHandler;
import com.google.gwt.user.client.Cookies;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.user.client.ui.TextBox;
import com.shen.thehome.client.widget.Clock;

public class TheHome implements EntryPoint {

	private final CommonServiceAsync commonService = GWT
			.create(CommonService.class);
	final TextArea mainWin = new TextArea();
	final TextArea inputArea = new TextArea();
	final ListBox userListBox = new ListBox(true);
	final Label status = new Label("idle");

	public void onModuleLoad() {
		RootPanel rootPanel = RootPanel.get("root");
		
		DockPanel dock = new DockPanel();
		rootPanel.add(dock);
		dock.setStyleName("cw-DockPanel");
		dock.setSpacing(4);
		dock.setHorizontalAlignment(DockPanel.ALIGN_CENTER);
		// Add text all around
		 
		HorizontalPanel northPanel = new HorizontalPanel();
		northPanel.setSpacing(3); 
		//northPanel.add();
		
		final TextBox userBox = new TextBox();
		userBox.addChangeHandler(new ChangeHandler() {
			@Override
			public void onChange(ChangeEvent event) {
				login(userBox.getText());
				// set Cookie
				Date now = new Date();
				long nowLong = now.getTime();
				nowLong = nowLong + (1000 * 60 * 60 * 24 * 7);// seven days
				now.setTime(nowLong);
				Cookies.setCookie("userName", userBox.getText(), now);
			}

		});
		String usedName = Cookies.getCookie("userName");
		if (usedName != null) {
			userBox.setText(usedName);
		}

		login(userBox.getText());
		
		dock.add(northPanel, DockPanel.NORTH);

		FlowPanel eastPanel = new FlowPanel();
		dock.add(eastPanel, DockPanel.EAST);

		userListBox.setSize("140px", "390px");
		eastPanel.add(new Clock());
		eastPanel.add(userListBox);

		HorizontalPanel southPanel = new HorizontalPanel();
		southPanel.setSpacing(2);
		FlowPanel userPanel = new FlowPanel();
		
		userPanel.add(userBox);
		userPanel.add(status); 
		southPanel.add(userPanel); 
		southPanel.add(inputArea);
		dock.add(southPanel, DockPanel.SOUTH);

		FlowPanel scroller = new FlowPanel();
		DOM.setElementAttribute(mainWin.getElement(), "id", "mainWin");
		mainWin.setSize("600px", "500px");
		mainWin.setStyleName("mainWin");
		mainWin.setReadOnly(true);
		inputArea.setSize("380px", "50px");
		southPanel.add(inputArea);
		scroller.add(mainWin);
		dock.add(scroller, DockPanel.CENTER);

		inputArea.addKeyUpHandler(new KeyUpHandler() {
			@Override
			public void onKeyUp(KeyUpEvent event) {
				int code = (int) event.getNativeKeyCode();
				if (code == 13) {
					String msg = inputArea.getText();
					inputArea.setText("");
					commonService.sendMessage(msg, "all", new AsyncCallback() {
						@Override
						public void onFailure(Throwable caught) {
						}

						@Override
						public void onSuccess(Object result) {
							getMsg();
						}
					});
				}
			}
		});

		new Timer() {
			public void run() {
				getMsg();
			}
		}.scheduleRepeating(2 * 1000);

		new Timer() {
			public void run() {
				getUser();
			}
		}.scheduleRepeating(30 * 1000);

		
	}

	private void getMsg() {
		commonService.fetchMessage(new AsyncCallback<List<String>>() {
			@Override
			public void onFailure(Throwable caught) {
			}

			@Override
			public void onSuccess(List<String> result) {
				StringBuffer sb = new StringBuffer();
				for (String msg : result) {
					sb.append(msg);

				}
				if (sb.length() > 0) {
					mainWin.setText(mainWin.getText() + sb);
					scroll();
				}
			}
		});
	}

	private void getUser() {
		commonService.getUsers(new AsyncCallback<List<String>>() {
			@Override
			public void onFailure(Throwable caught) {
				// TODO Auto-generated method stub

			}

			@Override
			public void onSuccess(List<String> result) {
				userListBox.clear();
				for (String user : result) {
					userListBox.addItem(user);
				}
			}
		});
	}

	private void login(String userId) {
		if ((userId == null) || (userId.trim().length() == 0))
			userId = "Anonymous";
		commonService.login(userId, new AsyncCallback<String>() {
			@Override
			public void onFailure(Throwable caught) {
			}

			@Override
			public void onSuccess(String result) {
				status.setText(result);
				getUser();
			}
		});
	}

	public static native void scroll() /*-{
		ta = $doc.getElementById("mainWin");
		ta.scrollTop = ta.scrollHeight;
	}-*/;

}
