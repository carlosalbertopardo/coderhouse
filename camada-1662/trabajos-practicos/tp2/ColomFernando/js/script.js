var user_day = prompt("Ingrese un dia de la semana");
var user_day_up = user_day.toUpperCase();
var day = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

for (var i=0; i<8; i++) {
	if (user_day_up ==="SABADO") {
		alert("El dia es fin de semana");
		break;
	}else if (user_day_up ==="DOMINGO") {
		alert("El dia es fin de semana");
		break;
	}
	else {
		alert("El dia es habil");
		break;
	}
 }