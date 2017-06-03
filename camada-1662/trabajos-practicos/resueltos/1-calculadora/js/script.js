/*
TP1: Realizar una calculadora que realice las siguientes operaciones sumar, restar, multiplicar y dividir:
•	Deberá ingresar un valor mediante un prompt
•	Deberá ingresar otro valor mediante otro prompt
•	Mostrar el resultado de cada operación mediante distintos alert
*/

//RESOLUCION

// Ingresamos 2 numeros y los ponemos dentro de variables
var numero = parseInt(prompt("Ingrese el primer numero")); //Usamos parseInt para pasar a formato numerico el texto ingresado.
var numero2 = parseInt(prompt("Ingrese el numero que quiere restar"));

//Mostramos los resultados con alert
alert("La suma de ambos numeros es: " + (numero - numero2));
alert("La resta de ambos numeros es: " + (numero - numero2));
alert("La división de ambos numeros es: " + (numero / numero2));
alert("La multiplicación de ambos numeros es: " + (numero * numero2));