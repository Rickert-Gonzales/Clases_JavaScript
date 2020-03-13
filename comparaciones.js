var x = 4, y = '4';

var rickert = {
	nombre: 'Rickert'
}

var otroNombre = {
	nombre: 'Rickert'
}

/*
* == -> x == y = true; toma ambos valores y los lleva a un mismo dato (4 numero a 4 texto), y los compara[valores primitivos]
* === -> x === y = false; compara si x e y son del mismo valor y el mismo tipo(x(numero) % y(string))
* OBJETOS
* -------
* == -> rickert == otroNombre = false; cuando comparamos objetos, preguntamos por la referencia a la variavle usada
* es true si: var otroNombre = rickert;
*/
