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
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.user.client.ui.TextBox;

public class TheHome implements EntryPoint {

	private final CommonServiceAsync commonService = GWT
			.create(CommonService.class);
	final TextArea mainWin = new TextArea();
	final TextArea inputArea = new TextArea();

	public void onModuleLoad() {
		RootPanel rootPanel = RootPanel.get("root");
		final Label status = new Label("hello");
		DockPanel dock = new DockPanel();
		rootPanel.add(dock);
		dock.setStyleName("cw-DockPanel");
		dock.setSpacing(4);
		dock.setHorizontalAlignment(DockPanel.ALIGN_CENTER);
		// Add text all around
		FlowPanel northPanel = new FlowPanel();
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
		northPanel.add(userBox);
		northPanel.add(status);
		dock.add(northPanel, DockPanel.NORTH);

		FlowPanel eastPanel = new FlowPanel();
		dock.add(eastPanel, DockPanel.EAST);
		final ListBox userListBox = new ListBox(true);
		userListBox.setSize("100px", "370px");
		eastPanel.add(userListBox);

		FlowPanel southPanel = new FlowPanel();

		southPanel.add(inputArea);
		dock.add(southPanel, DockPanel.SOUTH);

		FlowPanel scroller = new FlowPanel(); 
		DOM.setElementAttribute(mainWin.getElement(), "id", "mainWin");
		mainWin.setSize("600px", "300px");
		mainWin.setStyleName("mainWin");
		mainWin.setReadOnly(true);
		inputArea.setSize("600px", "50px");
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
		}.scheduleRepeating(5 * 1000);

		new Timer() {
			public void run() {
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
		}.scheduleRepeating(30 * 1000);

	}

	private void getMsg() {
		commonService.fetchMessage(new AsyncCallback<List<String>>() {
			@Override
			public void onFailure(Throwable caught) {
			}

			@Override
			public void onSuccess(List<String> result) {
				for (String msg : result) {
					mainWin.setText(mainWin.getText() + msg);
					//mainWin.setCursorPos(mainWin.getText().length());
					//inputArea.setFocus(true);
					scroll();
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
			}
		});
	}

	public static native void scroll() /*-{
		ta = $doc.getElementById("mainWin");
		ta.scrollTop = ta.scrollHeight;
	}-*/;

}
