var diasDeLaSemana = ['domingo', 'lunes', 'martes','miercoles','jueves','viernes','sabado'];

var ingresarDia = prompt("Por favor ingrese un día");

for (var i = 0; i < diasDeLaSemana.length; i++) {

	if (ingresarDia === 'domingo' || ingresarDia === 'sabado') {

		console.log('El día es fin de semana.');

	}

	if (ingresarDia === 'lunes' || ingresarDia === 'martes' || ingresarDia === 'miercoles' || ingresarDia === 'jueves' || ingresarDia === 'viernes') {

		console.log('Es día hábil.');
	}

	break;
	
}

