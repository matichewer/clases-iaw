
var capitales=new Array();
capitales["Francia"]="Paris";
capitales["Alemania"]="Berlín";
capitales["Chile"]="Santiago";
capitales["Australia"]="Canberra";
capitales["Mexico"]="Mexico DF";

function descubrir(elemento){
	var pais = elemento.innerHTML;
	var capital = elemento.nextElementSibling;
	capital.innerHTML = capitales[pais]; 
	setBandera(elemento);
}

function cubrir(elemento){
	elemento.nextElementSibling.innerHTML = ""; 
}


function setBandera(elemento){	
	var imagen = document.getElementById("banderita");
	var bandera = elemento.innerHTML;
	switch (bandera) {
		case "Francia": 
			imagen.src = "banderas/france.png";
			break;
		case "Alemania": 
			imagen.src = "banderas/germany.png";
			break;
		case "Chile": 
			imagen.src = "banderas/chile.png";
			break;
		case "Australia": 
			imagen.src = "banderas/australia.png";
			break;
		case "Mexico": 
			imagen.src = "banderas/mexico.png";
			break;

	}
}