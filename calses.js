function Persona(nombre, apellido, altura){
	this.nombre = nombre
	this.apellido = apellido
	this.altura = altura
}

Persona.prototype.saludar = function(){
	console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.Altura = function(){
	if (this.altura > 1.5) {
		console.log(`Mido ${this.altura}, soy alto`)
	}else{
		console.log(`Mido ${this.altura}, soy bajo`)
	}
}

var rickert = new Persona('Rickert', 'Gonzales', '1.7')