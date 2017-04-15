
var personas = ['juan','fernando','jose', 'maradona'];
var personas2 = ['juan','fernando','karina'];
var personas3 = ['maradona'];

function vinoElDiego(arrayARecorrer) {

	for (var i = 0; i < arrayARecorrer.length; i++) {

		if (arrayARecorrer[i] == 'maradona' ) {
			return true;
		} 

	}

	return false;

}

var vino = vinoElDiego(personas);
console.log(vino);
vino = vinoElDiego(personas2);
console.log(vino);
vino = vinoElDiego(personas3);
console.log(vino);







