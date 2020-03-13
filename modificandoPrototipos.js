function heredaDe(prototypoHijo, prototypoPadre){
	var fn = function () {}
	fn.prototype = prototypoPadre.prototype

	prototypoHijo,prototype = new fn
	//ci¿onstructor
	prototypoHijo.prototype.constructor = prototypoHijo
}

function Persona(nombre, apellido, altura){
	this.nombre = nombre
	this.apellido = apellido
	this.altura = altura
}

Persona.prototype.saludar = function(){
	console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.Altura = function(){
	return this.altura > 1.8
}

function Desarrollador(nombre, apellido){
	this.nombre = nombre
	this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function(){
	console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}

//var rickert = new Persona('Rickert', 'Gonzales', 1.7)