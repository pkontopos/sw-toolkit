package com.shen.apptest.server;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Enumeration;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ProxyServlet extends HttpServlet {

	private static final long serialVersionUID = 8L;

	private static final String HOST_SESSION_ID = "HostSessionID";
	private static final String STRING_LOCATION_HEADER = "Location";
	private static final String LOGIN_PAGE = "login.html";

	private String host = null;

	public void init() throws ServletException {
		host = getServletConfig().getInitParameter("host");
		System.out.println(host);
	}

	@SuppressWarnings("unchecked")
	protected final void service(HttpServletRequest req,
			HttpServletResponse resp) throws ServletException, IOException {

		String targetServer = req.getParameter("url");
		if (targetServer == null) {
			String uri = host + req.getRequestURI();

			String hostSessionId = null;
			if (req.getSession(false) != null) {
				hostSessionId = (String) req.getSession().getAttribute(
						HOST_SESSION_ID);
			}
			if (hostSessionId != null && uri.indexOf(LOGIN_PAGE) == -1
					&& uri.indexOf("j_spring_security_check") == -1) {
				uri += ";jsessionid=" + hostSessionId;
			}

			String query = req.getQueryString();
			if (query != null) {
				uri = uri + "?" + query;
			}
			targetServer = uri;

			if (targetServer.indexOf(LOGIN_PAGE) > 0
					&& targetServer.indexOf("devMode") == -1) {
				if (targetServer.indexOf('?') == -1) {
					targetServer += "?devMode=true";
				} else {
					targetServer += "&devMode=true";
				}
			}

			System.out.println("target:" + targetServer);
		}

		URL rurl = new URL(targetServer);
		String method = req.getMethod().toUpperCase();
		HttpURLConnection connection = null;
		try {
			connection = (HttpURLConnection) rurl.openConnection();
			connection.setDoInput(true);
			connection.setDoOutput(true);
			connection.setReadTimeout(130000);
			connection.setUseCaches(false);

			connection.setInstanceFollowRedirects(false);

			Enumeration<String> headkeys = req.getHeaderNames();
			while (headkeys.hasMoreElements()) {
				String headkey = headkeys.nextElement();
				String headvalue = req.getHeader(headkey);
				if ("cookie".equalsIgnoreCase(headkey)) {
					headvalue = removeJSessionID(headvalue);

					if (headvalue == null || headvalue.length() == 0) {
						continue;
					}
				}
				connection.setRequestProperty(headkey, headvalue);
			}

			connection.setRequestMethod(method);

			if (req.getInputStream().available() == 0) {
				StringBuffer sb = new StringBuffer();
				Map<String, String[]> parms = req.getParameterMap();
				for (String key : parms.keySet()) {
					String[] values = parms.get(key);
					for (String val : values) {
						if (sb.length() > 0) {
							sb.append("&");
						}
						sb.append(key + "=" + val);
					}
				}
				PrintWriter writer = new PrintWriter(
						connection.getOutputStream());
				writer.write(sb.toString());
				writer.close();
			} else {
				_copyStreams(req.getInputStream(),
						connection.getOutputStream(), true);
			}

			int responseCode = connection.getResponseCode();
			if (responseCode >= HttpServletResponse.SC_MULTIPLE_CHOICES /* 300 */
					&& responseCode < HttpServletResponse.SC_NOT_MODIFIED /* 304 */) {
				String stringStatusCode = Integer.toString(responseCode);
				String stringLocation = connection
						.getHeaderField(STRING_LOCATION_HEADER);
				if (stringLocation == null) {
					throw new ServletException("Recieved status code: "
							+ stringStatusCode + " but no "
							+ STRING_LOCATION_HEADER
							+ " header was found in the response");
				}

				int index = stringLocation.indexOf(";jsessionid=");
				if (index > 0) {
					int paramIndex = stringLocation.indexOf('?', index + 1);
					if (paramIndex > 0) {
						stringLocation = stringLocation.substring(0, index)
								+ stringLocation.substring(paramIndex);
					} else {
						stringLocation = stringLocation.substring(0, index);
					}
				}

				if (stringLocation.indexOf("spring_security_login") > 0
						|| stringLocation.indexOf(LOGIN_PAGE) > 0) {
					if (req.getSession(false) != null) {
						req.getSession().removeAttribute(HOST_SESSION_ID);
					}
				} else {
					saveHostSessionID(req, connection, true);

					// hack:so we don't need to modify spring security
					// configuration
					if (stringLocation
							.equalsIgnoreCase("http://127.0.0.1:8888/")
							|| stringLocation
									.equals("http://127.0.0.1:8888/ui/DotmapUI.jsp")) {
						stringLocation = "http://127.0.0.1:8888/DotmapUI.html?gwt.codesvr=127.0.0.1:9997";
					}
				}

				resp.sendRedirect(stringLocation);
				return;
			}

			resp.setStatus(responseCode);
			for (int i = 0;; i++) {
				String headerName = connection.getHeaderFieldKey(i);
				String headerValue = connection.getHeaderField(i);
				if (headerName == null && headerValue == null)
					break;
				if (headerName != null && headerValue != null) {
					if (!headerName.equalsIgnoreCase("Set-Cookie")) {
						resp.setHeader(headerName, headerValue);
					}
				}
			}

			_copyStreams(connection.getInputStream(), resp.getOutputStream(),
					true);
		} finally {
			if (connection != null)
				connection.disconnect();
		}

	}

	private String removeJSessionID(String cookieStr) {
		if (cookieStr == null) {
			return null;
		}

		String newCookieStr = cookieStr;
		for (int jsessionIDIndex = newCookieStr.indexOf("JSESSIONID"); jsessionIDIndex >= 0; jsessionIDIndex = newCookieStr
				.indexOf("JSESSIONID")) {
			int semicolonIndex = newCookieStr.indexOf(';', jsessionIDIndex + 1);
			if (semicolonIndex > 0) {
				newCookieStr = newCookieStr.substring(0, jsessionIDIndex)
						+ newCookieStr.substring(semicolonIndex + 1).trim();
			} else {
				newCookieStr = newCookieStr.substring(0, jsessionIDIndex);
				break;
			}
		}

		return newCookieStr;
	}

	private void saveHostSessionID(HttpServletRequest request,
			HttpURLConnection connection, boolean forceRefreshIfPossible) {
		if (request.getSession().getAttribute(HOST_SESSION_ID) != null
				&& !forceRefreshIfPossible) {
			return;
		}

		String hostSessionId = null;

		String stringLocation = connection
				.getHeaderField(STRING_LOCATION_HEADER);
		if (stringLocation != null) {
			int sessionIDIndex = stringLocation.indexOf(";jsessionid=");
			if (sessionIDIndex > 0) {
				hostSessionId = stringLocation.substring(sessionIDIndex
						+ ";jsessionid=".length());
				int index = hostSessionId.indexOf('?');
				if (index > 0) {
					hostSessionId = hostSessionId.substring(0, index);
				}

				request.getSession().setAttribute(HOST_SESSION_ID,
						hostSessionId);

				return;
			}
		}

		for (int i = 0;; i++) {
			String headerName = connection.getHeaderFieldKey(i);
			String headerValue = connection.getHeaderField(i);
			if (headerName == null && headerValue == null)
				break;
			if (headerName != null && headerValue != null) {
				if (headerName.equalsIgnoreCase("Set-Cookie")) {
					for (int jsessionIDIndex = headerValue
							.indexOf("JSESSIONID"); jsessionIDIndex >= 0; jsessionIDIndex = headerValue
							.indexOf("JSESSIONID")) {
						int semicolonIndex = headerValue.indexOf(';',
								jsessionIDIndex + 1);
						if (semicolonIndex > 0) {
							hostSessionId = headerValue.substring(
									jsessionIDIndex, semicolonIndex).split("=")[1];
							headerValue = headerValue.substring(0,
									jsessionIDIndex)
									+ headerValue.substring(semicolonIndex + 1)
											.trim();
						} else {
							hostSessionId = headerValue.substring(
									jsessionIDIndex).split("=")[1];
							break;
						}
					}
				}
			}
		}
		if (hostSessionId != null) {
			request.getSession().setAttribute(HOST_SESSION_ID, hostSessionId);
		}
	}

	private static void _copyStreams(InputStream input, OutputStream output,
			boolean close) throws IOException {
		byte[] buffer = new byte[1024 * 4];
		int n = 0;
		while (-1 != (n = input.read(buffer))) {
			output.write(buffer, 0, n);
		}
		if (close) {
			output.close();
			input.close();
		}
	}
}
