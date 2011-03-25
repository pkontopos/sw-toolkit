package com.shen.smtb;

import java.io.BufferedInputStream;
import java.util.ArrayList;
import java.util.List;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.View.OnClickListener;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import com.shen.smtb.domain.BillItem;
import com.shen.smtb.domain.Site;

public class BillAdapter extends BaseAdapter implements OnClickListener {
	private static final int TYPE_ITEM = 0;
	private static final int TYPE_GROUP = 1;

	List<Object> items = new ArrayList<Object>();
	List<BillItem> bills;
	List<Integer> groupSet = new ArrayList<Integer>();

	public int getViewTypeCount() {
		return 2;
	};

	@Override
	public int getItemViewType(int position) {
		return groupSet.contains(position) ? TYPE_GROUP : TYPE_ITEM;

	}

	public BillAdapter(List<BillItem> bills) {
		this.bills = bills;
	}

	public void update() {
		items.clear();
		groupSet.clear();
		Site site = null;
		for (BillItem billItem : bills) {
			if (billItem.getSite() != null) {
				if (!billItem.getSite().equals(site)) {
					site = billItem.getSite();
					items.add(site);
					groupSet.add(items.size() - 1);
				}
			}
			this.items.add(billItem);
			Log.i(Utils.tag, billItem.toString());
		}
		notifyDataSetChanged();
	}

	@Override
	public int getCount() {
		return items.size();
	}

	@Override
	public Object getItem(int position) {
		return items.get(position);
	}

	@Override
	public long getItemId(int position) {
		return position;
	}

	@Override
	public View getView(int position, View convertView, ViewGroup parent) {
		int viewType = getItemViewType(position);
		Object line = items.get(position);
		if (convertView == null) {
			LayoutInflater inflater = (LayoutInflater) parent.getContext()
					.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
			if (viewType == TYPE_ITEM) {
				convertView = inflater.inflate(R.layout.bill_item, null);
				if (line instanceof BillItem) {
					BillItem billItem = (BillItem) line;
					((TextView) convertView.findViewById(R.id.Bill_Key))
							.setText(billItem.getKey());
					((TextView) convertView.findViewById(R.id.Bill_Value))
							.setText(billItem.getValue());
				}
			}
			if (viewType == TYPE_GROUP) {
				convertView = inflater.inflate(R.layout.site, null);
				if (line instanceof Site) {
					Site site = (Site) line;
					((TextView) convertView.findViewById(R.id.SiteTitle))
							.setText(site.getName().toUpperCase());

					((ImageView) convertView.findViewById(R.id.SiteIcon))
							.setImageBitmap(site.getIcon());
				}

			}
		}
		return convertView;
	}

	@Override
	public void onClick(View v) {

	}
}
