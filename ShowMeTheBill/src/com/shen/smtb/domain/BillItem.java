package com.shen.smtb.domain;

public class BillItem {

	Site site;
	String key;
	String value;

	public BillItem(Site site, String key, String value) {
		super();
		this.site = site;
		this.key = key;
		this.value = value;
	}

	public Site getSite() {
		return site;
	}

	public void setSite(Site site) {
		this.site = site;
	}

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	@Override
	public String toString() {
		return "BillItem [site=" + site + ", key=" + key + ", value=" + value
				+ "]";
	}

}
