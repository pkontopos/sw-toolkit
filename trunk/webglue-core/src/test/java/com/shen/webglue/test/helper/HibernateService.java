package com.shen.webglue.test.helper;

import java.util.List;

import org.hibernate.Session;

@SuppressWarnings("unchecked")
public class HibernateService {
	Session dao;

	public void saveUser(User user) {
		dao.save(user);
		if ("rollback".equals(user.getName())) {
			throw new RuntimeException("rollback");
		}
	}

	public User loadUser(Long id) {
		return (User) dao.load(User.class, id);
	}

	public List<User> listUser() {
		return dao.createQuery("from User").list();
	}

}
