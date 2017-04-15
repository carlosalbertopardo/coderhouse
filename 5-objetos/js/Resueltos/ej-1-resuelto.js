/*  

EJERCICIO N°1
"Crear un objeto llamado canción,
el cual tenga las propiedades id, letra, autor y duración
Luego mostrar los datos por la consola un dato por linea."

*/


/* 
SOLUCIÓN -> A crear objetos!!

En primer lugar creamos el objeto. Hay diversas formas de crear un objeto:
En este caso usaremos la forma literal, la cual es usando los { }
Creamos los objetos y asignamos nuevas propiedades, las cuales pueden ser atributos ( Valores) o metodos (functiones)*/

var cancion = {
	id: 123,
	letra: 'chuchuhua chuchuhua',
	autor: 'pinon fijo',
	duración: 22,
	setLetra: function (nuevaLetra) { //Esto es un metodo del objeto.
		this.letra = nuevaLetra;
	}
}

//Podemos invocar al metodo 
cancion.setLetra('choique el nandu');


/*Para recorrer los valores de un objeto no podemos usar el coclo "for" que usamos para los arrays, ya que los objetos no tienen
una propiedad ".length". Para recorrerlos usamos el ciclo llamado "for in" donde la "key" es el nombre de la propiedad y la segunda variable es su valor.*/

for (key in cancion) {
	console.log('el metodo ' + key + ' tiene el valor ' + cancion[key])
}

