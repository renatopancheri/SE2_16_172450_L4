<!DOCTYPE html>
<html>
	<head>
		<!-- Here goes the metadata -->  
		<meta charset="utf-8">
		<title> Progetto 2 </title>
		<link href="index.css" rel="stylesheet" type="text/css">
		<script src="script.js" type="text/javascript"></script>
	</head>
	<body>
		
		<form action="/" method="GET" name="myForm" id="myForm" class="(:classform:)">
			<input type="submit" onclick="send()" value="aggiungi/modifica"/>
			<input type="submit" onclick="del()" value="elimina"/>
			<input type="submit" onclick="search()" value="cerca" /><BR>
			ID: <input type="text"  name="id" id="id" value="(:id:)" /><BR>
			Name: <input type="text" name="name" id="name" value="(:name:)" /><BR>
			Surname: <input type="text" name="surname" id="surname" value="(:surname:)" /><BR>
			Level: <input type="text" name="level" id="level" value="(:level:)" /><BR>
			Salary: <input type="text" name="salary" id="salary" value="(:salary:)" /><BR>
			<input type="hidden" id="hadd" name="hadd" value="false">
			<input type="hidden" id="hdelete" name="hdelete" value="false">
			
		</form>
		<input type="button" onclick="showhide()" value="mostra/nascondi"/>
	</body>
</html>
