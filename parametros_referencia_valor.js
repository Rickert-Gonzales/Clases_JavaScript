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

//
function cumpleaños(persona){
	return{
		...persona,//copiamos todos los atributos del objeto
		edad: persona.edad + 1// mosificamos la edad despues de copiarlo
	}
}
//llamamos a la funcion para ambos objetos
consulta(personaUno);
consulta(personaDos);