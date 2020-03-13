var Rickert = {
	nombre: 'Rickert',
	apellidos: 'Gonzales',
	edad: 23,
	ingeniero: true,
	cantante: false
}

const MAYOR_DE_EDAD = 18;

/* creamos una funcoin que verifique si es mayor o menor de edad en base atrue o false */
//function esMayorDeEdad(persona){
//	return persona.edad >= MAYOR_DE_EDAD; /* esta funcion devolvera valores de true es mayor o false si es menor */
//}

/* Arrow Function */
const esMayorDeEdad = ({ edad }) => edad >= MAYOR_DE_EDAD;


function mayorMenorEdad(persona){
	if(esMayorDeEdad(persona)){
		console.log(`${persona.nombre} es mayor de edad`)
	}else{
		console.log(`${persona.nombre} es menor de edad`)
	}
}

mayorMenorEdad(Rickert);