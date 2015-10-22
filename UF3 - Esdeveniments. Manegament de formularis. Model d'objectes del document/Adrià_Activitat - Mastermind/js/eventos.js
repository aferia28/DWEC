var eventos = 
{
	empezar: function()
	{	
			$(document).ready(function(){

				master.generarCodigo();
				/*$().on("evento", {variable: valor}, funcionAllamar); 

				-> Donde "evento" será click, onload, etc.. 
		        -> Donde {variable: valor} será el nombre de la variable y el valor. 
					Puede ser string, valor entero, etc..
				-> Donde funcionAllamar será la funcion a la que vamos a llamar.
														  
				funcionAllamar: function(event)  ->el parametro event, siempre lo pasaremos. Luego lo utilizamos o no, pero es muy recomendable pasarlo.
				{
					alert(event.data.variable); -> Nos muestra el valor de la variable que le hemos pasado al evento de arriba.
					console.log(event.currentCurrentTarget); -> Nos mostrará en consola el elemento. En caso de tener $().on(click) donde hayamos hecho click.
				}						

				*/
				$("#boton_start").on("click", {prueba : "ejemplo de pasar variable"}, masterui.prepararTablero);
				//llamar a todas las funciones.(masterui o master)

				$("#boton_comenzar").on("click", masterui.comenzarPartida);

				$("#cinco_fichas").on("click", masterui.getFichasClick);

				$("#div_color_picker").on("click", masterui.getValorFichaUsu);

				$("#boton_probar").on("click", function()
						{
							master.fichasKO(),
		            		master.fichasOK(),
							masterui.mostrarPistaCorrectas(),
							master.localStorageFunction(),
							masterui.mostrarPistas()
						}
					);
			});
	}
}
