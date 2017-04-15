/*  

EJERCICIO N°3
"Crear un objeto llamado gato, 
el cual tenga las propiedades id, color, 
raza y edad.
Tambien deberá tener 1 metodo 
Maullar que mostrará un mensaje 
por consola que diga "Miauu!"
Luego mostrar los datos por la 
consola un dato por linea."

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

for (key in gato) {

	if (typeof(gato[key]) !== 'function') {
		console.log('El atributo ' + key + ' tiene el valor ' + gato[key])
	}

}
