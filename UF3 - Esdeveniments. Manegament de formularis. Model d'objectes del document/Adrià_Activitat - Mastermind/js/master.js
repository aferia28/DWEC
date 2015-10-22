/*
Mirar porque cuando hacemos click en los circulos grandes, aparecen en consola, al principio doblados, luego triplicados, etc..
esto hace que a la hora de aplicar la css, se le aplique a 3 en lugar de a 1.
*/

var master = 
{
	arrayCod: null,
	contadorColores: 0,
	contadorColoresOk: 0,
	conta: 0,
	contad: 0,
	totalBlancas: 0,
	fIncorrectas: 0,

	//funcion que generará el codigo que tendrá que averiguar el usuario
	generarCodigo: function() 
	{
		if(config.debug == true)
		{
			master.arrayCod = config.arrayCodDebug;
			console.log("Codigo oculto debug mode: " + config.arrayCodDebug);
		}else
		{
			if(localStorage.storageArrayCod != null)
			{
				this.arrayCod = localStorage.getItem("storageArrayCod");
			}else{
				this.arrayCod = []; //this.fichas = new Array();

				for(i = 0; i < 5; i++)
				{
					this.arrayCod.push(Math.floor((Math.random()*6)+1));
				}
				console.log("Codigo que deberá adivinar el Usuario: " + this.arrayCod)
			}
		    
		}
	},

	//function que va a comparar si el color esta esta correctamente posicionado. Es decir si estan 100% correctos.
	fichasOK: function()
	{
		for(var i = 0; i < 5; i++)
		{
			if(this.arrayCod[i] == masterui.arrayUsu[i])
			{
				this.contadorColores++; //contador que indica el numero de colores que estan igual tanto en color como en posición.
			}
		}
		alert("Fichas colocadas 100% correctamente:" + this.contadorColores);
	},

	//funcion que comparara si hay algun color en la combiancion de usuario. Esta funcion no comprueba la posición.
	fichasKO: function()
	{
		for(var i = 0; i < 5; i++)
		{
			for(var j = 0; j < 5; j++)
			{
				if(masterui.arrayUsu[i] == this.arrayCod[j])
				{
					this.contadorColoresOk++;
					break;
				}
			}
		}
		alert(this.contadorColoresOk);
	},

	localStorageFunction: function()
	{
	    if(typeof(Storage) !== "undefined")
	    {
	    	localStorage.setItem("numIntentos", parseInt(masterui.intentosNum) -1);
	    	localStorage.setItem("storageArrayCod", Array(master.arrayCod));
	    	localStorage.setItem("storageNegras", parseInt(master.contadorColores));
	    	localStorage.setItem("storageBlancas", parseInt(master.totalBlancas));
	    	localStorage.setItem("storageGrises", parseInt(master.fIncorrectas));
	    	//ultima combinacion color del usuario.
	    } 
	    else 
	    {
	        alert("Sorry, your browser does not support web storage...");
	    }		
	}
	
}

