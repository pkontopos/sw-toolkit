package com.shen.app.bo;

import java.util.Date;

import org.springframework.stereotype.Service;
/**
 * 
 * @author shenzj
 *
 */
@Service("taskBo")
public class TaskBoImpl implements TaskBo { 
	
	public void check() {
		System.out.println("scheduled task, "+new Date());
	} 
	
}