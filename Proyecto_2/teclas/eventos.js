/*
	Colección de variables es igual a un bloque de código. Tipo de datos que usa JavaScript llamado JSON
	JavaScript Objetc Notation.

	Si se desea crear una variable con variables a dentro, se necesita crear bloques de código.
*/

var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};

console.log(teclas);

document.addEventListener("keyup", dibujarTeclado);  //Presionar Tecla: Keydown, Keyup; disparar una función.
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
	lienzo.beginPath(); //el lapiz en el papel (lienzo), como iniciar el camino. "arrancar un trazo"
	lienzo.strokeStyle = color; //stokeStyle es un atributo/propiedad, para indicar el color por pintar.
	lienzo.lineWidth = 3; //ancho de la línea por pixeles.
	lienzo.moveTo(xinicial, yinicial); //Mover el lapiz
	lienzo.lineTo(xfinal, yfinal); //Trazar la línea.
	lienzo.stroke(); //dibuja la línea.
	lienzo.closePath(); //cerrar el trazo.
}

function dibujarTeclado(evento)
{
	var colorcito = "brown";
	var movimiento = 20;

	switch(evento.keyCode)
	{
		case teclas.UP:
			//console.log("Arriba!");
			dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
			y = y - movimiento;
		break;

		case teclas.DOWN:
			//console.log("Abajo");
			dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
			y = y + movimiento;
		break;

		case teclas.LEFT:
			//console.log("Izquierda");
			dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
			x = x - movimiento;
		break;

		case teclas.RIGHT:
			//console.log("Derecha");
			dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
			x = x + movimiento;
		break;
		
		default:
			//console.log("Otra tecla");
		break;
	}
}

//una forma fácil para saber qué tecla se está presionando es guardar en una varible especial, una especie de colección de variables cada una con sus variables.
//Se pueden hacer varias varibles de otros tipos. Objeto que tiene interna variables.

//Constaste: cuando no cambia la variable por mucho tiempo o nunca va cambiarse, se recomieda ponerla en masyúculas. (atributo, propiedad y variable)