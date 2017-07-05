/*  

EJERCICIO N°15

Crear una funcion que ordene el un array dependiendo de sus argumentos
Debe recibir:
- Un array a ordernar
- Un string con la forma de ordenamiento
- La propiedad a utilizar para ordenarlo

*/

var peliculas = [
	{
		id:4,
		titulo: "Commando",
		descripcion: "John Matrix, (Arnold Schwarzenegger), es un ex-coronel de una unidad de Fuerzas Especiales del Ejército de los Estados Unidos, padre soltero, que se ha retirado a vivir en una cabaña en la montaña junto a su hija Jenny (Alyssa Milano). Sin saberlo él, sus ex-compañeros en el ejército están siendo asesinados uno a uno, primero Lawson, luego Forrestal y por último el capitán Bennet (Vernon Wells). Su amigo, el general Franklin Kirby (James Olson) pone a Matrix bajo el cuidado de dos guardias armados, pero los bandidos logran matarlos y secuestrar a Jenny. Matrix descubre que Bennet, que había caído en desgracia y estaba dado por muerto, no lo está en realidad sino que es el jefe de los secuestradores y que ha secuestrado a Jenny para que Matrix colabore en un asesinato a favor del señor de la guerra y ex-dictador de Val Verde, Arius (Dan Hedaya). Arius había sido depuesto en su día por Matrix y está ahora reuniendo fuerzas para dar un golpe de Estado y recuperar el poder. Matrix se ve obligado a matar nuevamente para salvar la vida de Jenny",
		imagen: "back-to-the-future.jpg"
	},
	{
		id:1, 
		titulo: "Volver al Futuro",
		descripcion: "El adolescente Marty McFly es amigo de Doc, un científico al que todos toman por loco. Cuando Doc crea una máquina para viajar en el tiempo, un error fortuito hace que Marty llegue a 1955, año en el que sus futuros padres aún no se habían conocido. Después de impedir su primer encuentro, deberá conseguir que se conozcan y se casen; de lo contrario, su existencia no sería posible. ",
		imagen: "back-to-the-future.jpg"
	},
	{
		id:3,
		titulo: "Duro de Matar",
		descripcion: "John McClane (Bruce Willis) es un policía de Nueva York que visita a su esposa en Los Ángeles. Ella se encuentra en un fiesta navideña de su empresa con numerosos invitados, y McClane va a verla allí. Mientras él se está cambiando de ropa, llega al edificio un grupo de terroristas que toman a los invitados como rehenes. McClane es la única persona cuya presencia los terroristas desconocen. Comienza una lucha a muerte entre los terroristas y el solitario policía.",
		imagen: "die-hard.jpg"
	},		
	{
		id:2,
		titulo: "El Señor de los Anillos",
		descripcion: "El Señor de los Anillos: la Comunidad del Anillo (título original en inglés: The Lord of the Rings: The Fellowship of the Ring) es la primera película de la trilogía cinematográfica de El Señor de los Anillos, basada en el primer tomo de la novela homónima del escritor británico de literatura fantástica J. R. R. Tolkien; adaptado al cine por el neozelandés Peter Jackson. Esta película está incluida en el puesto número 2 de la lista de cine fantástico del «AFI's 10 Top 10».",
		imagen: "the-lord-of-the-rings.jpg"
	},
	{
		id:5,
		titulo: "Mentiroso Mentiroso",
		descripcion: "Fletcher Reede es un abogado ambicioso y sin escrúpulos, que utiliza la mentira como un medio habitual de trabajo. Su hijo de cinco años, harto de promesas incumplidas, pide un deseo el día de su cumpleaños, que su padre no pueda mentir durante veinticuatro horas. ",
		imagen: "mentiroso-mentiroso.jpg"
	},				
	{
		id:6,
		titulo: "9 reinas",
		descripcion: "Nueve reinas es una película argentina policial de 2000 escrita y dirigida por Fabián Bielinsky y protagonizada por Ricardo Darín, Gastón Pauls y Leticia Brédice. La película cuenta la historia de dos estafadores que se conocen por casualidad y deciden unirse para trabajar juntos.",
		imagen: "9-reinas.jpg"
	}

];

/* En este caso el sort se implementa de la misma forma que un array, 
pero debemos tener en cuenta que en cada posición del array hay un objeto.*/

function ordernarArray( arrayAOrdernar , forma, prop) {

	arrayAOrdernar.sort(function (a,b) {

		if (forma === 'asc') {
			if(a[prop] > b[prop]) { // Para comparar utilizaremos la "propiedad" de cada objeto.
				return 1;  // si retorna 1, a va a ir primero que b
			} else {
				return -1; // si retorna -1, b va a ir primero que a
			}
		} else {
			if(a[prop] > b[prop]) {
				return -1;
			} else {
				return 1;
			}
		}

	})

}

//Ordernamos el array descendentemente y mostramos por consola.
ordernarArray(peliculas,'desc', 'id');
console.log(peliculas);

//Ordernamos el array ascendentemente y mostramos por consola.
ordernarArray(peliculas,'asc', 'id');
console.log(peliculas);