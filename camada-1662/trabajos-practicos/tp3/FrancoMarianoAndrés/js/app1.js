/*
Crear una funcion que pida nombre y apellido y lo muestre en la consola
Crear una funcion que en base a un paramentro muestre los dias habiles o de fines de semana en consola
*/
/*
var nombre = prompt("Ingrese su nombre");
var apellido = prompt("Ingrese su apellido");

function mostrarNombreApellido(nombre,apellido){
	console.log(nombre + apellido);
}

mostrarNombreApellido(nombre,apellido);
*/


/*
Debera poder ingresar 2 valores
Debera poder ingresar que operacion quiere realizar
Cada operacion tendra que ser una funcion con los 2 paramentros para sumar, restar, multiplicar o dividir;
Debera mostrar el resultado de la operacion en consola
*/

var valor1 = parseInt(prompt("ingrese un valor?"));
var valor2 = parseInt(prompt("ingrese un segundo valor?"));
var operacion = prompt("ingrese el tipo de operacion matematica");

function operar(valor1,valor2,operacion){

	if(operacion == '+')
	{
		resultado = valor1 + valor2;
	}	
	if(operacion == '-')
	{
		resultado = valor1 - valor2;
	}
	if(operacion == '*')
	{
		resultado = valor1 * valor2;
	}
	if(operacion == '/')
	{
		resultado = valor1 / valor2;
	}


	alert(resultado);	
}

operar(valor1,valor2,operacion);

