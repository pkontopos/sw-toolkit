package com.shen.apptest.dao;

import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;
import org.springframework.util.Assert;

@Repository("genericDao")
@SuppressWarnings("unchecked")
public class GenericDaoJpa implements GenericDao {

	protected EntityManager entityManager;

	@PersistenceContext
	public void setEntityManager(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	@Override
	public <T> T create(T modelObject) {
		entityManager.persist(modelObject);
		return modelObject;
	}

	@Override
	public <T> T read(Long id, Class<T> entityClass) {
		T obj = null;
		try {
			obj = entityManager.find(entityClass, id);
		} catch (Exception e) {

		}
		return obj;
	}

	@Override
	public <T> void update(T modelObject) {
		entityManager.merge(modelObject);
	}

	@Override
	public <T> void delete(T modelObject) {
		Object obj = entityManager.merge(modelObject);
		entityManager.remove(obj);
	}

	@Override
	public <T> List<T> list(Class<T> entityClass) {
		String queryStr = " from " + entityClass.getSimpleName();
		return (List<T>) entityManager.createQuery(queryStr).getResultList();
	}

	@Override
	public <T> List<T> search(String jpaQuery) {
		return (List<T>) entityManager.createQuery(jpaQuery).getResultList();
	}

	@Override
	public <T> List<T> search(String jpaQuery, Map<String, Object> params) {
		return search(jpaQuery, params, null);
	}

	@Override
	public <T> List<T> search(String jpaQuery, Map<String, Object> params,
			Integer maxResults) {
		Query query = entityManager.createQuery(jpaQuery);
		fillParameters(query, params);
		if (maxResults != null && maxResults > 0) {
			query.setMaxResults(maxResults);
		}
		return query.getResultList();
	}

	@Override
	public int executeUpdate(String queryString, Map<String, Object> params) {
		Assert.notNull(queryString, "queryString is required");

		Query updater = entityManager.createQuery(queryString);
		fillParameters(updater, params);

		return updater.executeUpdate();
	}

	private void fillParameters(Query query, Map<String, Object> params) {
		if (params != null && params.size() > 0) {
			for (Entry<String, Object> param : params.entrySet()) {
				query.setParameter(param.getKey(), param.getValue());
			}
		}
	}
}
