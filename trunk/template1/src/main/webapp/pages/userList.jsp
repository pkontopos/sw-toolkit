
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>


userList
<hr>

<form action="userCreate.html">
<table border="1">
	<tr bgcolor="green">
		<th>ID</th>
		<th>NAME</th>
		<th>PASS</th>
	</tr>
	<c:forEach var="line" items="${uList}">
		<tr>
			<td>${line.id}</td>
			<td>${line.name}</td>
			<td>${line.pass}</td>
		</tr>
	</c:forEach>
	<tr>
		<td><input type='submit' /></td>
		<td><input name='name' type='text' /></td>
		<td><input name='pass' type='text' /></td>
	</tr>
</table>

<a href="j_spring_security_logout">LOGOUT</a></form>

