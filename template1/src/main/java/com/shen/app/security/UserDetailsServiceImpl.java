package com.shen.app.security;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.security.GrantedAuthority;
import org.springframework.security.GrantedAuthorityImpl;
import org.springframework.security.userdetails.User;
import org.springframework.security.userdetails.UserDetails;
import org.springframework.security.userdetails.UserDetailsService;
import org.springframework.security.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.shen.app.bo.GenericBo;
import com.shen.app.model.SysUser;
/**
 * 
 * @author shenzj
 *
 */
@Service("userDetailsService")
public class UserDetailsServiceImpl implements UserDetailsService {
	@Autowired
	GenericBo genericBo;
	public void setGenericBo(GenericBo genericBo) {
		this.genericBo = genericBo;
	}

	public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException, DataAccessException {
		User user = null; 
		if ("admin".equals(name)) {
			String username = name;
			String password = "admin";
			boolean enabled = true;
			boolean accountNonExpired = true;
			boolean credentialsNonExpired = true;
			boolean accountNonLocked = true;
			GrantedAuthority[] authorities = new GrantedAuthority[1];
			authorities[0] = new GrantedAuthorityImpl("ROLE_USER");
			user = new User(username, password, enabled, accountNonExpired, credentialsNonExpired, accountNonLocked, authorities);
		} else {
			Map params = new HashMap();
			params.put("name", name);
			List<SysUser> uList = genericBo.search("from SysUser user where user.name=:name", params);
			if (uList.size() > 0) {
				SysUser sUser = uList.get(0);
				String username = sUser.getName();
				String password = sUser.getPass();
				boolean enabled = true;
				boolean accountNonExpired = true;
				boolean credentialsNonExpired = true;
				boolean accountNonLocked = true;
				GrantedAuthority[] authorities = new GrantedAuthority[1];
				authorities[0] = new GrantedAuthorityImpl("ROLE_USER");
				user = new User(username, password, enabled, accountNonExpired, credentialsNonExpired, accountNonLocked, authorities);
			}
		}
		return user;
	}
}
