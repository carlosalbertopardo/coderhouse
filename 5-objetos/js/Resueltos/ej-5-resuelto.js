/*  

EJERCICIO N°5
"Crear un objeto llamado partidoDeFutbol, el cual tenga las propiedades id (numero),
jugadoresEquipo1 (array), jugadoresEquipo2 (array), golesEquipo1 (numero), golesEquipo2 (numero).
- Deberá tener 1 metodo golEquipo1 y otro golEquipo2 que sumará 1 a los goles del equipo especificado.
- Crear otro metodo que muestre por pantalla como salió el partido.
- hacer un metodo para agregar jugadores.
*/

/*

SOLUCION: Juguemos un partido!

- En primer lugar creamos un objeto partidoDeFutbol
- Algo que vale la penoa aclarar: LOS ID NO PUEDEN TENER UN METODO SETTER PARA QUE SE REEMPLAZEN. ES COMO UN DNI DEL OBJETETO.
- 

*/

var partidoDeFutbol = {
	id: '1234321',
	jugadoresEquipo1: [], //Creamos 2 arrays para ir cargando jugadores de cada equipo :)
	jugadoresEquipo2: [],
	golesEquipo1: 0, //Creamos 2 metodos llamados golesEquipo1 y golesEquipo2 para ir sumando los goles
	golesEquipo2: 0,
	golEquipo1: function () { //Con estos metodos metemos goles del equipo 1!
		this.golesEquipo1++;
	},
	golEquipo2: function () { //Con estos metodos metemos goles del equipo 2!
		this.golesEquipo2++;
	},
	resultado: function () { //Metodo para ver quien gano el partido!

		if (this.golesEquipo1 > this.golesEquipo2) {
			return 'gano el equipo 1!!!'
		}

		if (this.golesEquipo1 < this.golesEquipo2) {
			return 'gano el equipo 2'
		}

		return 'empate amargo'

	},

	/* Y ahora viene un metodo interesante. 
	Creamos una función la cual reciba un numero de equipo y un jugador y me agregue el jugador al array */
	agregarJugadores: function (nombreJugador, numeroDeEquipo) { 
		
		/* Usando una combinacion de concatenacion de 'jugadoresEquipo'+numeroDeEquipo podemos acceder al array del 
		equipo 1 o del equipo 2 y agregar un jugador con el ".push" */
		this['jugadoresEquipo'+numeroDeEquipo].push(nombreJugador); 
	
	}
}

// Ahora podemos jugar en el partido por la consola!