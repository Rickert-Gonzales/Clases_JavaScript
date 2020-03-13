var rickert = {
	nombre: 'Rickert',
	edad: '25',
	ocupacion: 'Developer'
}

var aurora = {
	nombre: 'Aurora',
	edad: '6 meses',
	ocupacion: 'felina'
}

var zoe = {
	nombre: 'Zoe',
	edad: '12',
	ocupacion: 'marketer'
}

//array
var personas = [rickert, aurora, zoe];

for (var i = 0; i < personas.length; i++) {
	var persona = personas[i];
	console.log(`${persona.nombre} tiene como ocupacion ser ${persona.ocupacion}`)
}