package com.shen.thehome.client;

import java.util.List;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.KeyPressEvent;
import com.google.gwt.event.dom.client.KeyUpEvent;
import com.google.gwt.event.dom.client.KeyUpHandler;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.TextArea;

public class TheHome implements EntryPoint {

	private final CommonServiceAsync commonService = GWT
			.create(CommonService.class);

	public void onModuleLoad() {
		RootPanel rootPanel = RootPanel.get("root");
		final Label status = new Label("hello");
		DockPanel dock = new DockPanel();
		rootPanel.add(dock);
		dock.setStyleName("cw-DockPanel");
		dock.setSpacing(4);
		dock.setHorizontalAlignment(DockPanel.ALIGN_CENTER);
		// Add text all around
		dock.add(status, DockPanel.NORTH);

		FlowPanel eastPanel = new FlowPanel();
		dock.add(eastPanel, DockPanel.EAST);
		final ListBox userListBox = new ListBox(true);
		userListBox.setSize("100px", "370px");
		eastPanel.add(userListBox);

		FlowPanel southPanel = new FlowPanel();
		final TextArea inputArea = new TextArea(); 
		southPanel.add(inputArea);
		dock.add(southPanel, DockPanel.SOUTH);

		FlowPanel scroller = new FlowPanel();
		final TextArea mainWin = new TextArea();
		mainWin.setSize("600px", "300px");
		inputArea.setSize("600px", "50px");
		southPanel.add(inputArea);
		scroller.add(mainWin);
		dock.add(scroller, DockPanel.CENTER);

		inputArea.addKeyUpHandler(new KeyUpHandler(){  
			@Override
			public void onKeyUp(KeyUpEvent event) {
				int code = (int)event.getNativeKeyCode();
				if (code==13){
					String msg = inputArea.getText();
					inputArea.setText("");
					commonService.sendMessage(msg, "all", new AsyncCallback(){ 
						@Override
						public void onFailure(Throwable caught) { 
						} 
						@Override
						public void onSuccess(Object result) { 
						} 
					});
				}  
			} 
		});
		
		
		commonService.login("anonymous", new AsyncCallback<String>() {

			@Override
			public void onFailure(Throwable caught) {
			}

			@Override
			public void onSuccess(String result) {
				status.setText(result); 
				//Window.alert(result); 
			}

		});

		Timer t = new Timer() {
			public void run() {
				commonService.getUsers(new AsyncCallback<List<String>>(){ 
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
				commonService.fetchMessage(new AsyncCallback<List<String>>(){ 
					@Override
					public void onFailure(Throwable caught) {
						// TODO Auto-generated method stub
						
					} 
					@Override
					public void onSuccess(List<String> result) { 
						for (String msg : result) {
							mainWin.setText(mainWin.getText()+ msg);
						} 
					} 
				}); 
				
			}
		};

		// Schedule the timer to run once in 5 seconds.
		t.scheduleRepeating(5000); 
	}
}
