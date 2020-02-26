"use strict";
let name = prompt ("Cum te numesti?", '');
alert("Privet " + name + "!");
let nota = confirm("Vrei nota 2?");
if (nota) {
	alert("Foarte bine!")
} else {
	alert("Nui cum vrei")
};
function double() {
	let number = prompt("Introduceti un numar pentru al mari inca odata.");
	let result = alert(number * 2);
}

double();