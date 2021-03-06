//alert("Hola");

var d = document.getElementById("dibujito"); //?Dónde está el canvas? El canvas está en el documento, entonces es el objeto document.
//Como llegar al HTML a un ID, obtener un elemento por el ID (getElementByID)
var lienzo = d.getContext("2d"); //función del objeto canvas permite el área donde se va dibujar.
//console.log(lienzo);


var TotalLineas = 30;
var l = 0; //contador de líneas.
var yi, xf;
var yf, xi;

var color = "#FAA";

/*
while(l < lineas)
{
	yi = 10 * l;
	xf = 10 * (l + 1);

	dibujarLinea("#AAF", 0, yi, xf, 300);
	console.log("Línea: " + l);
	l++;
}
*/

for(l = 0; l < TotalLineas; l++)
{
	yi = 10 * l;
	xf = 10 * (l + 1);

	xi = 300 - (l * 10) 
	yf = (l * 10) + 10;


	dibujarLinea("#AAF", 0, yi, xf, 300);
	dibujarLinea("#AAA", xi, 300, 300, yf);


	console.log("Línea: " + l);
}



/*
do
{
	yi = 10 * l;
	xf = 10 * (l + 1);

	dibujarLinea("#AAF", 0, yi, xf, 300);
	console.log("Línea: " + l);
	l++;
}while(l < lineas);
*/


dibujarLinea(color, 1, 1, 1, 299);
dibujarLinea(color, 1, 299, 299, 299);

//En los parámetros de una función se le declara las variables 
//Las funciones se cargan en memoria, no importa donde se escriban.
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath(); //el lapiz en el papel (lienzo), como iniciar el camino. "arrancar un trazo"
	lienzo.strokeStyle = color; //stokeStyle es un atributo/propiedad, para indicar el color por pintar.
	lienzo.moveTo(xinicial, yinicial); //Mover el lapiz
	lienzo.lineTo(xfinal, yfinal); //Trazar la línea.
	lienzo.stroke(); //dibuja la línea.
	lienzo.closePath(); //cerrar el trazo.
}

