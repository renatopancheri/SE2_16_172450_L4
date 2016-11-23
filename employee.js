var employee=[];
var max=0;
function main(request){
	var id=parseInt(request.id);
	request.salary=parseInt(request.salary);
	request.level=parseInt(request.level);
	var ret=emptyobject();
	if(request.hadd=="true"){
		delete request.hadd;
		delete request.hdelete;
		if(isNaN(id)){
			max++;
			employee[max]=request;
		}
		else{
			if(id>max){
				max=id;
			}
			employee[id]=request;
		}
		ret.classform='hidden';
	}
	else{
		if(isNaN(id)){
			ret.classform='hidden';
		}
		else{
			if(request.hdelete=="true"){
				delete employee[id];
				ret.classform='hidden';
			}
			else{
				ret=employee[id];
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
