
function explotar (){
	alert("BOOM!!!!");	
	document.write("<h1> Elegiste un área minada :( </h1>");
}

function ganaste (){
	document.write("<h1>Felicitaciones, has ganado el juego</h1>")
}

var campo = [[1,0,0],
			 [0,1,0],
			 [1,0,1]];

// if (campo[0][1]==1){
// 	explotar();
// }
// else{
// 	ganaste();
// }

var textos = ["Césped","Bomba"];

var x, y;

alert("Estas en un campo minado\n" + "Debes seleccionar la posición para X y para Y con valores entre 0 y 2 para cada una");

x=prompt("Cordenada X? (entre 0 y 2)");
y=prompt("Cordenada Y? (entre 0 y 2)");


if(x<3 && y<3){
	var posicion = campo[x][y];
	document.write("Has elegido "+ textos[posicion]);
	if(posicion==1){
		
		explotar();
	}
	else{
		ganaste();		
	}
}
else{
	
	document.write("Has elegido una posición por fuera del campo");
	explotar();
}


//document.write(textos[posicion]);