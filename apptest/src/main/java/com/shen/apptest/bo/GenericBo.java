package com.shen.apptest.bo;

import java.util.List;
import java.util.Map;

public interface GenericBo {

	public <T> T create(T modelObject);

	public <T> T read(Long id, Class<T> entityClass);

	public <T> void update(T modelObject);

	public <T> void delete(Long id, Class<T> cls);

	public <T> List<T> list(Class<T> entityClass);

	public <T> List<T> search(String jpaQuery);

	public <T> List<T> search(String jpaQuery, Map<String, Object> params);

	public int execute(String queryString, Map<String, Object> params);

}
