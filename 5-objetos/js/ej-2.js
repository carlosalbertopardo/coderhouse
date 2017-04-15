/*  

EJERCICIO N°2
"Dado el objeto "Paises", 
mostrar en una lista ordenada todas sus provincias"

*/

var paises = {
	argentina: ["Buenos Aires", "Tucumán", "Salta", "Chubut"],
	brasil: ["Río de Janeiro", "Brasilia", 'San Pablo', 'Buzios'],
	uruguay: ["Montevideo",'Canelones','Colonia','Rocha'],
}


for (key in paises) {

	console.log(key + ' tiene las siguientes localidades:');

	var provincias = paises[key];
	provincias.sort();

	for (var i = 0; i < provincias.length; i++) {
		console.log('- ' + provincias[i]);
	}

}
