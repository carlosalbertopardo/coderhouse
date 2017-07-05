//Debera ingresar un valor mediante un prompt
var valor1 = prompt("ingrese un valor");

//Debera ingresar otro valor mediante otro prompt

var valor2 = prompt("ingrese otro valor");

//Mostrar el resultado de cada operacion mediante distintos alert
console.log(typeof(valor1));

var parsedNumber1 = parseInt(valor1);
var parsedNumber2 = parseInt(valor2);

alert(parsedNumber1 + parsedNumber2);

alert(parsedNumber1 * parsedNumber2);

alert(parsedNumber1 / parsedNumber2);

alert(parsedNumber1 - parsedNumber2);
alert("Calculadora");
