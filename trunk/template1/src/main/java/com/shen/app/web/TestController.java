package com.shen.app.web;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.shen.app.bo.GenericBo;
import com.shen.app.common.Utils;
import com.shen.app.model.SysUser;

@Controller
public class TestController {
	
	@Autowired
	GenericBo genericBo;
	public void setGenericBo(GenericBo genericBo) {
		this.genericBo = genericBo;
	}

	@RequestMapping("/userList.html")
	public String userList(HttpServletRequest request) {
		List<SysUser> uList = genericBo.list(SysUser.class);
		request.setAttribute("uList", uList);
		return "userList";
	}

	@RequestMapping("/userCreate.html")
	public String userCreate(HttpServletRequest request) {
		SysUser user = new SysUser();
		Utils.populate(user, request, null);
		//System.out.println(request.getParameter("name"));
		//System.out.println(user.getName());
		genericBo.create(user);
		return userList(request);
	}

}
