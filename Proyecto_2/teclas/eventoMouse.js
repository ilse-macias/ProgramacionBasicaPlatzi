document.addEventListener("mousedown", dibujarMouse);
var punto = document.getElementById("area_de_dibujo");
var puntoLienzo = punto.getContext("2d");

var x, y = 100;


dibujarLinea("red", x-1, y-1, x+1, y+1, puntoLienzo);

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

function dibujarMouse(mouse)
{
	var dibujarLineaMouse = true;
	var colorcito = "blue";
	var movimiento = 20;

	if(dibujarLineaMouse == true)
	{
		dibujarLinea(colorcito, x, y, x, y - movimiento, puntoLienzo);
		y = y - movimiento;
	}

	console.log(mouse);
}