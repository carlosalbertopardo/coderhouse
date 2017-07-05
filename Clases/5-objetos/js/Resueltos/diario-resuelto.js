/* 

# Crear el modulo Diario

- El objeto noticia debera contener un id, un titulo, una descripcion y una imagen
- El modulo Debera validar que la noticia no fue ingresada previamente
- El modulo Debera tener la posibilidad de eliminar una noticia por ID
- El modulo Debera tener la posibilidad de ordernar sus noticias
- El modulo debera persistir las noticias creadas en session o local storage, por lo tanto cuando recargue deberan volver a aparecer.

*/

var Diario = (function () {


	function revisarSiExiste(id,noticias) {

		for (var i = 0; i < noticias.length; i++) {
			
			if(noticias[i].id === id) {
				return i;
			}

		}

		return false;

	}


	return {
		noticias:[],
		agregarNoticia: function (id,titulo, descripcion, url) {

			var existe = revisarSiExiste(id,this.noticias);
			
			if (existe !== false) {

				console.log('la noticia con el id ' + id + 'ya existe' );

			} else {

				var noticia = {
					id:id,
					titulo:titulo,
					descripcion:titulo,
					imagen: url
				}

				this.noticias.push(noticia);

			}

		},
		eliminarNoticia: function (id) {

			var existe = revisarSiExiste(id,this.noticias)

			if (existe !== false) {

				this.noticias.slice(existe,1);
				console.log('La noticia '+ id + ' ha sido eliminada');
			
			} else {
				console.log('La noticia '+ id + ' no existe en la base de datos');
			}


		}



	}


})()

Diario.agregarNoticia(10,'lalala','lalala','lalala');