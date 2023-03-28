
var key= "4678365d";

function buscar(elemento){
 	//	 recuperar el titulo de la pelicula
	let titulo = document.getElementById("titulo").value;
	console.log(titulo);


	var url="http://www.omdbapi.com/?apikey="+key+"&t="+titulo;
	fetch(url)
	.then(response => response.json())
	.then(data => {
	// Mostrar datos en la página
	document.getElementById("poster").src = data.Poster;
	
});


}


