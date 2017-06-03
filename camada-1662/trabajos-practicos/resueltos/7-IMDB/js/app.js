/* 

# Mejorar el modulo IMDB
​
- El modulo debera, de forma privada o publica, mostrar/renderizar las peliculas en el DOM
- El objeto pelicula ahora Debera tener la propiedad descripcion e imagen
- El titulo Debera ser un H1, la descipcion un P y la imagen un img
Mejorar el modulo IMDB

*/

/* 
RESOLUCION:

Nuevamente tenemos nuestro módulo IMDB
- En este caso, nuestro modulo solo contará con un array privado llamado "peliculas".
- En cada posición de array, a su vez, habra un objeto "Pelicula".
- Lo que debemos hacer en este ejercicio es recorrer el array y por cada una de la películas,
ir appendeando en el DOM la información.

Vamos!

En primer lugar, debemos crear nuestro modulo IMDB.
En el patrón de diseño modular, se llama "Modulo" a una variable que alberga un objeto con cirta funcionalidad.
Para crear un modulo debemos:

- Crear una variable (En este caso llamada IMDB).
- Asignar a la variable una IIFE (Inmediately Invoked function Expresion).
- Nuestra IIFE creada, va a retornar un objeto que tiene varios todos los métodos públicos a los cuales podremos llamar despues desde la variable IMDB.
- En este caso solo pondremos un método público llamado render que recorrerá el array privado de pelis y adjuntará los elementos al DOM.

*/

//Creamos nuestro módulo
var IMDB = (function() {

	/*Este es nuestro array de pelis. Es "privado", ya que no puedo acceder a él directamente desde el scope global. 
	Si quiziera acceder a él desde afuera, tendría que crear un método público (En el objeto que retorna la IFFE).
	Un ejemplo es el método "mostrarPelis" que creamos abajo*/
	var peliculas = [ 
		//Cada objeto dentro del array es una peli :)
		{ 
			id:1,
			titulo: "Volver al Futuro",
			descripcion: "El adolescente Marty McFly es amigo de Doc, un científico al que todos toman por loco. Cuando Doc crea una máquina para viajar en el tiempo, un error fortuito hace que Marty llegue a 1955, año en el que sus futuros padres aún no se habían conocido. Después de impedir su primer encuentro, deberá conseguir que se conozcan y se casen; de lo contrario, su existencia no sería posible. ",
			imagen: "back-to-the-future.jpg"
		},
		{
			id:2,
			titulo: "El Señor de los Anillos",
			descripcion: "El Señor de los Anillos: la Comunidad del Anillo (título original en inglés: The Lord of the Rings: The Fellowship of the Ring) es la primera película de la trilogía cinematográfica de El Señor de los Anillos, basada en el primer tomo de la novela homónima del escritor británico de literatura fantástica J. R. R. Tolkien; adaptado al cine por el neozelandés Peter Jackson. Esta película está incluida en el puesto número 2 de la lista de cine fantástico del «AFI's 10 Top 10».",
			imagen: "the-lord-of-the-rings.jpg"
		},
		{
			id:3,
			titulo: "Duro de Matar",
			descripcion: "John McClane (Bruce Willis) es un policía de Nueva York que visita a su esposa en Los Ángeles. Ella se encuentra en un fiesta navideña de su empresa con numerosos invitados, y McClane va a verla allí. Mientras él se está cambiando de ropa, llega al edificio un grupo de terroristas que toman a los invitados como rehenes. McClane es la única persona cuya presencia los terroristas desconocen. Comienza una lucha a muerte entre los terroristas y el solitario policía.",
			imagen: "die-hard.jpg"
		},
		{
			id:4,
			titulo: "Commando",
			descripcion: "John Matrix, (Arnold Schwarzenegger), es un ex-coronel de una unidad de Fuerzas Especiales del Ejército de los Estados Unidos, padre soltero, que se ha retirado a vivir en una cabaña en la montaña junto a su hija Jenny (Alyssa Milano). Sin saberlo él, sus ex-compañeros en el ejército están siendo asesinados uno a uno, primero Lawson, luego Forrestal y por último el capitán Bennet (Vernon Wells). Su amigo, el general Franklin Kirby (James Olson) pone a Matrix bajo el cuidado de dos guardias armados, pero los bandidos logran matarlos y secuestrar a Jenny. Matrix descubre que Bennet, que había caído en desgracia y estaba dado por muerto, no lo está en realidad sino que es el jefe de los secuestradores y que ha secuestrado a Jenny para que Matrix colabore en un asesinato a favor del señor de la guerra y ex-dictador de Val Verde, Arius (Dan Hedaya). Arius había sido depuesto en su día por Matrix y está ahora reuniendo fuerzas para dar un golpe de Estado y recuperar el poder. Matrix se ve obligado a matar nuevamente para salvar la vida de Jenny",
			imagen: "back-to-the-future.jpg"
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

	]


	return {
		//Aquí comienzan nuestro métodos publicos a los que podremos llamar desde "IMDB." : Ejemplo IMDB.mostrarPelis().
		mostrarPelis: function () {
			console.log(peliculas);
		},
		render: function () { //Creamos nuestro metodo público render.

			//Empezamos a recorrer nuestro array "peliculas" al podemos acceder ya que estamos dentro del módulo.
			for (var i = 0; i < peliculas.length; i++) {
			
				//Creamos un contenedor para cada peli
				var container = document.createElement('div');
				container.className = 'pelicula';

				//Creamos el titulo
				var titulo = document.createElement('h2');
				var textoDelTitulo = document.createTextNode(peliculas[i].titulo);					
				titulo.append(textoDelTitulo);

				//Creamos el descripcion;
				var descripcion = document.createElement('p');
				var textoDeLaDescripcion = document.createTextNode(peliculas[i].descripcion);					
				descripcion.append(textoDeLaDescripcion);

				//Creamos la imagen
				var imagen = document.createElement('img');
				imagen.src = 'img/' + peliculas[i].imagen;

				//Ponemos el título, la imagen y la descripción dentro del "div" contenedor que creamos.
				container.append(titulo);
				container.append(imagen);				
				container.append(descripcion);

				//Adjuntamos el div contenedor que tiene todos los datos de nuestra peli a el body.
				document.body.append(container)

			}

		}

	}

})()


//Finalmente renderizamos las pelis llamando a el método público del modulo IMDB!
IMDB.render();