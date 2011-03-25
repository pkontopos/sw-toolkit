package com.shen.smtb;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;

public class Utils {
	public static String tag = "SMTB";

	public static String readFile(Context ctx, String asset) {
		InputStream is = null;
		try {
			is = ctx.getAssets().open(asset);
			byte[] bytes = new byte[1000];
			StringBuilder x = new StringBuilder();
			int numRead = 0;
			while ((numRead = is.read(bytes)) >= 0) {
				x.append(new String(bytes, 0, numRead));
			}
			return x.toString();
		} catch (IOException e) {
			return null;
		} finally {
			if (is != null)
				try {
					is.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
		}
	}

	public static Bitmap readImage(Context ctx, String asset) {
		BufferedInputStream buf;
		try {
			buf = new BufferedInputStream(ctx.getAssets().open(asset));
			return BitmapFactory.decodeStream(buf);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
}
