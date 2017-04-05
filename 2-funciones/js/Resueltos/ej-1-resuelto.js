/*  

EJERCICIO N°1
"Crear una función a la cual le ingrese 
un string como parámetro y me retorne por pantalla 
cuantos caracteres tiene."

*/

//Primero creamos la función que reciba una cadena de texto como parámetro.
function mostrarCant( cadenaDeTexto ) {
	console.log(cadenaDeTexto.length);
}

//Despues podemos invocarla tantas veces como queramos.
mostrarCant('Carlos');
mostrarCant('Santiago');
mostrarCant('Roberto');
mostrarCant('Zoe');
