'use strict'

/* 

# Crear el modulo Diario

- El objeto noticia debera contener un 
id, un titulo, una descripcion y una imagen
- El modulo Debera validar que la noticia
no fue ingresada previamente
- El modulo Debera tener la posibilidad de eliminar una noticia por ID
- El modulo Debera tener la posibilidad de ordernar sus noticias
- El modulo debera persistir las noticias creadas en session o local storage, por lo tanto cuando recargue deberan volver a aparecer.

*/

var Diario = (function() {

	//Privado
	var noticias = []; 

	function revisarSiExiste(id, noticias) {

		for (var i = 0; i < noticias.length; i++) {
			
			if (noticias[i].id === id) {
				return true;			
			};

		}

		return false;

	}

	//publico - public API
	return {
		cargarNoticia: function(id, titulo, descripcion, rutaImagen) {

			var existe = revisarSiExiste(id,noticias);

			if(!existe) {
				
				console.log('La noticia no existe');

				var noticia = {
					id:id,
					titulo:titulo,
					descripcion:descripcion,
					rutaImagen:rutaImagen
				}

				noticias.push(noticia);

				
			} else {

				console.log('ojo que la noticia ya existe');	
			
			}


		},
		getNoticias: function () {
			console.log(noticias);
		}

	}

})()