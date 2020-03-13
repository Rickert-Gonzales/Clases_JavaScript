var Rickert = {
	nombre: 'Rickert',
	apellidos: 'Gonzales',
	edad: 23,
	ingeniero: true,
	cantante: false
}

var Luis = {
	nombre: 'Luis',
	apellidos: 'Ramirez',
	edad: 15
}

const MAYOR_DE_EDAD = 18;

/* Arrow Function */
const esMayorDeEdad = ({ edad }) => edad >= MAYOR_DE_EDAD;

function mayorMenorEdad(persona){
	if(esMayorDeEdad(persona)){
		console.log(`${persona.nombre} es mayor de edad`)
	}
	if(!esMayorDeEdad(persona)){
		console.log(`${persona.nombre} es menor de edad`)
	}
}

function acceso(persona){
	if (!esMayorDeEdad(persona)) {
		console.log('ACCESO DENEGADO')
	}else{
		console.log('ACCESO CONCEDIDO')
	}
}

//mayorMenorEdad(Rickert);
