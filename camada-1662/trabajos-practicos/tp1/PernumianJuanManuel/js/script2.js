var num1 = prompt('Ingrese un valor');
var num2 = prompt('Ingrese otro valor');

var parsedNum1 = Number(num1);
var parsedNum2 = Number(num2);

var suma = parsedNum1 + parsedNum2;
var res = parsedNum1 - parsedNum2;
var div = parsedNum1 / parsedNum2;
var mul = parsedNum1 * parsedNum2;

alert('Suma: ' + suma);
alert('Resta: ' + res);
alert('Divide: ' + div);
alert('Multiplica: ' + mul);