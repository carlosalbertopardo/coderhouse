/* 

# Realizar un ToDo List, debera tener las siguientes funcionalidades:
​
- Crear el modulo ToDoList
- El modulo debera tener los metodos necesarios para Agregar, Editar, Mostrar Todos, Buscar y Eliminar.
- Una tarea contiene las siguientes propiedades: id, titulo, descripcion y completado
- Se tiene que poder editar titulo y descripcion de una tarea
- Cambiar a estado completado y descompletado(?) una tarea
- Eliminar una tarea o todas las tareas
- Ordernar por A-Z y Z-A las tareas ya sea por titulo como por ID
- Las tareas deberan quedar persistidas mediante localstorage y poder mostrarse en caso de recargar el browser
Realizar un ToDo List, debera tener las siguientes funcionalidades:

*/

var ToDoList = (function () {

	var tareas = [

		{
			id:4,
			titulo:'Noticia 4',
			descripcion:'Esta es la tarea n° 12',
			completado:false,
			editarTitulo: function(nuevoTitulo) {
				this.titulo = nuevoTitulo;					
			},
			editarDescripcion: function(nuevaDescription) {
				this.descripcion = nuevaDescription
			},
			completarTarea: function() {
				this.completado = true
			},
			descompletarTarea: function() {
				this.completado = false
			}
		},
		{
			id:3,
			titulo:'Noticia 3',
			descripcion:'Esta es la tarea n° 12',
			completado:false,
			editarTitulo: function(nuevoTitulo) {
				this.titulo = nuevoTitulo;					
			},
			editarDescripcion: function(nuevaDescription) {
				this.descripcion = nuevaDescription
			},
			completarTarea: function() {
				this.completado = true
			},
			descompletarTarea: function() {
				this.completado = false
			}			
		},
		{
			id:5,
			titulo:'Noticia 5',
			descripcion:'Esta es la tarea n° 12',
			completado:false,
		},
		{
			id:2,
			titulo:'Noticia 2',
			descripcion:'Esta es la tarea n° 12',
			completado:false,
			editarTitulo: function(nuevoTitulo) {
				this.titulo = nuevoTitulo;					
			},
			editarDescripcion: function(nuevaDescription) {
				this.descripcion = nuevaDescription
			},
			completarTarea: function() {
				this.completado = true
			},
			descompletarTarea: function() {
				this.completado = false
			}			
		},
		{
			id:1,
			titulo:'Noticia 1',
			descripcion:'Esta es la tarea n° 12',
			completado:false,
			editarTitulo: function(nuevoTitulo) {
				this.titulo = nuevoTitulo;					
			},
			editarDescripcion: function(nuevaDescription) {
				this.descripcion = nuevaDescription
			},
			completarTarea: function() {
				this.completado = true
			},
			descompletarTarea: function() {
				this.completado = false
			}			
		}									


	];

	function revisarSiExiste(id, arrayDondeBuscar) {

		for (var i = 0; i < arrayDondeBuscar.length; i++) {
			
			if (arrayDondeBuscar[i].id === id) {
				return i;
			};

		}

		return false;

	}

	return {
		agregarTarea: function(id, titulo, descripcion, completado) {

			var existe = revisarSiExiste(id,tareas);

			if(existe >= 0) {
				
				console.log('La tarea no existe. Creando tarea');

				var tarea = {
					id:id,
					titulo:titulo,
					descripcion:descripcion,
					completado:completado,
					editarTitulo: function(nuevoTitulo) {
						this.titulo = nuevoTitulo;					
					},
					editarDescripcion: function(nuevaDescription) {
						this.descripcion = nuevaDescription
					},
					completarTarea: function() {
						this.completado = true
					},
					descompletarTarea: function() {
						this.completado = false
					}

				}

				tareas.push(tarea);

				
			} else {

				console.log('Ya existe una tarea con el ID '+ id +'. Por favor comprobar la información ingresada.');	
			
			}

		},
		eliminarTarea: function(id) {

			var existe = revisarSiExiste(id,tareas);
			if(existe >= 0) {

				tareas.splice(existe,1);

			}

		},
		ordenarTareas: function (prop, asc) { 


		  /* Burbujeo para ordenar */
		  tareas.sort(function(a, b){ 

			if (asc === 'asc') {

				if(a[prop] > b[prop]) {
					return 1;
				} else {
					return -1;
				}

			} else {
				
				if(a[prop] > b[prop]) {
					return -1;
				} else {
					return 1;
				}

			}

		  }); 

		  return tareas;
		
		},

		mostrarTareas: function (){
			console.log(tareas);
		},
		editarTitulo: function(id, titulo) {

			var existe = revisarSiExiste(id,tareas);
			tareas[existe].editarTitulo(titulo);

		}


	}

})()