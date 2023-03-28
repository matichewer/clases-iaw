
function calcular() {
    // recuperar los valores de la página
    let op1 = document.getElementById("op1").value;
    let op2 = document.getElementById("op2").value;
    
    // sumarlos
    let res =  parseInt(op1) +  parseInt(op2);

    // agregarlos en la página en el lugar adecuado  
    document.getElementById("resultado").innerHTML = res;
}