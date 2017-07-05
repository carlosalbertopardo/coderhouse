// Mejorar la calculadora seprando en funciones cada operacione

// Debera poder ingresar 2 valores
// Debera poder ingresar que operacion quiere realizar
// Cada operacion tendra que ser una funcion con los 2 paramentros para sumar, restar, multiplicar o dividir;
// Debera mostrar el resultado de la operacion en consola

function calculadora(value1, value2) {

  var operationToDo = prompt('¿Que operación necesita hacer?');
  operationToDo = operationToDo.toUpperCase();

  if (operationToDo == 'SUMA') {
    console.log(value1 + value2);
  } else if (operationToDo == 'RESTA'){
    console.log(value1 - value2);
  } else if (operationToDo == 'DIVISION'){
    console.log(value1 / value2);
  } else if (operationToDo == 'MULTIPLICACION'){
    console.log(value1 * value2);
  } else {
    console.log('No es una operación válida, pruebe con: SUMA, RESTA, DIVISION, MULTIPLICACION');
  }
}

var input1 = prompt('Ingrese un valor');
var input2 = prompt('Ingrese otro valor');
calculadora(input1, input2);