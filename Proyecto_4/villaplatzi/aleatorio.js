var z; 

for(i = 0; i < 10; i++)
{
	z = aleatorio(10, 20);
	document.write(z + ", ");
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