package com.shen.apptest.dao;

import java.util.List;
import java.util.Map;

public interface GenericDao {
	<T> T create(T modelObject);

	<T> T read(Long id, Class<T> entityClass);

	<T> void update(T modelObject);

	<T> void delete(T modelObject);

	<T> List<T> list(Class<T> entityClass);

	<T> List<T> search(String jpaQuery);

	<T> List<T> search(String jpaQuery, Map<String, Object> params);

	<T> List<T> search(String jpaQuery, Map<String, Object> params,
			Integer maxResults);
	int executeUpdate(String queryString, Map<String, Object> params);
}
