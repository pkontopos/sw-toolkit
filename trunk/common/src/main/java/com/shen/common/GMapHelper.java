/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.shen.common;

import java.awt.Image;
import java.awt.image.RenderedImage;
import java.io.BufferedInputStream;
import java.io.File;
import java.io.InputStream;
import javax.imageio.ImageIO;
import org.apache.http.HttpEntity;
import org.apache.http.HttpHost;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.conn.params.ConnRoutePNames;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.params.BasicHttpParams;
import org.apache.http.params.HttpConnectionParams;
import org.apache.http.params.HttpParams;
import org.apache.http.protocol.BasicHttpContext;

/**
 *
 * @author ZhijieS
 */
public class GMapHelper {

    HttpHost proxy = new HttpHost("proxy.dialog.com.au", 8085, "http");

    Image getTile(long longitude, long latitude, int zoom) {
        Image image = null;
        try {
            latitude = 90 - latitude;
            longitude = 180 + longitude; 
            double latTileSize = 180 / (Math.pow(2, (17 - zoom)));
            double longTileSize = 360 / (Math.pow(2, (17 - zoom)));  
            int x = (int) (longitude / longTileSize);
            int y = (int) (latitude / latTileSize);

            String uri = "http://khm.google.com.au/vt/lbw/lyrs=m&x="+x+"&y="+y+"&z="+zoom;
            int connection_Timeout = 10 * 1000; //
            HttpParams my_httpParams = new BasicHttpParams();
            HttpConnectionParams.setConnectionTimeout(my_httpParams,
                    connection_Timeout);
            HttpConnectionParams.setSoTimeout(my_httpParams, connection_Timeout);

            DefaultHttpClient httpclient = new DefaultHttpClient(my_httpParams);
            if (proxy != null) {
                httpclient.getParams().setParameter(ConnRoutePNames.DEFAULT_PROXY, proxy);
            }

            BasicHttpContext localcontext = new BasicHttpContext();
            HttpResponse response = httpclient.execute(new HttpGet(uri), localcontext);

            HttpEntity entity = response.getEntity();
            InputStream input = new BufferedInputStream(entity.getContent());
            image = ImageIO.read(input);
            httpclient.getConnectionManager().shutdown();
            System.out.println(uri + ":" + image);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return image;
    }

    private int getMercatorLatitude(double lati, int zoom) {
        double maxlat = Math.PI;
        double lat = lati;
        if (lat > 90) {
            lat = lat - 180;
        }
        if (lat < -90) {
            lat = lat + 180;
        }
        // conversion degre=>radians
        double phi = Math.PI * lat / 180;
        double res;
        res = 0.5 * Math.log((1 + Math.sin(phi)) / (1 - Math.sin(phi)));
        double maxTileY = Math.pow(2, zoom);
        int result = (int) (((1 - res / maxlat) / 2) * (maxTileY));
        return (result);
    }

    public static void main(String[] args) throws Exception {
        GMapHelper gh = new GMapHelper();
        Image image = gh.getTile(150, 150, 5);
        ImageIO.write((RenderedImage) image, "png", new File("c:/test.png"));
    }
}
