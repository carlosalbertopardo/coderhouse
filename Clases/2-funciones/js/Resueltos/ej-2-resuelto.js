/*  

EJERCICIO N°2
"Crear una función a la cual le ingrese 2 numeros como parámetros y me retorne por pantalla la suma de ambos."

*/

function suma(num1 , num2) { // Creamos una funcion que reciba dos parametros de tipo numero
	var suma = num1 + num2;
	return suma
}

//Hay diferentes maneras de resolver el ejercicio.

//Podemos asignar el valor de retorno a una variable y luego mostrar la variable con console.log
var resultado = suma(10,5);  
console.log(resultado);

//Podemos directamente mostrar el resultado con el console.log
console.log(suma(10,5));

//Podemos crear variables y luego pasarlas como parámetros a la función
var numero1 = 20;
var numero2 = 40;
var resultado2 = suma(numero1,numero2);
console.log(resultado2);
