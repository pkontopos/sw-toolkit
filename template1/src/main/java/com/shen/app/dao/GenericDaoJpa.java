package com.shen.app.dao;

import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

@Repository("genericDao")
public class GenericDaoJpa implements GenericDao {

	protected EntityManager entityManager; 
	@PersistenceContext
	public void setEntityManager(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	public <T> void create(T modelObject) {
		entityManager.persist(modelObject);
	}
	public <T> T read(Long id, Class<T> entityClass) {
		T obj = null;
		try {
			obj = entityManager.find(entityClass, id);
		} catch (Exception e) {

		}
		return obj;
	}
	

	public <T> void update(T modelObject) {
		entityManager.merge(modelObject);
	}
	public <T> void delete(T modelObject) {
		entityManager.remove(modelObject); 
	}

	

	@SuppressWarnings("unchecked")
	public <T> List<T> list(Class<T> entityClass) {
		String queryStr = " from " + entityClass.getSimpleName();
		return (List<T>) entityManager.createQuery(queryStr).getResultList();
	}

	@SuppressWarnings("unchecked")
	public <T> List<T> search(String jpaQuery) {
		return (List<T>) entityManager.createQuery(jpaQuery).getResultList();
	} 

	public List search(String jpaQuery, Map params) {
		Query query = entityManager.createQuery(jpaQuery);
		Set<String> keySet = params.keySet();
		for (String key : keySet) {
			query.setParameter(key, params.get(key));
		}
		return query.getResultList();
	}

	 

	 

}
