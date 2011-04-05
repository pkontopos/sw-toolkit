package com.shen.webglue.test;

import com.shen.webglue.core.Glue;
import com.shen.webglue.plugin.HibernatePlugin;
import com.shen.webglue.test.helper.User;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

/**
 * Unit test for simple App.
 */
public class CoreTest extends TestCase {
	Glue glue = null;

	public CoreTest(String testName) {
		super(testName);
		glue = Glue.get();
	}

	public static Test suite() {
		return new TestSuite(CoreTest.class);
	}

	public void testHandler() {
		assertTrue("hello handler".equals(glue.run("testHandler")));
	}

	public void testService() {
		assertTrue("hello service".equals(glue.run("testService")));
	}

	public void testServiceWithCtx() {
		Glue.put("user", new User("shen", 18));
		Object ret = glue.run("testServiceWithCtx");
		assertTrue("hello shen".equals(ret));
	}
	
	

}
