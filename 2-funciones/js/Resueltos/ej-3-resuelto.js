/*  

EJERCICIO N°3
"Crear una función a la cual le ingrese 
1 numero y un array como parámetros 
y me retorne por pantalla el elemento 
del array que se encuantra en esa posicion."

*/

//En un principio podemos crear 2 arrays diferentes para utilizar como parámetros.
var marcas = ['addidas', 'nike', 'apple', 'assus','microsoft'];
var animales = ['perro', 'gato'];


//Creamos la función
function detectarPosicion(estructura, donde) {

	//En este caso el primer parametro "Estructura" estaria esperando que se le pase un array
	//mientras que el segundo parametro espera solo un numero
	console.log( estructura[donde] ); //Usamos la sintaxis de array para ver el contenido en una determinada posicion 

}

//Luego invocamos a la funcion 2 veces con distintos casos.
detectarPosicion(marcas, 2);
detectarPosicion(animales,0);
