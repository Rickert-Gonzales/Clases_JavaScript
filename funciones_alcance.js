//variable global: toda variavle que no se necuntre dentro de una funcion, se modifica aprtit del objeto gloval que seria window
var nombre = 'Rickert'

//creamos la funcion
function imprimirMayuscuas(nombre){
	nombre = nombre.toUpperCase();
	console.log(nombre);
}

//llamamos a la funcion
imprimirMayuscuas(nombre);