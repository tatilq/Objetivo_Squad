
var puntosSquad = document.getElementById("puntos_Squad");
var maxPuntos = document.getElementById("max_Puntos");
var divSalida = document.getElementById("salida");
var porcentaje_Squad = 0;

function calcular()
{
	var  valorpuntosSquad=puntosSquad.value;
	var  valormaxPuntos=maxPuntos.value;

	porcentaje_Squad = (100*(puntosSquad.value) / maxPuntos.value);
	var valorPorcentajeSquad= porcentaje_Squad;

	if(valorpuntosSquad == "" || valormaxPuntos == "" )
	{

		salida.innerHTML = "0.00";
		document.getElementById("mensajes").innerHTML = '<div class="alert alert-danger">No se ingresaron valores</div>';
	}
	else if( valorPorcentajeSquad > 100  ||  valorPorcentajeSquad < 0)
	{
		salida.innerHTML = "0.00";
		document.getElementById("mensajes").innerHTML = '<div class="alert alert-danger">Se ingresaron valores incorrectos</div>';
	}
	else 
	{
		if (valorPorcentajeSquad >= 80 ) 
		{
			salida.innerHTML = valorPorcentajeSquad.toFixed(2)+"%";
			document.getElementById("mensajes").innerHTML = '<div class="alert alert-danger">Muy bien Squad</div>';
		}
		else
		{
			salida.innerHTML = valorPorcentajeSquad.toFixed(2)+"%";
			document.getElementById("mensajes").innerHTML = '<div class="alert alert-danger">Pueden hacerlo mejor</div>';
		}
	}

}
