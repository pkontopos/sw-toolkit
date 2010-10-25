<?xml version="1.0" encoding="UTF-8" ?>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html>
<body>

<c:forEach var="team" items="${teamList}">
	${team}
</c:forEach>


</body>
</html>