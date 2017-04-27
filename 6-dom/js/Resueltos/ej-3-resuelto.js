/*  

EJERCICIO N°3
"Crear un objeto llamado gato, el cual tenga las propiedades id, color, raza y edad.
Tambien deberá tener 1 metodo "Maullar" que mostrará un mensaje por consola que diga "Miauu!"
Luego mostrar los datos por la consola un dato por linea, pero no los metodos del objeto"

*/


/* 
SOLUCIÓN -> Typeof again!

Creamos el objeto con sus attributos y un metodo "maullar" que mostrará un mensaje por la consola al invocarlo.

*/

var gato = {
	id: 1234,
	color: '#fff',
	raza: 'siames',
	edad: 2,
	maullar: function () {
		console.log('MIAUUUUUU!!!!');		
	}
}


//Recorremos el objeto con un for in.
for (key in gato) {

	//Tener en cuenta que al hacer un typeof de una variable que apunta a una funcion, retorna un string con la palabra "function"
	
	if (typeof(gato[key]) !== 'function') { //Por cada vuelta, hacemos una validación para NO mostrar la información si es una funcion.
		console.log('El atributo ' + key + ' tiene el valor ' + gato[key])
	}

}

// Miau :D
