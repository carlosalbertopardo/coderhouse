
var array1 = [123,'azul',true,false,'verde','gris'];
var array2 = ['azul','gris'];


function checkArray(arrayToCheck) {
	var cantidadStrings = 0;
	var cantidadNumbers = 0;
	var cantidadBooleans = 0;

	for (var i = 0; i < arrayToCheck.length; i++) {

		if (typeof(arrayToCheck[i]) === 'string') {
			cantidadStrings++;
		} else if (typeof(arrayToCheck[i]) === 'number') {
			cantidadNumbers++
		} else if (typeof(arrayToCheck[i]) === 'boolean') {
			cantidadBooleans++
		}

	}

	console.log(cantidadStrings);
	console.log(cantidadNumbers);
	console.log(cantidadBooleans);
	console.log('///////////////');

}

checkArray(array1);
checkArray(array2);