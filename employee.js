var employee=[];
var max=0;
function main(request){
	var id=parseInt(request.id);//controllo che id, salary e level siano numeri
	request.salary=parseInt(request.salary);
	request.level=parseInt(request.level);
	if(isNaN(request.salary)){
		request.salary='';//se non sono numeri questi 2 diventano stringa vuota
	}
	if(isNaN(request.level)){
		request.level='';
	}
	var ret=emptyobject();
	if(request.hadd=="true"){//l'utente ha premuto aggiungi/modifiva
		delete request.hadd;//elimino i due campi hidden del form dell'utente così posso riusare l'oggetto request successivamente
		delete request.hdelete;
		if(isNaN(id)){//se non è stato inserito l'id lo genero usando il massimo valore precedente
			max++;
			request.id=max;
			employee[max]=request;
		}
		else{
			request.id=id;//se il parseInt ha tirato fuori un numero da una stringa che non è proprio un numero (es. "3u" diventa "3" , io voglio che nel vettore vada "3" e non "3u")
			if(id>max){
				max=id;
			}
			employee[id]=request;
		}
		ret.classform='hidden';//classform ='hidden' farà nascondere il form all'utente
	}
	else{
		if(isNaN(id)){//non è stato inserito l'id quando era necessario(delete o cerca)
			ret.classform='hidden';
		}
		else{
			if(request.hdelete=="true"){//l'utente ha premuto cancella
				delete employee[id];
				if(id==max){
					while(employee[max]==undefined && max>0){//se ho eliminato l'ultimo elemento resetto il max
						max--;
					}
				}
				ret.classform='hidden';
			}
			else{
				ret=employee[id];//l'utente ha premuo cerca
			}
		}
	}
	return ret;
}

function emptyobject(){
	return {id:'',name:'',surname:'',level:'',salary:'',classform:''};
}

module.exports = {
  main
};
