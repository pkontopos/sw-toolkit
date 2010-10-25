<html>
<body>
<h2>Hello ${user}! today is: ${today}</h2>

<form id="generic_login_form" method="post"
	action="./j_spring_security_check"><label for="j_username">Username:</label>
<input type="text" value="" class="text_field" id="j_username"
	name="j_username"> <br />
<label for="j_password">Password:</label> <input type="password"
	class="text_field" name="j_password" id="j_password" />
<div style='clear: both'><input type="submit" class="big_button"
	value="Log in" /></div>
</form>

</body>
</html>
