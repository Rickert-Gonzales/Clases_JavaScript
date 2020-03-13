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


/*var promesas = ids.map(function (id) {
	return obtenerPersonaje(id)
})*/
var ids = [1,2,3,4,5,6,7]

var promesas = ids.map((id)  => obtenerPersonaje(id)) 
Promise
	.all(promesas)
	.then(personaje => console.log(personaje))
	.catch(onError)
