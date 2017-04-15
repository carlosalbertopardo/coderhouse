/*  

EJERCICIO N°5
"Crear un objeto llamado partidoDeFutbol, 
el cual tenga las propiedades id (numero),
jugadoresEquipo1 (array), jugadoresEquipo2 (array), 
golesEquipo1 (numero), golesEquipo2 (numero).
- Deberá tener 1 metodo golEquipo1
y otro golEquipo2 que sumará 1 a los 
goles del equipo especificado.
- Crear otro metodo que muestre 
por pantalla como salió el partido.
- hacer un metodo para agregar jugadores.
*/


var partidoDeFutbol = {
	id: '1234321',
	jugadoresEquipo1: [],
	jugadoresEquipo2: [],
	golesEquipo1: 0,
	golesEquipo2: 0,
	golEquipo1: function () {
		this.golesEquipo1++;
	},
	golEquipo2: function () {
		this.golesEquipo2++;
	},
	resultado: function () {

		if (this.golesEquipo1 > this.golesEquipo2) {
			return 'gano el equipo 1!!!'
		}

		if (this.golesEquipo1 < this.golesEquipo2) {
			return 'gano el equipo 2'
		}

		return 'empate amargo'

	},
	agregarJugadores: function (nombreJugador, numeroDeEquipo) {
		this['jugadoresEquipo'+numeroDeEquipo].push(nombreJugador);
	}
}

