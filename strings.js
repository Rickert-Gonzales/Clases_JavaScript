//para combertir el texto en mayusculas usamos: toUpperCase()
var nombre = 'Rickert', apellido = 'Gonzales';
var nombreMayuscula = nombre.toUpperCase();

//para combertir el texto en minusculas usamos: toLowerCase()
var nombreMinusculas = nombre.toLowerCase();

//para saber cual es la primera letra de una cadena de texto usamos: charAt(<numero de la letra>)
var primeraLetra = nombre.charAt(0);

// para saber el numero de letras de una cadena de texto: length
var cantidaLetras = nombre.length;

//para concatenar dos estrings
var nombreCompleto = nombre + ' ' + apellido;

//interpolacion de texto: concatenar dos strings
var nombreCompletoInterpolado = `${nombre} ${apellido.toUpperCase()}`

//accediendo a un sub-string
var str = nombre.substr(1,3);

//mostrando ultimo nombre
var usuario = 'Carlos';
var ultimaLetra = usuario.charAt(5);