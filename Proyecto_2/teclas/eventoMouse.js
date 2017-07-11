document.addEventListener("mouseup", dibujarMouse);
var punto = document.getElementById("area_de_dibujo");
var puntoLienzo = punto.getContext("2d");

var x = 100;
var y = 101;

dibujarLinea("blue", x-1, y-1, x+1, y+1, puntoLienzo);

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


function dibujarMouse(evento)
{
	
	if(evento)
	{
		dibujarLinea("black", x, y, x, y, puntoLienzo)
		console.log(evento.clientX);
	}

	else
	{
		console.log(evento.clientY);
	}
	

}

//Mostrar en consola los attributos del mouse. - checked.
//Dibujar un punto con coordenadas fijas - checked.
//Dibujar cuando se presiona el mouse.