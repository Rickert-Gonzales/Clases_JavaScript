//objetos
var personaUno = {
	nombre: 'Rickert',
	edad: 23
}

var personaDos = {
	nombre: 'Luis',
	edad: 24
}

//funcion
function consulta(persona){
	var {nombre,edad} = persona;
	//var {edad} = personaUno;
	console.log('Hola me llamo '+ nombre + ' y tengo ' + edad + ' años');
}

//llamamos a la funcion para ambos objetos
consulta(personaUno);
consulta(personaDos);