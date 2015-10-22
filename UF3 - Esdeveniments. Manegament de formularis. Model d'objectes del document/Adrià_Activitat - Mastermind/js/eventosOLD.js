	/*$(document).ready(function(){
    	master.generarCodigo();
        $("#boton_start").click(function(){
    		$("#boton_start").fadeOut("slow", function(){
    			$("#img_master").toggle("slide",{direction: "right"}, 500);
    			$("#img_mind").toggle("slide", {direction: "left"}, 500, function(){
    				console.log("Termina slide mastermind");
    			});
        		$('body').animate({
    			backgroundColor: "#f7f6f6",
    		}, 1000, function(){
    				$("#principio_centro").remove();
    				$("#principio_izq").removeClass("col-md-4");
    				$("#principio_izq").addClass("col-md-6");
    				$("#principio_der").removeClass("col-md-4");
    				$("#principio_der").addClass("col-md-6");
    				
    				$("#header_").show("slide",500);
    				$("#titulo").show("slide", 500, function(){ //entra titulo mastermind
    					console.log("show titulo complete");
    					$("#slide_range").show("slide", 500, function(){ //entra slide-range
    						console.log("show slide_range complete");
    						$("#div_boton_comenzar").show("slide", 500, function(){ //entra boton_comenzar
    							console.log("show boton_comenzar complete");
    							$("#div_pistas_progreso").show("puff", 500); //entra div derecha progreso
    						});
    					});//end functon show button_comenzar
    				});//end function show title
    			});//end function animation
    		});//end function button fadeOut
    	}); //end animation click! 

    	$("#boton_comenzar").click(function(){ //cuando seleccionamos los intentos y click_comenzar
            master.setNumIntentos();
            $(this).toggle("fold", 1000, function(){ //boton desaparece
                $("#div_boton_comenzar").remove();
                $("#slide_range").toggle("puff", function(){//slide desaparece
                    $("#fichas_colores").show("slide", 500);
                });
    		});//end mostrar fichas
    	});//end click_comenzar 
        console.log(master.intentosNum);
        master.getCombinacionUsu();

        $("#boton_probar").click(function() {
            master.fichasKO();
            master.fichasOK();
            master.mostrarPistaCorrectas();
            master.mostrarPista();
            master.intentosNum= master.intentosNum - 1;
            $(".h2intentos").text(master.intentosNum);

        });

    
});*/