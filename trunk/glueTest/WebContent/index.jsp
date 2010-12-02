<!DOCTYPE head PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<script type="text/javascript" src="js/jquery-1.4.4.min.js"></script>
<script type="text/javascript" src="js/htmTable.js"></script>
<script>
	$(function() {
		$.getJSON('listStudent.json', function(data) {
			$('#Results').append(CreateTableView(data)).fadeIn();

			//$('#Results').append(CreateDetailView(res, "CoolTableTheme", true)) .fadeIn();
		});

	})
</script>
</head>

<body>
<div id="Results"></div>
</body>
</html>