package com.shen.glue.test;

import java.util.List;
import java.util.Map;

import org.hibernate.Query;
import org.hibernate.Session;

import com.shen.glue.annotation.Bean;
import com.shen.glue.annotation.Url;

@Bean
public class StudentController {
	private StudentService service;
	Session dao;

	@Url("listStudent.json")
	public List<Student> listStudent() {
		return service.listStudent();
	}

	@Url("addStudent.json")
	public void addStudent(Student st) {
		service.addStudent(st);
	}

	@Url("deleteStudent.json")
	public void deleteStudent(Student st) {
		service.deleteStudent(st);
	}
	
	@SuppressWarnings("unchecked")
	@Url("searchStudent.json")
	public List<Student>  searchStudent(Map<String,String> params) {
		String sName = params.get("sName"); 
		Query query = dao.createQuery("from Student where name like ?");
		query.setParameter(0, "%"+sName+"%");
		return query.list();
	}

	@Url("index.html")
	public String login() {
		return "index";
	}

}
