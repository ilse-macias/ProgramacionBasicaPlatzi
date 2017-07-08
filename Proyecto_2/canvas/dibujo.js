//alert("Hola");

var d = document.getElementById("dibujito"); //?Dónde está el canvas? El canvas está en el documento, entonces es el objeto document.
//Como llegar al HTML a un ID, obtener un elemento por el ID (getElementByID)
var lienzo = d.getContext("2d"); //función del objeto canvas permite el área donde se va dibujar.

console.log(lienzo);


lienzo.beginPath(); //el lapiz en el papel (lienzo), como iniciar el camino. "arrancar un trazo"
lienzo.strokeStyle = "red"; //stokeStyle es un atributo/propiedad, para indicar el color por pintar.
lienzo.moveTo(100, 100); //Mover el lapiz
lienzo.lineTo(200, 200); //Trazar la línea.
lienzo.stroke(); //dibuja la línea.
lienzo.closePath(); //cerrar el trazo.

