var andres = {
  nombre: "andres",
  altura: 1.86,
  cantidadDeLibro: 100
}
var oscar = {
  nombre: "oscar",
  altura: 1.71,
  cantidadDeLibro: 182
}

var yolanda = {
  nombre: "yolanda",
  altura: 1.56,
  cantidadDeLibro: 150
}
var personas = [yolanda, oscar, andres]


/*var acum = 0;

for (var i = 0; i < personas.length; i++) {
  acum = acum + personas[i].cantidadDeLibro
}*/

/*
const reducer = (acum, persona) => {
  return acum + persona.cantidadDeLibro;
}*/

//segunda forma
const reducer = (acum, {cantidadDeLibro}) => acum + cantidadDeLibro;

var totalLibros = personas.reduce(reducer,0);

console.log(`En total tiene ${totalLibros} libros`);