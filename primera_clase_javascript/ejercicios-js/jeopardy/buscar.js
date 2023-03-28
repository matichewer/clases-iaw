
function mostrar(){
	document.getElementById("respuesta").style.visibility = "visible";
}


function buscar(){
   fetch('http://jservice.io/api/random')
  .then(response => response.json())
  .then(data => {
	document.getElementById("pregunta").innerHTML = data[0].question;
	document.getElementById("respuesta").innerHTML = data[0].answer;
	document.getElementById("respuesta").style.visibility = "hidden";
	});
}


