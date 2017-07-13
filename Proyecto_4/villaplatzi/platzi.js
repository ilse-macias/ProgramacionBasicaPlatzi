var vp = document.getElementById("villaplatzi"); 
var papel = vp.getContext("2d");
//var mapa = "img/tile.png";

document.addEventListener("keydown", moverCerdo);




var background = {
	url: "img/tile.png",
	cargaOK: false
};

var vaca = {
	url: "img/vaca.png",
	cargaOK: false
};

var pollo = {
	url: "img/pollo",
	cargaOK: false
};

var cerdo = {
	url: "img/cerdo.png",
	cargaOK: false
};

//Cuando se tiene la definición de un objeto, normalmente empieza con mayúsculas esto es una buena práctica.
//Las definiciones completas de un objeto se le llama clases, cada cosa "var <name>" se le llama instancia de la clase u objeto.
background.objeto = new Image(); //Se crea la etiqueta img del html
background.objeto.src = background.url; //se agarra del json.
background.objeto.addEventListener("load", cargarBackground);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVacas);

pollo.objeto = new Image();
pollo.objeto.src = "img/pollo.png";
pollo.objeto.addEventListener("load", cargarPollos);

cerdo.objeto = new Image();
cerdo.objeto.src = "img/cerdo.png";
cerdo.objeto.addEventListener("load", cargarCerdos);


//Función que dispara cuando ya se cargó el background
function cargarBackground()
{
	console.log(background.cargaOK); //false
	background.cargaOK = true;

	//se dibuja cada vez que esté listo.
	dibujar();
	console.log(background.cargaOK); //true
}

//Función que dispara cuando se va cargar cada animal.
function cargarVacas()
{
	vaca.cargaOK = true;
	dibujar();
}

function cargarPollos()
{
	pollo.cargaOK = true;
	dibujar();
}

function cargarCerdos()
{
	cerdo.cargaOK = true;
	dibujar();
}

function dibujar()
{
	if(background.cargaOK)
	{

		papel.drawImage(background.objeto, 0, 0);
	}

	if(vaca.cargaOK)
	{
	
		var cantidadVaquitasAleatorias = aleatorio(1, 5);
			for(vaquitas = 0; vaquitas < cantidadVaquitasAleatorias; vaquitas++)
			{
				var aleatorioX = aleatorio(0, 7);
				var aleatorioY = aleatorio(0, 10);
				var aleatorioX = aleatorioX * 40;
				var aleatorioY = aleatorioY * 60;
				papel.drawImage(vaca.objeto, aleatorioX, aleatorioY);
			}
		//}

		console.log("Vacas: " + cantidadVaquitasAleatorias);
	}

	if(pollo.cargaOK)
	{
		var cantidadPollitosAleatorias = aleatorio(1, 5);
		
		for(pollitos = 0; pollitos < cantidadPollitosAleatorias; pollitos++)
		{
			var aleatorioX = aleatorio(0, 7);
			var aleatorioY = aleatorio(0, 10);
			var aleatorioX = aleatorioX * 40;
			var aleatorioY = aleatorioY * 60;
			papel.drawImage(pollo.objeto, aleatorioX, aleatorioY);
		}

		console.log("Pollos: " + cantidadPollitosAleatorias);
	}

	if(cerdo.cargaOK)
	{
		var aleatorioX = aleatorio(0, 7);
		var aleatorioY = aleatorio(0, 10);
		var aleatorioX = aleatorioX * 40;
		var aleatorioY = aleatorioY * 60;
		papel.drawImage(cerdo.objeto, aleatorioX, aleatorioY);
		console.log("Cerdo: 1");
	}
}

function moverCerdo(evento)
{
	var cerdoX = 150;
	var cerdoY = 150;
	var velocidad = 10;

	var teclas = {
		UP: 38,
		DOWN: 40,
		LEFT: 37,
		RIGTH: 39,
	}; 

		switch(evento.keyCode)
		{
			case teclas.UP: 
				cerdoY = cerdoY - velocidad; 
				dibujar();
				console.log("Up");
			break;

			case teclas.DOWN:
				cerdoY = cerdoY + velocidad;
				dibujar();
				console.log("Down");
			break;

			case teclas.LEFT:
				cerdoX = cerdoX - velocidad;
				dibujar(cerdoX, cerdoY);
				console.log("Left");
			break;

			case teclas.RIGTH:
				cerdoX = cerdoX + velocidad;
				dibujar(cerdoX, cerdoY);
				console.log("Right");
			break;

			default:
				console.log("Tecla incorrecta");
			break;
		}
}

/*
Crea una función con parámetros min y max
retonará un valor, para guardarse en una variable.
*/
function aleatorio(min, max)
{
	var resultado;

	resultado = Math.floor(Math.random()*(max - min + 1)) + min;

	return resultado; 
}