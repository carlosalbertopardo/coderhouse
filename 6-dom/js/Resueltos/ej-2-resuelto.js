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


/* 
SOLUCIÓN -> Ay dios... Arrays adentro de objetos? Como lo recorro?

Sisi, no es complicado!
Tenemos que hacer 2 ciclos:
- En primer lugar utilizamos el ciclo "for in" para recorrer cada una de las propiedades del objeto
- Luego por cada propiedad, hacemos un ciclo for para recorrer el array que contiene.

*/


for (key in paises) {

	console.log(key + ' tiene las siguientes localidades:'); // Por cada vuelta del ciclo mostramos la propiedad

	var provincias = paises[key]; //Accedemos al contenido de la propiedad, lo cual sería cada array.

	provincias.sort(); // Podemos usar el metodo de los arrays llamado "sort" para ordenarlos alfabéticamente.

	//Luego por caga vuelta de coclo recorremos el array con otro ciclo interno mostrando todos sus valores.
	for (var i = 0; i < provincias.length; i++) {
		console.log('- ' + provincias[i]);
	}

}


//Fin, ya saben recorrer un objeto con arrays :)