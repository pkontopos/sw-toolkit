package com.shen.app.webservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shen.app.bo.GenericBo;
import com.shen.app.model.SysUser;

@Service("webService")
public class WebService {
	@Autowired
	GenericBo genericBo;
	public void setGenericBo(GenericBo genericBo) {
		this.genericBo = genericBo;
	} 
	public List<SysUser> userList() { 
		List<SysUser> uList = genericBo.list(SysUser.class);
		return uList;
	}
}