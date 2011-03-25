package com.shen.smtb;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import android.app.Activity;
import android.content.Context;
import android.graphics.Bitmap;
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;
import android.view.Window;
import android.widget.ImageButton;
import android.widget.ListView;

import com.shen.smtb.SiteReader.Callback;
import com.shen.smtb.domain.BillItem;
import com.shen.smtb.domain.Site;

public class ListBills extends Activity {
	static final String tag = "SMTB";

	private ListView billListView;
	private BillAdapter billAdapter;

	List<BillItem> bills = new ArrayList<BillItem>();
	static Context ctx;
	SiteReader reader;

	@Override
	public void onCreate(Bundle savedInstanceState) {

		requestWindowFeature(Window.FEATURE_PROGRESS);
		setProgressBarVisibility(true);

		ctx = this.getApplicationContext();

		super.onCreate(savedInstanceState);
		setContentView(R.layout.main);

		billListView = (ListView) findViewById(R.id.BillList);
		billAdapter = new BillAdapter(bills);
		billListView.setAdapter(billAdapter);

		reader = new SiteReader(ctx);
		reader.setCallback(new Callback() {
			@Override
			public void onFinish(final String message, final String siteName) {

				updateList(message, loadSite(siteName));
			}

			@Override
			public void onChange(String msg, Integer progress) {
				if (msg != null) {
					ListBills.this.setTitle(msg);
				}
				if (progress != null) {
					ListBills.this.setProgress(progress * 100);
				}
			}
		});

		ImageButton refreshBtn = (ImageButton) findViewById(R.id.RefreshBtn);
		refreshBtn.setFocusable(false);
		refreshBtn.setOnClickListener(new OnClickListener() {
			public void onClick(View v) {
				reader.loadSite("myki");
			}
		});

	}

	private Site loadSite(String siteName) {
		Site site = new Site();
		site.setName(siteName);
		Bitmap icon = Utils.readImage(ctx, "sites/" + siteName + ".png");
		site.setIcon(icon);
		return site;
	}

	void updateList(final String message, final Site site) {
		ListBills.this.runOnUiThread(new Runnable() {
			@Override
			public void run() {
				bills.clear();
				String msg = message.replaceAll("\n", "").replaceAll(" ", "");
				String[] lines = msg.split(";");
				for (String line : lines) {
					String[] keyValue = line.split("=");
					bills.add(new BillItem(site, keyValue[0], keyValue[1]));
				}
				billAdapter.update();
				ListBills.this.setProgress(0);
				ListBills.this.setTitle("Last updated at " + new Date());
			}
		});
	}
}
