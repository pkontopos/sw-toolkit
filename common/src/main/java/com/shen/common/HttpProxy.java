/**
 * @author shen
 * 28/04/2009 
 */
package com.shen.common;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.Serializable;
import java.net.MalformedURLException;
import java.util.Date;
import java.util.Enumeration;
import java.util.concurrent.Semaphore;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.UsernamePasswordCredentials;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.client.methods.HttpRequestBase;
import org.apache.http.entity.InputStreamEntity;
import org.apache.http.impl.auth.BasicScheme;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.params.BasicHttpParams;
import org.apache.http.params.HttpConnectionParams;
import org.apache.http.params.HttpParams;
import org.apache.http.protocol.BasicHttpContext;
import org.apache.jcs.JCS;
import org.apache.jcs.access.exception.CacheException;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;


public class HttpProxy extends HttpServlet {

    private static final long serialVersionUID = -6353578604810273633L;
    static Log logger = LogFactory.getLog(HttpProxy.class);
    String proxyHost = null;
    String userPass = null;
    int thread = 0;
    int timeout = 60;

    @Override
    public void init(ServletConfig servletConfig) throws ServletException {
        super.init(servletConfig);
        proxyHost = getServletConfig().getInitParameter("proxyHost");
        userPass = getServletConfig().getInitParameter("userPass");
        String threadStr = getServletConfig().getInitParameter("thread");
        if (threadStr != null) {
            thread = Integer.parseInt(threadStr);
            if (thread > 1) {
                semp = new Semaphore(thread);
            }
        }
        String timeoutStr = getServletConfig().getInitParameter("timeout");
        if (timeoutStr != null) {
            timeout = Integer.parseInt(timeoutStr);
        }
    }

