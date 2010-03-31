package com.shen.common.model;

import java.util.List;
import java.util.Map;

public interface CrudTemplate<T> {
	public void create(T obj);

	public T read(String id);

	public void update(String id, T obj);

	public void delete(String id);

	public List<T> list(Map<String, String> cretria);

	public Map<String, String> validate(T obj);
}
