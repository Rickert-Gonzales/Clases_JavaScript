class Persona{
	constructor(nombre, apellido, altura){
	this.nombre = nombre
	this.apellido = apellido
	this.altura = altura
	}

	saludar(fn) {
		var {nombre, apellido} = this
		console.log(`Hola, me llamo ${nombre} ${apellido}`)
		if (fn) {
			fn(nombre,apellido)
		}
	}

	Altura(){
		return this.altura > 1.8
	}
}

class Desarrollador extends Persona {
	constructor(nombre, apellido, altura) {
		super(nombre, apellido, altura)
	}
	saludar(fn){
		var {nombre, apellido} = this

		console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`)
		if (fn) {
			fn(nombre,apellido,true)
		}
	}
}

function responderSaludo(nombre,apellido,esDev){
	console.log(`Buenos dias ${nombre} ${apellido}`)
	if (esDev) {
		console.log(`no sabia que eras desarrollador`)
	}
}

var Rickert = new Persona('Rickert','Gonzales',1.65)
var Rickert2 = new Desarrollador('Rickert','Gonzales',1.65)
Rickert.saludar(responderSaludo)
Rickert2.saludar(responderSaludo)