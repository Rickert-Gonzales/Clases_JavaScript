const API_URL = 'https://swapi.co/api/'
const PEOPLE = 'people/:id'
const opts = { crossDomain: true }
 

function obtenerPersonaje( id, callback ) {
	const URL = `${API_URL}${PEOPLE.replace(':id', id)}`

	//metodo para hacer request
	$.get(URL, opts, function (persona) {
		console.log(`Hola yo soy, ${persona.name}`)

		if (callback) {
			callback()
		}
	})
}


obtenerPersonaje(1, function(){
	obtenerPersonaje(2, function() {
		obtenerPersonaje(3)
	})
})