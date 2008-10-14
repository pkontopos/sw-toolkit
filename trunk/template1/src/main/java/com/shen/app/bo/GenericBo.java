package com.shen.app.bo;

import java.util.List;
import java.util.Map;

public interface GenericBo {
	
	public <T> void create(T modelObject);
	public <T> T read(Long id, Class<T> entityClass);
	public <T> void update(T modelObject);
	public <T> void delete(T modelObject);

	public <T> List<T> list(Class<T> entityClass);
	public <T> List<T> search(String jpaQuery);
	public <T> List<T> search(String jpaQuery, Map params);

}
