const API_URL = 'https://swapi.co/api/'
const PEOPLE = 'people/:id'
const opts = { crossDomain: true }

const onResponse = function (persona) {
	console.log(`Hola yo soy, ${persona.name}`)
}

function obtenerPersonaje(id) {
	const URL = `${API_URL}${PEOPLE.replace(':id', id)}`

	//metodo para hacer request
	$.get(URL, opts, onResponse)
}


obtenerPersonaje(101)