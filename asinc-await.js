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

//creamos una funcion que mostrara los personajes
//para usar Async -await, primero se escribe "async" antes de la funcion
async function optenerPersonajes() {
	var ids = [1,2,3,4,5,6,7]
	var promesas = ids.map((id)  => obtenerPersonaje(id))
	//para poder uras el async-await, devemos poner todo el codigo dentro de
	//try-catch
	try{
		//para usar asincronismo primero guardamos los personajes en una variable
		//con el Promise.all() le decimos que cuando obtenga todos los personajes
		//que los guarde en la variable
		//Await detiene la ejecucion astq que todas las promesas se obtengan y se guarden
		var personajes = await Promise.all(promesas)
		console.log(personajes)

	//entre los parentecis pondremos el identificador para cada personaje
	}catch(id){
		//dentro se declara la funcion de error
		onError(id)
	}
}

//llamamos a la funcion
optenerPersonajes()


