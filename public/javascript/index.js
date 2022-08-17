//creo la funcion del boton encriptar
function encriptar() {
    /// Capto el input value y lo sobreescribo en minuscula
    var texto = document.getElementById("inputTxt").value.toLowerCase();
    // Capto vocal y la encripto asu valor ademas, con:
    // i:para que afecte tanto mayusculas como minusculas
    // g:para toda la linea u oracion
    // m:para que afecte a multiples lineas o parrafo
    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    // Quito imagen
    document.getElementById("right-img").style.display = "none";
    // Quito right-txt
    document.getElementById("right-txt").style.display = "none";
    // Guardo txtCifrado 
    document.getElementById("right-txt-2").innerHTML = txtCifrado;
    // Muestro boton copiar
    document.getElementById("copy-btn").style.display= "show";
    // ocupa lugar en display inherit
    document.getElementById("copy-btn").style.display = "inherit";    
}

//creo la funcion del boton desencriptar
function desencriptar() {
    /// Capto el input value y lo sobreescribo en minuscula
    var texto = document.getElementById("inputTxt").value.toLowerCase();
    // Capto vocal y la desencripto asu valor ademas, con:
    // i:para que afecte tanto mayusculas como minusculas
    // g:para toda la linea u oracion
    // m:para que afecte a multiples lineas o parrafo
    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    // Quito imagen
    document.getElementById("right-img").style.display = "none";
    // Quito right-txt
    document.getElementById("right-txt").style.display = "none";
    // Guardo txtCifrado 
    document.getElementById("right-txt-2").innerHTML = txtCifrado;
    // Muestro boton copiar
    document.getElementById("copy-btn").style.display= "show";
    // ocupa lugar en display inherit
    document.getElementById("copy-btn").style.display = "inherit";
    document.getElementById().style.display = ""
}

function copiarTxt() {
    var contenido = document.querySelector("#right-txt-2");
    contenido.select();
    document.execCommand("copy");
    alert("texto copiado!")
}