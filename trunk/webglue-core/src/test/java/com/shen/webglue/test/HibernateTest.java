package com.shen.webglue.test;

import java.util.List;

import junit.framework.TestCase;

import com.shen.webglue.core.Glue;
import com.shen.webglue.plugin.HibernatePlugin;
import com.shen.webglue.test.helper.User;

public class HibernateTest extends TestCase {
	Glue glue = null;

	public HibernateTest(String testName) {
		super(testName);
		glue = Glue.get();
		Glue.plugins.add(HibernatePlugin.class);
	}

	public void testAdd() {
		User user = new User("shen", 18);
		Glue.put("user", user);
		glue.run("saveUser");
		assertNotNull(user.getId());
	}

	public void testCRUD() {
		User user = new User("shen", 18);
		Glue.put("user", user);
		glue.run("saveUser");
		assertNotNull(user.getId());
		Long id = user.getId();
		Glue.put("id", id);
		User user2 = (User) glue.run("loadUser");
		assertNotNull(user2);
		List<User> users = (List<User>) glue.run("listUser");
		assertTrue(users != null && users.size() > 0);
	}

	public void testRollback() {
		int count = ((List<User>) glue.run("listUser")).size();

		User user = new User("shen", 18);
		Glue.put("user", user);
		glue.run("saveUser");

		User user1 = new User("shen1", 18);
		Glue.put("user", user1);
		glue.run("saveUser");
		//this one will roll back
		User user3 = new User("rollback", 18);
		Glue.put("user", user3);
		glue.run("saveUser");
		
		User user4 = new User("shen2", 18);
		Glue.put("user", user4);
		glue.run("saveUser");
		
		int count2 = ((List<User>) glue.run("listUser")).size();
		assertTrue(count2 - count == 3);
	}
}
