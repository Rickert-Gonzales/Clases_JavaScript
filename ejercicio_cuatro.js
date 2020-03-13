var persona_uno = {
	nombre: 'Uno',
	edad: '1',
	ocupacion: 'deve'
}
var persona_dos = {
	nombre: 'Dos',
	edad: '2',
	ocupacion: ''
}
var persona_tres = {
	nombre: 'Tres',
	edad: '3',
	ocupacion: ''
}
var persona_cuatro = {
	nombre: 'Cuatro',
	edad: '4',
	ocupacion: 'maestro_pockemon'
}

//
var personasLista = [persona_uno, persona_dos, persona_tres, persona_cuatro];

const trabajo = persona => {
	if (personasLista.length = 0 ) {
		return persona.ocupacion;
	}
}

var noOcupado = personasLista.filter(trabajo);
console.log(noOcupado);