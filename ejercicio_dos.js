var Pepito = {
	nombre: 'Pepito',
	apellido: 'Garcia Lorca',
	edad: 24
}

function mayorEdad(persona){
	console.log(`${persona.nombre} es: `)
	if(persona.edad >= 18){
		console.log('mayor de edad')
	}else{
		console.log('menor de edad')
	}
}

mayorEdad(Pepito);