package com.shen.glue.test;

import java.util.List;

import com.shen.glue.annotation.Bean;
import com.shen.glue.annotation.Url;

@Bean
public class StudentController {
	private StudentService service;

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

}
