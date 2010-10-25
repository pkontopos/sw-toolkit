package com.shen.apptest.bo;

import java.lang.reflect.Method;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shen.apptest.dao.GenericDao;

@Service("genericBo")
public class GenericBoImpl implements GenericBo {
	@Autowired
	GenericDao dao;

	private Logger logger = Logger.getLogger(GenericBoImpl.class);

	public void setDao(GenericDao dao) {
		this.dao = dao;
	}

	public <T> T create(T modelObject) {
		return dao.create(modelObject);
	}

	public <T> void delete(Long id, Class<T> cls) {
		Object obj = dao.read(id, cls);
		dao.delete(obj);
	}

	public <T> List<T> list(Class<T> entityClass) {
		return dao.list(entityClass);
	}

	public <T> T read(Long id, Class<T> entityClass) {
		T obj = dao.read(id, entityClass);
		if (obj == null) {
			return null;
		}
		logger.debug("load:" + getDetail(obj));
		return obj;
	}

	public <T> List<T> search(String jpaQuery) {
		return dao.search(jpaQuery);
	}

	public <T> List<T> search(String jpaQuery, Map<String, Object> params) {
		return dao.search(jpaQuery, params);
	}

	public <T> void update(T modelObject) {
		dao.update(modelObject);
	}

	private String getDetail(Object obj) {
		StringBuilder sb = new StringBuilder();
		try {
			sb.append(obj.getClass().getSimpleName() + "[");
			Method[] methods = obj.getClass().getDeclaredMethods();
			for (Method method : methods) {
				if (method.getName().startsWith("get")) {
					try {
						sb.append(method.getName() + "="
								+ method.invoke(obj, new Object[0]) + ",");
					} catch (Exception e) {
					}
				}
			}
			sb.append("]");
		} catch (Exception e) {

		}
		return sb.toString();
	}

	@Override
	public int execute(String queryString, Map<String, Object> params) {
		int ret = dao.executeUpdate(queryString, params);
		return ret;
	}
}
