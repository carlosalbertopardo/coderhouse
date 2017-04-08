//
// se ingresan dos numero luego pregunta que cuenta queres hacer y devuelve el resultado en consola
// dependiendo el calculo


var num1 = Number(prompt("Ingrese un numero"));
var num2 = Number(prompt("Ingrese otro numero"));
var calcular = prompt("Ingrese el calculo (sumar, restar, multiplicar, dividir)");

function calculadora(number1, number2, calculo){
  switch(calculo){
    case 'sumar':
    console.log('La suma da: ' + (number1 + number2));
    break;
    case 'restar':
    console.log('La resta da: ' + (number1 - number2));
    break;
    case 'multiplicar':
    console.log('La multiplicacion da: ' + (number1 * number2));
    break;
    case 'dividir':
    console.log('La division da: ' + (number1 / number2));
    break;
    default:
    alert('Ingrese un calculo plzzz');
  }
}


calculadora(num1, num2, calcular);
