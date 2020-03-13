var rick = {
	nombre: 'Rickert',
	apellidos: 'Gonzales',
	edad: 23,
	ingeniero: true,
	cantante: false,
	cocinero: false,
	dj: false
}

/* template stream: (`${persona.nombre}`) -> nos permite interpolar variables */
function imprimir_profecione (persona){
	console.log(`${persona.nombre} es: `)

	/* cuando tenemos un boleano inicializado en true, no es nesesario ponerle true en la condicional */
	if(persona.ingeniero){
		console.log('ingeniero')
	}

	if(persona.cantante){
		console.log('cantanta')
	}

	if(persona.cocinero){
		console.log('cocinero')
	}else{
		console.log('no es cocinero')
	}
}

imprimir_profecione(rick)