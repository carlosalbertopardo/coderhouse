var dias=["lunes","martes","miercoles","jueves","viernes","sabado","domingo"]
var dia = prompt("Ingrese un dia").toLowerCase();
for (var i = 0; i < dias.length; i++) {
	if(dias[i]===dia){
		if(dias[i]==="sabado" || dias[i]==="domingo"){
			console.log("El dia es fin de semana");
		}
		else{
			console.log("El dia es habil");	
		}
		break;
	}
};