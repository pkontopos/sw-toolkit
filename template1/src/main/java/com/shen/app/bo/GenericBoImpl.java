package com.shen.app.bo;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shen.app.dao.GenericDao;
/**
 * 
 * @author shenzj
 *
 */
@Service("testBo")
public class GenericBoImpl implements GenericBo {
	@Autowired
	GenericDao dao;

	public void setDao(GenericDao dao) {
		this.dao = dao;
	}

	public <T> void create(T modelObject) {
		dao.create(modelObject);
	}

	public <T> void delete(T modelObject) {
		dao.delete(modelObject);
	}
	public <T> List<T> list(Class<T> entityClass) {
		return dao.list(entityClass);
	}

	public <T> T read(Long id, Class<T> entityClass) {
		return dao.read(id, entityClass);
	}

	public <T> List<T> search(String jpaQuery) {
		return dao.search(jpaQuery);
	}

	public <T> List<T> search(String jpaQuery, Map params) {
		return dao.search(jpaQuery, params);
	}

	public <T> void update(T modelObject) {
		dao.update(modelObject);
	}

}
