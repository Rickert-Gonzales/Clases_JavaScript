var Rickert = {
	nombre: 'Rickert',
	apellidos: 'Gonzales',
	edad: 23,
	peso:75
}

console.log(`Al inicio del año ${Rickert.nombre} pesa ${Rickert.peso} kilos`)

const INCREMENTAR_PESO = 0.2
const DIAS_DEL_AÑO = 365

const aumentarPeso = persona => persona.peso += INCREMENTAR_PESO
const adelgazar = persona => persona.peso -= INCREMENTAR_PESO

for (var i = 1; i <= DIAS_DEL_AÑO; i++) {
	var random = Math.random()

	if(random < 0.25) {
		aumentarPeso(Rickert)
	}else if(random < 0.5){
		adelgazar(Rickert)
	}
}

console.log(`Al final del año ${Rickert.nombre} pesa ${Rickert.peso.toFixed(2)} kilos`)/* toFixed(2) -> reduce los decimales a dos unidades */