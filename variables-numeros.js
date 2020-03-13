var edad = 27;

//incremento
edad += 1;

//decremento
var peso = 57;
peso -= 2;

//suma de dos numero distintos

var sandwich = 3;
peso = peso + sandwich;

//redondeando numeros
var vino = 200.7;
var total = Math.round(vino * 100 * 3) / 100;

//usamos toFixed(<numero de decimales>)
var totalStr = total.toFixed(3);

//comvertimos string a numero decimal
var total2 = parseFloat(totalStr);