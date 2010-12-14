package com.shen.glue.common;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.URL;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;
import java.util.jar.JarEntry;
import java.util.jar.JarInputStream;

public class ClassFinder {

	/**
	 * Scans all classes accessible from the context class loader which belong
	 * to the given package and subpackages.
	 * 
	 * @param packageName
	 *            The base package
	 * @return The classes
	 * @throws ClassNotFoundException
	 * @throws IOException
	 */
	@SuppressWarnings({ "rawtypes" })
	public static List<Class> getClasses(String packageName) {
		ArrayList<Class> classes = new ArrayList<Class>();

		try {
			ClassLoader classLoader = Thread.currentThread()
					.getContextClassLoader();
			assert classLoader != null;
			String path = packageName.replace('.', '/');
			Enumeration<URL> resources = classLoader.getResources(path);
			List<File> dirs = new ArrayList<File>();
			while (resources.hasMoreElements()) {
				URL resource = resources.nextElement();
				String fileName = resource.getFile();
				String fileNameDecoded = URLDecoder.decode(fileName, "UTF-8"); 
				dirs.add(new File(fileNameDecoded));
			}

			for (File directory : dirs) {
				classes.addAll(findClasses(directory, packageName));
			}
		} catch (Exception e) {

		}
		return classes;
	}

	/**
	 * Recursive method used to find all classes in a given directory and
	 * subdirs.
	 * 
	 * @param directory
	 *            The base directory
	 * @param packageName
	 *            The package name for classes found inside the base directory
	 * @return The classes
	 * @throws ClassNotFoundException
	 */
	@SuppressWarnings("rawtypes")
	private static List<Class> findClasses(File directory, String packageName)
			throws ClassNotFoundException {
		List<Class> classes = new ArrayList<Class>();
		if (!directory.exists()) {
			return classes;
		}
		File[] files = directory.listFiles();
		for (File file : files) {
			String fileName = file.getName();
			if (file.isDirectory()) {
				assert !fileName.contains(".");
				classes.addAll(findClasses(file, packageName + "." + fileName));
			} else if (fileName.endsWith(".class") && !fileName.contains("$")) {
				Class _class;
				try {
					_class = Class.forName(packageName + '.'
							+ fileName.substring(0, fileName.length() - 6));
				} catch (ExceptionInInitializerError e) {
					_class = Class.forName(
							packageName
									+ '.'
									+ fileName.substring(0,
											fileName.length() - 6), false,
							Thread.currentThread().getContextClassLoader());
				}
				classes.add(_class);
			}
		}
		return classes;
	}

	public static List<Class> getClasseNamesInPackage(String jarName,
			String packageName) {
		ArrayList<Class> classes = new ArrayList<Class>();
		packageName = packageName.replaceAll("\\.", "/");
		try {
			JarInputStream jarFile = new JarInputStream(new FileInputStream(
					jarName));
			JarEntry jarEntry; 
			while (true) {
				jarEntry = jarFile.getNextJarEntry();
				if (jarEntry == null) {
					break;
				}
				if ((jarEntry.getName().startsWith(packageName))
						&& (jarEntry.getName().endsWith(".class"))) {
					classes.add(Class.forName(jarEntry.getName().replaceAll(
							"/", "\\.")));
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return classes;
	}

	public static void main(String[] args) {
		List<Class> clses = ClassFinder.getClasses("com.shen.glue");
		for (Class cls : clses) {
			System.out.println(cls.getSimpleName());
		}
	}
}
