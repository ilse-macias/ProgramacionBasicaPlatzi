var vp = document.getElementById("villaplatzi"); 
var papel = vp.getContext("2d");
//var mapa = "img/tile.png";
var vaquitas = 0;

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
	if(background.cargaOk)
	{
		
		papel.drawImage(background.objeto, 0, 0);
	}

	if(vaca.cargaOK)
	{
	
		if(vaquitas < 5)
		{
			for(vaquitas = 0; vaquitas < 5; vaquitas++)
			{
				var aleatorioX = aleatorio(0, 420);
				var aleatorioY = aleatorio(0, 420);
				papel.drawImage(vaca.objeto, aleatorioX, aleatorioY);
			}
		}

		console.log("no: " + vaquitas);
	}

	if(pollo.cargaOK)
	{
		papel.drawImage(pollo.objeto, 10, 10);
		//console.log(pollitos);
	}

	if(cerdo.cargaOK)
	{
		papel.drawImage(cerdo.objeto, 150, 150);
		//console.log(cerditos);
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