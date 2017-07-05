/*  

EJERCICIO N°2
"Dado el siguiente Array, informar por pantalla todos los valores en posiciones impares."

*/

var animales = ['Perro','Gato','Ratón','Loro','Aguila','Ballena','Tiburón','Oso'];

/* 

SOLUCIÓN

Para averiguar si un número es impar, tenemos que analizar si el "resto"
de la division por 2 de ese número, no es 0. Para obtener esto, se utiliza el
Operador %, el cual retorna 1 si es un número impar, o 0 si es un número par.

*/

// Declaramos una variable donde guardar el resto, de tipo numerica.
var resto = 0;


//Recorremos todos los elementos del array con un ciclo.
for (var i = 0; i < animales.length; i++) {

	// Obtenemos el resto de la division de la posicion por 2.
	resto = i % 2;
	console.log("La variable resto es " + resto);

	/* tener en cuenta que en javascript verdadero y falso pueden ser basicamente 2 valores:
	 - "1" es igual true
	 - "0" es igual a false
	*/

	//En este caso, resto es o 1 o 0, si es 1, entra en la condición, que es lo mismo que que sea impar;
	if(resto) {
		console.log(animales[i]);
	}

}