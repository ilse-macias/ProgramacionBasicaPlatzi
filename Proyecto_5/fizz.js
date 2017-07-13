//impresión del 0 al 100.
//número divisble (1) = 3.
//número divisible (2) = 5.

var promptUno = prompt("1. Escribe un número: " );
var numeroDivisbleUno = parseInt(promptUno);
console.log(numeroDivisbleUno);

var promptDos = prompt("2. Escribe otro número: ");
var numeroDivisbleDos = parseInt(promptDos);
console.log(numeroDivisbleDos);

var totalNumeros = 100; //Número total para imprimir en pantalla

//Si el prompt es un número.
if(valorNaN(numeroDivisbleUno, numeroDivisbleDos))
{
	//Imprime en pantalla cuales son los números divisibles.
	document.write("Divisible #1: " + numeroDivisbleUno + "<br/> Divisible #2: " + numeroDivisbleDos + "<br/> <br/>");

	//Imprime en pantalla todos los números.
	for(numContador = 0; numContador <= totalNumeros; numContador++)
	{
		//document.write("no: " + numContador + "<br/>");

		if((esDivisibleUno(numContador, numeroDivisbleUno)) && (esDivisibleDos(numContador, numeroDivisbleDos)))
		{
			document.write(numContador + ": Fizz Buzz" + "<br/> <br/>");
		}

		else if(esDivisibleUno(numContador, numeroDivisbleUno))
		{
			document.write(numContador + ": Fizz" + "<br/> <br/>");
			divisor = true;
		}

		else if(esDivisibleDos(numContador, numeroDivisbleDos))
		{
			document.write(numContador + ": Buzz" + "<br/> <br/>");
			divisor = true;
		}

		else if(!esDivisibleUno(numContador, numeroDivisbleUno) && !esDivisibleDos(numContador, numeroDivisbleDos))
		{
			document.write(numContador + ": No es múltiplo. <br/> <br/>");
			divisor = true;
		}

	}

}

//En prompt no es un número, es NaN.
else
{
	document.write("Se ha escrito un valor no numérico: <br/>" + "Divisible #1: " + numeroDivisbleUno + "<br/>Divisible #2: " + numeroDivisbleDos);
}

//Para divisible #1.
function esDivisibleUno(num, divisor)
{
	if((num % divisor) == 0)
	{
		return true; //cuando una función tiene un return significa que ahí muere, ya no se ejecuta.
	}
	
	else
	{
		return false;
	}
}

//Para divisible #2.
function esDivisibleDos(num, divisor)
{
	if((num % divisor) == 0)
	{
		return true; //cuando una función tiene un return significa que ahí muere, ya no se ejecuta.
	}
	
	else
	{
		return false;
	}
}


//Cuando hay un valor NaN.
function valorNaN(numeroDivisbleUno, numeroDivisbleDos)
{
	if(isNaN(numeroDivisbleUno))
	{
		return 0;
	}

	if(isNaN(numeroDivisbleDos))
	{
		return 0;
	}

	else
	{
		return valorNaN;
	}
}