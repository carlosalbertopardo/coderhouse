var valor1 = parseInt(prompt('Por favor ingrese el primer valor numerico.'));
var valor2 = parseInt(prompt('Por favor ingrese el segundo valor numerico'));

var operacion = prompt('Ingrese la operacion a realizar entre ambos en minuscula.');

var calculadora = function(v1,v2){
	var resultado;
	console.log('la operacion es ' + operacion);

	if(operacion === 'suma')
	{
		resultado = suma(v1,v2);
	}
	else if (operacion === 'resta') 
	{
		resultado = resta(v1,v2);
	}
	else if (operacion === 'multiplicacion')
	{
		resultado = multiplicacion(v1,v2);
	}
	else if (operacion === 'division') {
		resultado = division(v1,v2);
	}
	else
	{
		alert('volve a ingresar los datos que no entendi lo que me pediste.')
	}
	console.log('el resultado es ' + resultado);
}

calculadora(valor1,valor2);


function suma(v1,v2){
	return v1 + v2;
}

function resta(v1,v2){
	return v1 - v2;
}

function multiplicacion(v1,v2){
	return v1 * v2;
}
function division(v1,v2){
	return v1/v2;
}