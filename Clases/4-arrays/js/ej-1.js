var Nacion = (function() {

    //Privado
    var noticias = [
		{
			id: 1,
			titulo: "Moria Casan revela que en realidad es un hombre",
			descripcion: "Todo este tiempo Moria se hizo pasar por una diva mujer; sin embargo, ella siempre fue un hombre y siempre se sintio hombre y ahora quiere ser el divo numero uno de la Argentina",
			img: "MoriaHombre.jpg"
		}
    ]


    //Publico
    return {
    	nombre: "Diario La Nacion",
    	descripcion: "Noticias de ultimo momento y actualizadas para usted.",
    	getNoticias: function () {
    		console.log(noticias);
    	},
    	setNoticia: function( id, titulo, descripcion, imagen ){

    		var nuevaNoticia = {
    			id:id,
    			titulo:titulo,
    			descripcion:descripcion,
    			imagen:imagen
    		}
    		noticias.push(nuevaNoticia);
    	},

    	for (var i = 0; i < Things.length; i++) {
    		Things[i]
    	}

    	eliminarNoticia: function(id) {

    		/* Vamos paso por paso!

			1) Antes que nada, nuestro metodo eliminarNoticia va a recibir el id de la noticia.
			(Ahé lo agregué)

    		2) Hay que ver si la noticia está en el array de noticias
    		Para esto hay que crear una funcion que me diga si hay una noticia con este id
    		Como recorremos un array? con un for :). 

			3) En caso de que no haya ningun objeto noticia con ese id en el array noticias,
			la funcion devuelve "false" 

    		3) Y aca está la clave: Si la noticia se encontró, esa funcion podria devolver la posicion
    		en donde ese objeto noticia está en el array "Noticias". Y cual es la posicion? La "i"!!.
    		

    		4) ahora podemos directamente hacer un splice:
    		noticias.splice(i,1) y me va a eliminar 1 elemento de ese array desde la pos i :D


	



		// Ingresando una contraseña
		//  var passw = prompt("Ingrese la contraseña:");
		//
		//  if (passw === "elimino") {
		//    var noticiaParaEliminar = parseInt(prompt("Ingrese el id de la noticia que quiera eliminar"));
		//  } else {
		//    alert("Contraseña incorrecta")
		//  };


		//  for (key in noticias) {
		//     if (this.id == noticiaParaEliminar) {
		//       noticias.splice(noticias[i]);
		//     }
		//   }


		//  for (var i = 0; i < noticias.length; i++) {
		//    for ( key in noticias[i]) {
		//     console.log(noticias[key]);
		//    }
		//  }

      
  }

}







}());






