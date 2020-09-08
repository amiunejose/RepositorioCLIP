var respuestaCorrecta = "venus";
var intentos = 4;
var text_respuesta = document.getElementById('text-respuesta');
var texto_salida = document.getElementById('texto-salida');
var div_pista = document.getElementById('div-pista');
var intentos_restantes = document.getElementById('intentos-restantes');


var adivinanza = function()
{
var respuesta = text_respuesta.value.toLowerCase();
if (intentos > 0)
{
    if (respuesta === respuestaCorrecta) 
    {
        texto_salida.className = "alert alert-info";
        texto_salida.innerText = "CORRECTO";
        victoria();
    }
    else 
    {
        derrota();
        texto_salida.className = "alert alert-danger";
        texto_salida.innerText = "INCORRECTO";
        intentos = intentos - 1;
     if (intentos === 3) {div_pista.innerText = "Intenta una vez más. tu puedes!"};
     if (intentos === 2) {div_pista.innerText = "Mi atmosfera esta compuesta principalmente por dioxido de carbono y nitrogeno"};
     if (intentos === 1) {div_pista.innerText = "Soy el segundo planeta mas cercano al Sol"};

        intentos_restantes.innerText = "Intentos restantes: "+ intentos;
    }
} else alert("Se quedo sin intentos, la respuesta correcta es : 'venus'");

   
}


var victoria = function()
{
    div_pista.style.display = 'none';
    intentos_restantes.style.display = 'none';
    intentos = 4;
}

var derrota = function()
{
    div_pista.style.display = 'block';
    intentos_restantes.style.display = 'block';
}