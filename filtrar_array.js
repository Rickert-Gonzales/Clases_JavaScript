var rickert = {
	nombre: 'Rickert',
	edad: '25',
	ocupacion: 'Developer'
}

var aurora = {
	nombre: 'Aurora',
	edad: '6 meses',
	ocupacion: ''
}

var zoe = {
	nombre: 'Zoe',
	edad: '12',
	ocupacion: 'marketer'
}

const estaOcupado = ({ ocupacion }) => {
	 if (ocupacion.length > 1) {
		return ocupacion;
	}
}

/*forma uno
const estadoOcupado = persona => {
	if(personas.length > 1){
		return persona.ocupacion; 
	}
}
*/

//array
var personas = [rickert, aurora, zoe];

var personasOcupacion = personas.filter(estaOcupado)

/*var personasOcupacion = personas.filter(function(persona) {
	if (personas.length > 1) {
		return persona.ocupacion;
	}
})*/

console.log(personasOcupacion)