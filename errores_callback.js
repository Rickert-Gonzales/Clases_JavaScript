const API_URL = 'https://swapi.co/api/'
const PEOPLE = 'people/:id'
const opts = { crossDomain: true }
 

function obtenerPersonaje( id, callback ) {
	const URL = `${API_URL}${PEOPLE.replace(':id', id)}`

	//metodo para hacer request
	$.get(URL, opts,callback).fail(function (){
		console.log(`hubo un erroe`)
	})
}


obtenerPersonaje(1, function(personaje){
	console.log(`Hola yo soy ${personaje.name}`)
	obtenerPersonaje(2, function(personaje) {
		console.log(`Hola yo soy ${personaje.name}`)
		obtenerPersonaje(3, function(personaje){
			console.log(`Hola yo soy ${personaje.name}`)
		})
	})
})