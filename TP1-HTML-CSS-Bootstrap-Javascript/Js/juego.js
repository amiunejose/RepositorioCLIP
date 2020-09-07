var respuestaCorrecta = "venus";
var intentos = 4;


var adivinanza = function()
{
var respuesta = document.getElementById('text-respuesta').value;
if (intentos > 0)
{
    if (respuesta === respuestaCorrecta) 
    {
        document.getElementById('texto-salida').innerText = "CORRECTO";
    }
    else 
    {
     document.getElementById('texto-salida').innerText = "INCORRECTO";
     intentos = intentos - 1;
     document.getElementById('intentos-restantes').innerText = "Intentos restantes: "+ intentos;
    }
} else alert("Se quedo sin intentos");

   
}