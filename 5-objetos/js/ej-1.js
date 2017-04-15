/*  

EJERCICIO N°1
"Crear un objeto llamado canción,
el cual tenga las propiedades id, letra, autor y duración
Luego mostrar los datos por la consola un dato por linea."

*/

var cancion = {
	id: 123,
	letra: 'chuchuhua chuchuhua',
	autor: 'pinon fino',
	duración: 22,
	setLetra: function (nuevaLetra) {
		this.letra = nuevaLetra;
	}
}

cancion.setLetra('choique el nandu');

for (key in cancion) {
	console.log('el metodo ' + key + ' tiene el valor ' + cancion[key])
}