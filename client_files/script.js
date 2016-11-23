function showhide(){//funzione per nascondere il form
	var form=document.getElementById("myForm");
	if(form.className==""){
		form.className="hidden";
	}
	else{
		form.className="";
	}
}
function search(){
	
}
function send(){//uso 2 input type hidden per identificare quale pulsante è stato premuto : hadd==true ->è stato premuto aggiungi/modifica,
	document.getElementById("hadd").value="true";//hdelete==true ->è stato premuto elimina, altrimenti è stato premuto cerca

}

function del(){
	document.getElementById("hdelete").value="true";

}