    /*
     * protected void doGet(HttpServletRequest req, HttpServletResponse resp)
     * throws ServletException, IOException { doProxy(req, resp); }
     *
     * protected void doPost(HttpServletRequest req, HttpServletResponse resp)
     * throws ServletException, IOException { doProxy(req, resp); }
     */
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        doProxy(req, resp);
    }

    private void doProxy(final HttpServletRequest req,
            final HttpServletResponse res) {
        long startTime = 0;
        long proxyStartTime = 0;
        long endTime = 0;
        String single = "";

        startTime = new Date().getTime();
        if (semp != null) {// muti-task proxy, for remote wms server
            try {
                startProxy();
                proxyStartTime = proxy(req, res);
            } catch (Exception e1) {
            }
            endProxy();
        } else {// single thread proxy, for local geoserver
            logger.debug("start");
            proxyStartTime = singleProxy(req, res);
            single = "single";
        }
        endTime = new Date().getTime();
        String hitCache = "";
        if (proxyStartTime < 0) {
            hitCache = "using cache";
            proxyStartTime = -proxyStartTime;
        }
        long waitTime = proxyStartTime - startTime;
        long exeTime = endTime - proxyStartTime;
        logger.debug(single + " proxy is done " + hitCache + ",wait:" + waitTime + ",process:" + exeTime);
        if (exeTime > 20 * 1000) {
            logger.warn("slow layer,uri:" + req.getQueryString());
        }
    }

    synchronized private long singleProxy(final HttpServletRequest req,
            final HttpServletResponse res) {
        long time = 0;
        try {
            time = proxy(req, res);
        } catch (Exception e) {
        }
        return time;
    }
    private Semaphore semp = null;
    private long lastExeTime = 0;

    private void startProxy() throws InterruptedException {
        long now = new Date().getTime();
        if (((now - lastExeTime) > (20 * 1000)) && (semp.availablePermits() == 0)) {
            logger.debug("give");
            semp.release();
        }
        semp.acquire();
        lastExeTime = now;
    }

    private void endProxy() {
        semp.release();
        if (semp.availablePermits() == 5) {
            // System.out.println("proxy is free");
        } else if (semp.availablePermits() > 5) {
            try {
                semp.acquire();
            } catch (InterruptedException e) {
            }
        } else {
            // System.out.println("free:" + semp.availablePermits());
        }
    }

    private ResData fetchData(String uri, String userPass, String method,
            HttpServletRequest request) throws ClientProtocolException,
            IOException {
        ResData data = new ResData();

        int connection_Timeout = timeout * 1000; //
        HttpParams my_httpParams = new BasicHttpParams();
        HttpConnectionParams.setConnectionTimeout(my_httpParams,
                connection_Timeout);
        HttpConnectionParams.setSoTimeout(my_httpParams, connection_Timeout);

        DefaultHttpClient httpclient = new DefaultHttpClient(my_httpParams);
        BasicHttpContext localcontext = new BasicHttpContext();
        if (userPass != null) {
            String[] up = userPass.split(":");
            httpclient.getCredentialsProvider().setCredentials(
                    new AuthScope(null, -1),
                    new UsernamePasswordCredentials(up[0], up[1]));

            BasicScheme basicAuth = new BasicScheme();
            localcontext.setAttribute("preemptive-auth", basicAuth);
            //httpclient.addRequestInterceptor(new PreemptiveAuth(), 0);
        }
        // for rest
        HttpRequestBase requestBase = null;
        /*
         * List<BasicNameValuePair> nameValuePairs = new ArrayList<BasicNameValuePair>();
         * Map<String, String> vMap = request.getParameterMap(); for (Object
         * key : vMap.keySet()) { Object value = vMap.get(key);
         * nameValuePairs.add(new BasicNameValuePair(key.toString(), value
         * .toString())); }
         */
        // requestBase.setHeader(header);
        if ("get".equals(method)) {
            requestBase = new HttpGet(uri);
        } else if ("post".equals(method)) {
            requestBase = new HttpPost(uri);
            InputStreamEntity entity = new InputStreamEntity(request.getInputStream(), 0);
            ((HttpPost) requestBase).setEntity(entity);
        } else if ("put".equals(method)) {
            requestBase = new HttpPut(uri);
            InputStreamEntity entity = new InputStreamEntity(request.getInputStream(), 0);
            ((HttpPost) requestBase).setEntity(entity);
        } else if ("delete".equals(method)) {
            requestBase = new HttpDelete(uri);
        }
        //add header
        for (Enumeration e = request.getHeaderNames(); e.hasMoreElements();) {
            String headName = (String) e.nextElement();
            String headValue = request.getHeader(headName);
            if ("content-type".equals(headName)) {
                requestBase.setHeader(headName, headValue);
            }
        }

        HttpResponse response = httpclient.execute(requestBase, localcontext);
        HttpEntity entity = response.getEntity();
        InputStream input = new BufferedInputStream(entity.getContent());
        ByteArrayOutputStream bytestream = new ByteArrayOutputStream();
        int c;
        while ((c = input.read()) >= 0) {
            bytestream.write(c);
        }
        byte[] theBytes = bytestream.toByteArray();
        bytestream.close();
        // System.out.println(theBytes.length);
        data.data = theBytes;
        if (entity.getContentType() != null) {
            data.contentType = entity.getContentType().toString();
        }
        httpclient.getConnectionManager().shutdown();
        return data;
    }

    private long proxy(HttpServletRequest req, HttpServletResponse res)
            throws MalformedURLException, IOException {

        long time = new Date().getTime();
        String uri = req.getRequestURI() + '?' + req.getQueryString();
        String context = req.getContextPath() + req.getServletPath();
        String url = req.getParameter("url");
        if (url == null) {
            uri = proxyHost + uri.substring(context.length());
        } else {
            uri = url + uri.substring(context.length());
        } 
        // try to load from cache
        ResData data = null;
        // logger.debug(uri);
        try {
            data = (ResData) JCS.getInstance("map").get(uri);
        } catch (CacheException e) {
        }
        if (data == null) {
            // fetch
            try {
                data = fetchData(uri, userPass, req.getMethod().toLowerCase(),
                        req);
            } catch (Exception e) {
                //e.printStackTrace();
                logger.error(uri + " error or time out");
                return time;
            }
            // logger.debug(data.data.length+","+data.contentType );
            // if ((data.data.length > 8000)
            if (data.contentType.indexOf("image") != -1) {
                try {
                    JCS.getInstance("map").put(uri, data);
                    // logger.debug("save to cache");
                } catch (CacheException e) {
                }
            }
        } else {
            // logger.debug("cache is hitted");
            time = -time;
        }
        // System.out.println(data.contentType);
        res.setContentType(data.contentType);
        res.setContentLength(data.data.length);// necessary?
        // res.setStatus(data.responseCode);
        BufferedOutputStream out = new BufferedOutputStream(res.getOutputStream());
        out.write(data.data);
        out.flush();
        out.close();
        return time;
    }
}
class ResData implements Serializable {

    public byte[] data;
    public String contentType;
    public int responseCode;
}
