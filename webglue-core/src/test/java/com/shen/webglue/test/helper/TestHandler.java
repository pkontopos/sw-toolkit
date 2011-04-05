package com.shen.webglue.test.helper;

import java.util.List;

import com.shen.webglue.annotation.Uri;
import com.shen.webglue.core.Glue;

public class TestHandler {
	TestService service;
	HibernateService db;

	@Uri("testHandler")
	public String testHandler() {
		return "hello handler";
	}

	@Uri("testService")
	public String testService() {
		return service.sayHello();
	}

	@Uri("testServiceWithCtx")
	public String testServiceWithCtx() {
		User user = (User) Glue.get("user");
		return service.sayHello(user);
	}

	@Uri("saveUser")
	public void saveUser() {
		User user = (User) Glue.get("user");
		db.saveUser(user);
	}

	@Uri("loadUser")
	public User loadUser() {
		Long id = (Long) Glue.get("id");
		return db.loadUser(id);
	}

	@Uri("listUser")
	public List<User> listUser() {
		return db.listUser();
	}

}
