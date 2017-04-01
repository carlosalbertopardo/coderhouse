// ingresamos el valor de cada numero
var valor1 = prompt("por favor ingresa el primer valor: ");
var valor2 = prompt("por favor ingresa el segundo valor: ");

//pasamos el valor de string a int
valor1 = parseInt(valor1);
valor2 = parseInt(valor2);

//realizamos las operaciones correspondientes, declarando sus variables.
var suma = valor1 + valor2;
var multiplicacion = valor1 * valor2;
var resta = valor1 - valor2;
var division = valor1 / valor2;

//realizamos la salida de datos mediante un alert
alert("La suma de ambos es de: " + suma);
alert("La resta de ambos es de: " + resta);
alert("La multiplicacion de ambos es de: " + multiplicacion);
alert("La division de ambos es de: " + division);
