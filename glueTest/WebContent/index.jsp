<!DOCTYPE head PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<script type="text/javascript" src="js/jquery-1.4.4.min.js"></script>

<script type="text/javascript" language="javascript"
	src="datatable/js/jquery.dataTables.js"></script>

<script>
	$(function() { 
		$('#add').click(function() {
			var valueStr = $('#stForm').serialize(); 
			$.post('addStudent.json?'+valueStr,function(data) {
				list();
			});
		});
		$('#search').click(function(){
			search();
		});
		list();
	});
	function list(){
		$.getJSON('listStudent.json', function(data) {  
			var theHtml = "";
			for(index in data){
				var lineStr = "";
				var line = data[index];
				for(key in line){
					lineStr += key+'='+line[key] +',    ';
				}
				theHtml += lineStr+'<br/>';
			}  
			$('#result').html(theHtml);
		});
	}
	function search(){
		var sName = $('#sName').val(); 
		$.getJSON('searchStudent.json?sName='+sName, function(data) {  
			var theHtml = "";
			for(index in data){
				var lineStr = "";
				var line = data[index];
				for(key in line){
					lineStr += key+'='+line[key] +',    ';
				}
				theHtml += lineStr+'<br/>';
			}  
			$('#result').html(theHtml);
		});
	}
</script>
</head>

<body>
<form id='stForm'>name: <input name="name" value='tester1'/> <br />
score: <input name="score" value='100'/> <br />
isSmart: <select name="isSmart">
	<option>true</option>
	<option>false</option>
</select> <br />
<input type="button" value="add" id="add" /></form>
name:<input id='sName' /><input type="button" value="search" id="search" /><br />
<div id='result' style="border: 1px solid red;"></div>
</body>
</html>