const API_URL = 'https://swapi.co/api/'
const PEOPLE = 'people/:id'

const lukeURL = `${API_URL}${PEOPLE.replace(':id',1)}`
const opts = {crossDomain: true}

const onResponse = function (luke) {
	console.log(`Hola yo soy, ${luke.name}`)
}

//metodo para hacer request
$.get(lukeURL, opts, onResponse)

