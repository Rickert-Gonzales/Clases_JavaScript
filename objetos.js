//creamos un objeto: reune caracteristicas(atributos) comunes
var rickert = {
	nombre: 'Rickert', //clave: valor
	apellido: 'Gonzales',
	edad: 28
}//el final no lleva coma

//creamos la funcion
//cuando queremos llamr un atributo desde la funcion
/*function imprimirMayuscuas(persona){
	// combertimos a variable y agregamos persona.<el atributo que qeremos ver>
	var nombre = persona.apellido.toUpperCase();
	console.log(nombre);
}*/

//otra forma de crear la funcion llamndo a un atributo
//dentro de los parametros de la funcion llamamos al atributo encerrado entre llaves
function imprimirMayuscuas({nombre}){
	console.log(nombre.toUpperCase());
}

//otra forma de llamar un atributo
function imprimirMayuscuas({persona}){
	//creamos una variavle llamada nombre que coje el atrobuto nombre de = persona
	var {nombre} = persona;
	console.log(nombre.toUpperCase());
}

//llamamos a la funcion
//cuando llamamos un atributo del objeto, desde una funcion ponemos el objeto completo: rickert
imprimirMayuscuas(rickert);

//cuando llamamos un atributo desde una bojeto: nombreObjeto.atributo
//imprimirMayuscuas(rickert.nombre);