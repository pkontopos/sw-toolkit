package com.shen.webglue.test.helper;

public class TestService {
	String sayHello() {
		return "hello service";
	}

	String sayHello(User user) {
		return "hello " + user.getName();
	}
}
