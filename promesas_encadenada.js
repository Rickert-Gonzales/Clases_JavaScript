const API_URL = 'https://swapi.co/api/'
const PEOPLE = 'people/:id'
const opts = { crossDomain: true }
 

function obtenerPersonaje( id ) {
 return new Promise((resolve, reject) => {
	const URL = `${API_URL}${PEOPLE.replace(':id', id)}`
	
	//metodo para hacer request
	$.get(URL, opts, function (data) {
		resolve(data)
 	})
 	.fail(() => reject(id))
	})
}

function onError (id){
	console.log(`Error con el personaje ${id}`)
}

obtenerPersonaje(1)
.then(( personaje ) => {
	console.log(`El personaje 1 es ${personaje.name}`)
	return obtenerPersonaje(2)
})
.then(( personaje ) => {
	console.log(`El personaje 2 es ${personaje.name}`)
	return obtenerPersonaje(3)
})
.catch(onError)
