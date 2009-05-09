package com.shen.thehome.client.widget;

import gwt.canvas.client.Canvas;

import java.util.Date;

import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.Label;

public class Clock extends Composite {
	Canvas ctx;
	Label label;
	long offset = 0;

	public void setTime(long time) {
		Date browserTime = new Date();
		offset = time - browserTime.getTime();
	}

	public Clock() {
		ctx = new Canvas(150, 150);
		ctx.addStyleName("canvas"); 
		FlowPanel fp = new FlowPanel();
		fp.add(ctx);
		label = new Label();
		label.addStyleName("calendar");
		fp.add(label);

		Timer t = new Timer() {
			public void run() {
				Date newTime = new Date(new Date().getTime() + offset);
				updateClock(newTime);
				updateCalendar(newTime);
			}
		};
		t.scheduleRepeating(1000);

		initWidget(fp);
	}

	private void updateCalendar(Date now) {
		ctx.clearRect(0, 150, 150, 200);
		String dateStr = DateTimeFormat.getFormat("dd/MM/yyyy").format(now);
		label.setText(dateStr);
	}

	private void updateClock(Date now) {
		ctx.save();
		ctx.clearRect(0, 0, 150, 150);
		ctx.translate(75, 75);
		ctx.scale(0.4, 0.4);
		ctx.rotate(-Math.PI / 2);
		ctx.setStrokeStyle("black");
		ctx.setFillStyle("white");
		ctx.setLineWidth(3);
		ctx.setLineCap("round");

		// Hour marks
		ctx.save();
		for (int i = 0; i < 12; i++) {
			ctx.beginPath();
			ctx.rotate(Math.PI / 6);
			ctx.moveTo(100, 0);
			ctx.lineTo(120, 0);
			ctx.stroke();
		}
		ctx.restore();

		// Minute marks
		ctx.save();
		ctx.setLineWidth(2);
		for (int i = 0; i < 60; i++) {
			if (i % 5 != 0) {
				ctx.beginPath();
				ctx.moveTo(117, 0);
				ctx.lineTo(120, 0);
				ctx.stroke();
			}
			ctx.rotate(Math.PI / 30);
		}
		ctx.restore();

		long sec = now.getSeconds();
		long min = now.getMinutes();
		long hr = now.getHours();
		hr = hr >= 12 ? hr - 12 : hr;
		ctx.setFillStyle("black");

		// write Hours
		ctx.save();
		ctx.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min
				+ (Math.PI / 21600) * sec);

		ctx.setLineWidth(4);
		ctx.beginPath();
		ctx.moveTo(-20, 0);
		ctx.lineTo(80, 0);
		ctx.stroke();
		ctx.restore();

		// write Minutes
		ctx.save();
		ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);

		ctx.setLineWidth(4);
		ctx.beginPath();
		ctx.moveTo(-28, 0);
		ctx.lineTo(112, 0);
		ctx.stroke();
		ctx.restore();

		// Write seconds
		ctx.save();
		ctx.rotate(sec * Math.PI / 30);

		ctx.setStrokeStyle("#D40000");
		ctx.setFillStyle("#D40000");
		ctx.setLineWidth(2);

		ctx.beginPath();
		ctx.moveTo(-30, 0);
		ctx.lineTo(110, 0);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
		ctx.fill();
		ctx.beginPath();
		ctx.arc(70, -1, 20, 0, Math.PI * 2, true);
		ctx.stroke();
		ctx.closePath();
		ctx.setFillStyle("#555");
		ctx.beginPath();
		ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
		ctx.fill();
		ctx.restore();

		ctx.beginPath();
		ctx.setLineWidth(5);
		ctx.setStrokeStyle("#325FA2");
		ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
		ctx.stroke();

		ctx.restore();
	}
}
