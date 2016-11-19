<!DOCTYPE html>
<html>
	<head>
		<!-- Here goes the metadata -->  
		<meta charset="utf-8">
		<title> Progetto 2 </title>
	</head>
	<body>
		<form action="(:serveraddress:)" method="GET" name="myForm" id="myForm">
			<input type="button" onclick="send()" value="aggiungi/modifica"/>
			<input type="button" onclick="delete()" value="elimina"/><BR>
			ID: <input type="text" class="hidden" name="id" id="id" value="(:id:)" />
			<input type="button" onclick="search()" value="cerca"/><BR>
			Name: <input type="text" class="hidden" name="name" id="name" value="(:name:)" /><BR>
			Surname: <input type="text" class="hidden" name="surname" id="surname" value="(:surname:)" /><BR>
			Level: <input type="text" class="hidden" name="level" id="level" value="(:level:)" /><BR>
			Salary: <input type="text" class="hidden" name="salary" id="salary" value="(:salary:)" /><BR>
		</form>
		<input type="button" onclick="showhide()" value="mostra/nascondi"/>
	</body>
</html>
