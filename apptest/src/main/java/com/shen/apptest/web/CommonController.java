package com.shen.apptest.web;

import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.shen.apptest.bo.GenericBo;
import com.shen.apptest.util.Utils;
import com.shen.apptest.model.*;

@Controller
@SuppressWarnings({ "rawtypes", "unchecked" })
public class CommonController {
	@Autowired
	GenericBo genericBo;

	@RequestMapping("/login.html")
	public String execute(HttpServletRequest req, Map ret) {
		ret.put("today", new Date());
		ret.put("user", Utils.getUserDetails());
		return "login";
	}

	@RequestMapping("/teamList.html")
	public String teamListHtml(HttpServletRequest req, Map ret) {
		List<Team> teamList = genericBo.list(Team.class);
		ret.put("teamList", teamList);
		return "teamList";
	}

	@RequestMapping("/teamList.json")
	public List<Team> teamList(HttpServletRequest req, Map ret) {
		List<Team> teamList = genericBo.list(Team.class);
		return teamList;
	}

}
