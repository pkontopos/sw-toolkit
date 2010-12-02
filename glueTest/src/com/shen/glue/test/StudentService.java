package com.shen.glue.test;

import java.util.List;

import org.hibernate.Session;

import com.shen.glue.annotation.Bean;

@Bean
public class StudentService {
	Session dao;

	@SuppressWarnings("unchecked")
	public List<Student> listStudent() {
		System.out.println(dao);
		return dao.createQuery("from Student").list();
	}

	public void addStudent(Student st) {
		dao.save(st);
	}

	public void deleteStudent(Student st) {
		dao.delete(st);
	}

}
