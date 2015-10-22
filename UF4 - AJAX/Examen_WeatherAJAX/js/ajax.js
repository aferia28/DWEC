/**
 * Created by adrianferialopez on 18/5/15.
 */
$(document).ready(function() {

    var latitud ;
    var longitud ;
    var stringError;

    $("#botonCargar").click(function () {
        var nomCiutat = $("#inputText").val();
        console.log("");
        console.log("Buscarem el temps de la ciutat: " + nomCiutat);

        if (nomCiutat) {
            $("#errorMensajes").empty(); //Eliminamos cualquier mensaje de error que podamos tener de otras busquedas..
            $("#contenedor2").empty();
            $('#idUser').empty();
            $('#contenedorIMG').empty();

            $(this).attr('disabled', 'disabled');
            $(this).toggleClass('btn-primary');
            $(this).html('Carregant...'); //Posibilidad de añadir barra de carga...

            $.ajax(
                {

                    url: 'http://api.wunderground.com/api/ca6cc596750813cd/conditions/q/ES/'+ nomCiutat +'.json',
                    type: 'GET',
                    dataType: 'json',
                    complete: function (jqXHR, textStatus) {
                        $('#botonCargar').html('Mostrar temps');// Canvia el texto mostrado en el botón
                        $('#botonCargar').removeAttr('disabled');// Vuelve a activar el botón
                        $('#botonCargar').toggleClass('btn-primary');
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        stringError = "ERROR: " + jqXHR.status + " - " + errorThrown;
                        $('#errorMensajes').append("<p class='alert alert-danger'>" + stringError + "</p>");
                    },
                    success: function (jsonTemps) {
                        // Muestra el JSON recibido por consola
                        console.log(jsonTemps);

                        var current = jsonTemps.current_observation;
                        $('#contenedor2').prepend('<div id="idUser" style="margin-left: 5%;"><h2>' + current.display_location.city + '</h2></div>');
                        $('#idUser').append('<h2 style="color: #080808;">' + current.display_location.state_name + '</h2>');
                        $("#idUser").append('<p>'+ current.local_time_rfc822 +'</p>')
                            img = current.icon_url;
                        $('#idUser').append('<img style="margin-top: -20%;" src="' + img + '"/>');


                        $('#idUser').append('<p><strong>Temperatura Actual:</strong> ' + current.feelslike_c + '</p>');

                         $('#contenedor2').append('<hr />');

                        longitud = parseFloat(current.display_location.longitude);
                        latitud = parseFloat(current.display_location.latitude);
                        console.log("Coordenadas:" + longitud + ", " + latitud);


                        $.ajax(
                            {
                                type: 'GET',
                                url: 'http://www.panoramio.com/map/get_panoramas.php?set=full&from=0&to=13&minx='+longitud+'&miny='+latitud+'&maxx='+(longitud+0.5)+'&maxy='+(latitud+0.5)+'&size=medium&mapfilter=true',
                                datatype: 'jsonp',
                                complete: function(jqXHR, textStatus){
                                    $('#botonCargar').html('Mostrar temps');// Canvia el texto mostrado en el botón
                                    $('#botonCargar').removeAttr('disabled');// Vuelve a activar el botón

                                    console.log("SEGUNDA CARGA COMPLETADA.");

                                },
                                error: function(jqXHR, textStatus, errorThrown){

                                    stringError = "ERROR: " + jqXHR.status + " - " + errorThrown;
                                    $('#errorMensajes').append("<p class='alert alert-danger'>" + stringError + "</p>");
                                },
                                success: function(jsonPhotos){
                                    console.log(jsonPhotos);

                                    var random = Math.floor((Math.random() * 10) + 1);
                                    var img2 = jsonPhotos.photos[random].photo_file_url;
                                    $("#contenedorIMG").append('<img src="' + img2 + '"/>');

                                    console.log(latitud);
                                    console.log(longitud);
                                }
                            });
                    }
                });
        }

    });
});