var config = {

	//variable que controla si estamos en modo debug, o no.
	debug: false,

	//Array por defecto en modo debug.
	arrayCodDebug: [1,2,3,4,5],

	//Numero de intentos con modo debug activado.
	intentosNumDebug: 1000,

	modoDebug: function()
	{
		if(config.debug == true)
		{
			clearLocalStorage();
			console.log("[EL JUEGO ESTA EN MODO DEBUG]");
			console.log("Intentos debug mode: " + config.intentosNumDebug);
		}
	}
}