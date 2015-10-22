var masterui = 
{
		idFicha: 0,
		valorFicha: 0,
		arrayUsu: new Array(),
		intentosNum: 0,
		local: null,	

        prepararTablero: function(event)
        {
        	//alert(event.data.dis); 
        	//console.log(event.currentTarget);

    		$("#boton_start").fadeOut("slow", function(){
    			$("#img_master").toggle("slide",{direction: "right"}, 500);
    			$("#img_mind").toggle("slide", {direction: "left"}, 500, function(){
    				console.log("Termina slide mastermind");
    			});
        		$('body').animate({
    			backgroundColor: "#f7f6f6",
    		}, 1000, function(){
    				$("#principio_centro").remove();

    				$("#principio_izq").removeClass("col-md-4")
    								   		.addClass("col-md-6");

    				$("#principio_der").removeClass("col-md-4")
    										.addClass("col-md-6");
    				
    				$("#header_").show("slide",500);
    				$("#titulo").show("slide", 500, masterui.opcionContinuar());//end function show title
    			});//end function animation
    		});//end function button fadeOut
    	},

    	comenzarPartida: function()
    	{
	    	if(config.debug == true)
	    	{
	    		masterui.intentosNum = config.intentosNumDebug;
	    	}else
	    	{
	    		if(localStorage.numIntentos != null)
	    		{
	    			masterui.intentosNum = localStorage.getItem("numIntentos");
	    			$("#texto_intentos").append("<p>" + masterui.intentosNum + "</p>");
	    		}else
	    		{
		    	masterui.setNumIntentos();//cuando seleccionamos los intentos y click_comenzar
		    	}
		    } 
		    $(this).toggle("fold", 1000, function(){ //boton desaparece
	            	
	          	$("#div_boton_comenzar").remove();
	            	
	           	$("#slide_range").toggle("puff", 300, function(){//slide desaparece
              	
               		$("#fichas_colores").show("slide", 1000);
               	});
               	$("#fichas_colores").show("slide", 1000);
	    	});//end mostrar fichas
	    	if(localStorage.getItem("localFichas") != null)
	    	{
	    		console.log(localStorage.getItem("localFichas"));
	    		var localprueba = localStorage.getItem("localFichas");
	    		//localprueba.appendTo("#prueba1"+1); 
				$("#div_progreso").show('fast');
				$("#progreso_row").append('<div id="prueba' + master.conta + '" class="col-md-12"></div');
				$("#prueba" +master.conta).append('<div class="row clearfix" id="prueba1' + master.conta + '"></div>');	    		
	    		$("#prueba1"+master.conta).append(localprueba);
	    		$("#prueba1" + master.conta+ " > .fichas").removeAttr('name');

				master.contadorColores = localStorage.getItem("storageNegras");
				master.totalBlancas = localStorage.getItem("storageBlancas");
				master.fIncorrectas = localStorage.getItem("storageGrises");

				masterui.mostrarPistasCorr();
	    	}
    	},

		setNumIntentos: function()
		{
			this.intentosNum = parseInt($("#rango").val());
			console.log("El usuario a elegido tener " + this.intentosNum + " intentos");
			$("#texto_intentos").append("<p>" + this.intentosNum + "</p>");
		},    	

    	getFichasClick: function(event)
    	{

    		$("#div_color_picker").show("clip", 500);
			idFicha = $(event.target);
			console.log(idFicha);

    	},

    	getValorFichaUsu: function(event)
    	{	

			valorFicha = $(event.target).data('value');//guardamos el valor de la ficha clickada (la de colores)
			console.log(valorFicha);
			var valorCss = $(event.target).attr('hreflang');//guardamos las clases css (a traves de un nuevo atributo que nosotros mismo hemos creado, con le nombre de estas) que tiene asiganada la ficha(de color) clickada
			console.log(valorCss);
			//intentar ponerle un nuevo attributo a cada picker de color con los nombres de la css. Este atributo guardarlo en una variable
			//y luego pasarselo al addClass para que se lo aplique al circulo grande.
			$(idFicha).addClass(valorCss);

			idFicha.attr({'data-value': valorFicha});
			masterui.arrayUsu.push(parseInt(idFicha.attr('data-value')));

			$("#div_color_picker").fadeOut('slow');    		

    	},

    	mostrarPistas: function()
    	{
    		if(localStorage.getItem("localFichas")!= null)
    		{
				masterui.mostrarColoresCopy();
    		}
    		else
    			{
					$("#div_progreso").show('fast');
					masterui.mostrarColoresCopy();
				}
				

				local = $("#cinco_fichas").html();
				localStorage.setItem("localFichas" , local);
				//$("#progreso_row").append("<div style='margin-top: 3%;' class='col-md-2 column fichas'></div>");
				
				//resetear el color de las fichas grandes para poder volver a elegir otra combinación.
			
			masterui.arrayUsu = [];
			masterui.limpiarFichas();
			master.contadorColores = 0;
			master.contadorColoresOk = 0;
			master.totalBlancas = 0;
			master.fIncorrectas = 0;
			master.conta++;
			masterui.intentosNum= masterui.intentosNum - 1;    		
			$(".h2intentos").text(masterui.intentosNum);

			masterui.mostrarModal();
    	},

		limpiarFichas: function()
		{
			$("div[name='buttonficha']" ).removeClass('red');
			$("div[name='buttonficha']" ).removeClass('blue');
			$("div[name='buttonficha']" ).removeClass('violet');
			$("div[name='buttonficha']" ).removeClass('black');
			$("div[name='buttonficha']" ).removeClass('green');
			$("div[name='buttonficha']" ).removeClass('yellow');
		},

		mostrarPistaCorrectas: function()
		{

			master.totalBlancas = master.contadorColoresOk - master.contadorColores;
			var t = master.contadorColores + master.totalBlancas;
			master.fIncorrectas = 5 - t;

			masterui.mostrarPistasCorr();
			
			master.contad++;
		},	


		mostrarModal: function()
		{
			if(masterui.intentosNum == 0 || master.contadorColores == 5)
			{
				if(master.contadorColores == 5)
				{	$("#modalBody").append('<img style="margin-left: 15%;" src="img/winner.png">');
					$("#myModalLabel").text("Felicidades! Has GANADO!");
				}else{
					$("#modalBody").append('<img style="margin-left: 15%;" src="img/loser.png">');
					$("#myModalLabel").text("Lástima! Has Perdido!");
					masterui.clearLocalStorage();
				}	
				$('#modalWin').modal("show");
			}
		},

		opcionContinuar: function()
		{
			if(localStorage.getItem("numIntentos") != null)
			{
				$("#slide_range").remove();
				$("#boton_comenzar").text("CONTINUAR");
    			$("#div_boton_comenzar").show("slide", 500, function(){ 
    				$("#div_pistas_progreso").show("puff", 500);
    			});				
			}else{
				$("#slide_range").show("slide", 500, function(){
    				$("#div_boton_comenzar").show("slide", 500, function(){ 
    					$("#div_pistas_progreso").show("puff", 500);
    				});					
    			});							
			}
		},

		mostrarPistasCorr: function()
		{
				$("#div_pistas").show('fast');

				$("#progreso_pistas").append('<div id="pistap' + master.contad + '" class="col-md-12 pistasProgreso"></div>')
				$("#pistap"+master.contad).append('<div class="row clearfix" style="margin-left:-9px;" id="pistap1' + master.contad + '"></div>')
				for(var i = 0; i < master.contadorColores; i++)
				{
					$("#pistap1"+master.contad).append('<div class="col-md-2 fichas_pista"></div>');
				}
				
				for(var j=0; j<master.totalBlancas; j++)
				{
					$("#pistap1"+master.contad).append('<div class="col-md-2 fichas_pistaBlanca"></div>');

				}
				
				for(var i = 0; i<master.fIncorrectas; i++)
				{
					$("#pistap1"+master.contad).append('<div class="col-md-2 fichas_pistaGris"></div>');
				}			
		},

		mostrarColoresCopy: function()
		{
				$("#progreso_row").append('<div id="prueba' + master.conta + '" class="col-md-12"></div');
				$("#prueba" +master.conta).append('<div class="row clearfix" id="prueba1' + master.conta + '"></div>');
				$("div[name='buttonficha']").clone().appendTo("#prueba1"+master.conta);
				$("#prueba1" + master.conta+ " > .fichas").removeAttr('name');
		},

		clearLocalStorage: function()
		{
			localStorage.removeItem("numIntentos");
			localStorage.removeItem("storageArrayCod");
			localStorage.removeItem("localFichas");
		}

}