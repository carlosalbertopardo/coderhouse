
for (var i = 0; i < 4; i++) {
	
	var Consulta = prompt('Por favor, ingrese un dia de la semana');

	if(Consulta == 'Sabado' || Consulta == 'Domingo'){
		alert('El día elegido es fin de semana');
	}  else{
		alert('El día elegido es día de semana. Trabaje');
	}
};