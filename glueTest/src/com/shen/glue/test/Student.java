package com.shen.glue.test;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Student")
public class Student {
	@Id
	@GeneratedValue
	Long id;
	String name;
	Integer score;
	Boolean isSmart;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getScore() {
		return score;
	}

	public void setScore(Integer score) {
		this.score = score;
	}

	public Boolean getIsSmart() {
		return isSmart;
	}

	public void setIsSmart(Boolean isSmart) {
		this.isSmart = isSmart;
	}

	public Student() {
	}

	public Student(String name) {
		super();
		this.name = name;
	}

}
