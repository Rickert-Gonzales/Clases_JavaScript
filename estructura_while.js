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

const comeMucho = () => Math.random() < 0.3
const haceDeporte = () => Math.random() < 0.4
const META = Rickert.peso - 3
var dias = 0

/* si la condicion no es falsa no se ejecuta console.log */
while (Rickert.peso > META){
	if (comeMucho()) {
		//aumenta de peso
		aumentarPeso(Rickert)
	}
	if (haceDeporte()) {
		//adelgaza
		adelgazar(Rickert)
	}
	dias +=1
}

/* toFixed(2) -> reduce los decimales a dos unidades */
console.log(`Pasaro ${dias} dias hasta que ${Rickert.nombre} adelgazo 3kg`)