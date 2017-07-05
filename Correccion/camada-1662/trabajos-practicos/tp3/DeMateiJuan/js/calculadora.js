'use strict';

var valor1 = parseInt(prompt('Ingrese el primer valor.'));
var valor2 = parseInt(prompt('Ingrese el segundo valor.'));
var operacion = prompt('Ingrese "+" para sumar, "-" para restar, "*" para multiplicar, o "/" para dividir.');

function calculadora() {
  if (operacion == '+') {
    console.log('El resultado de la suma es ' + (valor1+valor2));
  } else if (operacion == '-') {
    console.log('El resultado de la resta es ' + (valor1-valor2));
  } else if (operacion == '*') {
    console.log('El resultado de la multiplicación es ' + (valor1*valor2));
  } else if (operacion == '/') {
    console.log('El resultado de la división es ' + (valor1/valor2));
  }
}

calculadora();
