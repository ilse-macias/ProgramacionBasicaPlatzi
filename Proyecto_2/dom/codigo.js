alert("esto si funciona! vualá!");

var ruta = window.location; //no se agrega parentesis, location no es una función que regrese un valor de la página web es una variable interna del objeto windows.

		/*
			objeto: los objetos tienen funciones. yo soy un objeto y una de mis funciones es comer, (humano.comer) también se tiene opciones (variables) tengo cosas dentro de mi que no son funciones simplemente datos.
			humano.comer(nieve) //objeto.función(parámetro): lo que está entre paréntesis indica que está comiendo algo.
			humano.peso //no tendrá paréntesis porque es una variable.
			
			cuando las funciones son partes de un objeto se llaman métodos
			método: es una función que hace parte de un objeto.

			cuando una variable es parte de un objeto, la variable se le llama atributo/propiedad 
			así como una función es parte de un objeto, la función se le llama método.

			depurar: arreglar un error dentro de un código.
			se hace console.log para cualquier variable o cualquier mensaje por la consola sin que el usuario se de cuenta.


		*/
		
			console.log(ruta); //superpoder.
			document.write("hola mundo, la ruta es " + ruta);
