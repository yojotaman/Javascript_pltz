//alert('let´s play jan ken pon!!!');

function maquina(min,max){
	var num = Math.floor( Math.random() * (max-min+1) + min );
	return num; 
}

var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["piedra","papel","tijera"];

var optUser = prompt("elige tu opción\n Piedra: 0\n Papel: 1\n Tijera: 2", 0);
var optMaquina = maquina(0,2); 
alert("Has elegido " + opciones[optUser]);
alert(" La computadora ha elegido " + opciones[optMaquina]);

// var a = 0;
// var b = 2;
// var nume = Math.floor()*(a-)

if (optUser == piedra) {
	if(optMaquina==piedra){
		alert("Empate!!");

	}
	else if(optMaquina==papel){
		alert("Perdiste!!");
	}
	else if(optMaquina==tijera){
		alert("Ganaste!!");
	}

}
else if (optUser == papel){
	if(optMaquina==piedra){
		alert("Ganaste!!");
	}
	else if(optMaquina==papel){
		alert("Empate!!");
	}
	else if(optMaquina==tijera){
		alert("Perdiste!!");
	}

}
else if (optUser == tijera){
	if(optMaquina==piedra){
		alert("Perdiste!!");
	}
	else if(optMaquina==papel){
		alert("Ganaste!!");
	}
	else if(optMaquina==tijera){
		alert("Empate!!");
	}
}

else {
	alert("WTF??")
}

