/*  

EJERCICIO N°5
"Dados los siguientes arrays, indicar por pantalla si tienen algún elemento en común "

*/

var apellidos = ["Gonzalez","Pérez","Blanco","Espósito","Martínez"];
var colores = ["Azul","Verde","Amarillo","Blanco","Naranja"];

/* 

SOLUCIÓN -> Ciclos dentro de ciclos? matrices?? WHAT???
Exacto :). En este caso para comparar 2 arrays debemos recurrir a una técnica muy común en la programación
la cual consiste en utilizar un ciclo dentro de otro:
El primer lugar debemos recorrer el primer array. En cada posición a su vez, deberemos comparar
ese valor con cada elemento del segundo array, para lo cual necesitamos un segundo ciclo.

*/


//Comenzamos el primer ciclo
for (var i = 0; i < apellidos.length; i++) {
	
	/*En cada posición del primer array vamos a comparar con cada elemento del segundo array, 
	  para lo cual armamos un segundo ciclo.
	  CUIDADO! LA VARIABLE UTILIZADA COMO INDICE DEBE SER OTRA! Generalmente se usa la letra "i" para el primer ciclo y la "j" para el segundo
	*/  
	for (var j = 0; j < colores.length; j++) {
			
		//Ahora sí. Comparamos.
		if(apellidos[i] == colores[j]  ) {

			//Si se cumple la condición, mostromos por pantalla :D!
			alert("El valor " + apellidos[i] + " y el valor " + colores[j] + " son iguales" );

		}

	}

}
