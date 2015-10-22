/**
 * Created by adrianferialopez on 18/5/15.
 */
$(document).ready(function(){

    var photoTag;
    var userId;
    var optionDrop;
    var stringError;
    var imgFlickr;

    $('.dropdown-menu li > a').click(function(e){

        optionDrop = this.innerHTML;
        $("#dropdown").html(optionDrop);
        //console.log(this.innerHTML);
        console.log(optionDrop);
    });

    $("#botonCargar").click(function(){

        if(optionDrop == "Id Usuario")
        {
            var userId = $("#inputText").val();
            console.log("");
            console.log("Se buscara por Id de Usuario..");

            if(userId)
            {
                $("#errorMensajes").empty(); //Eliminamos cualquier mensaje de error que podamos tener de otras busquedas..
                $("#contenedor").empty();
                $('#idUser').empty();

                $(this).attr('disabled','disabled');
                $(this).toggleClass('btn-primary');
                $(this).html('Cargando...'); //Posibilidad de añadir barra de carga...

                $.ajax(
                {
                    url: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&id=' + userId + '&jsoncallback=?',
                    type:'GET',
                    dataType: 'json',
                    complete: function(jqXHR, textStatus)
                    {
                        $('#botonCargar').html('Buscar fotos');// Canvia el texto mostrado en el botón
                        $('#botonCargar').removeAttr('disabled');// Vuelve a activar el botón
                        $('#botonCargar').toggleClass('btn-primary');
                    },
                    error: function(jqXHR, textStatus, errorThrown)
                    {
                        stringError ="ERROR: " + jqXHR.status + " - " + errorThrown;
                        $('#errorMensajes').append("<p class='alert alert-danger'>"+ stringError +"</p>");
                    },
                    success: function(jsonFlickr)
                    {
                        // Muestra el JSON recibido por consola
                        console.log(jsonFlickr);
                        $('#cont1').prepend('<p id="idUser" style="margin-left: 5%;"><strong>ID usuario:</strong> ' + userId + '</p>');
                        $.each(jsonFlickr.items, function(i, item)
                        {
                            imgFlickr = item.media.m;
                            $('#contenedor').append('<img src="' + imgFlickr + '"/>');

                            $('#contenedor').append('<p><strong>ID autor:</strong> ' + item.author_id + '</p>');
                            $('#contenedor').append('<p><strong>Etiquetas:</strong> ' + item.tags + '</p>');
                            $('#contenedor').append('<hr />');
                        });
                    }
                });
            }

        }else if(optionDrop == "Tag")
        {
            var photoTag = $("#inputText").val();
            console.log("");
            console.log("Se buscara por Tag de foto..");

            if(photoTag)
            {
                $("#errorMensajes").empty(); 
                $("#contenedor").empty(); 
                $('#idUser').empty();

                $(this).attr('disabled','disabled');
                $(this).toggleClass('btn-primary')
                $(this).html('Cargando...'); 

                $.ajax(
                {
                        url: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=' + photoTag + '&jsoncallback=?',
                        type:'GET',
                        dataType: 'json',
                        complete: function(jqXHR, textStatus)
                        {
                            // Canvia el texto mostrado en el botón
                            $('#botonCargar').html('Buscar fotos');
                            // Vuelve a activar el botón
                            $('#botonCargar').removeAttr('disabled');

                            $('#botonCargar').toggleClass('btn-primary');

                        },
                        error: function(jqXHR, textStatus, errorThrown)
                        {
                            stringError ="ERROR: " + jqXHR.status + " - " + errorThrown;
                            $('#errorMensajes').append("<p class='alert alert-danger'>"+ stringError +"</p>");
                        },
                        success: function(jsonFlickr)
                        {
                            // Muestra el JSON recibido por consola
                            console.log(jsonFlickr);
                            $.each(jsonFlickr.items, function(i, item)
                            {
                                imgFlickr = item.media.m;
                                //mostramos contenido del json recibido mediante ajax..
                                $('#contenedor').append('<div style="text-align: center;" class="divImg"><img src="' + imgFlickr + '"/><div>');
                                $('#contenedor').append('<p><strong>ID autor:</strong> ' + item.author_id + '</p>');
                                $('#contenedor').append('<h2>'+ item.title +'</h2>');
                                $('#contenedor').append('<p>Date of Post: '+ item.published +'</p>');
                                $('#contenedor').append('<p><strong>Etiquetas:</strong> ' + item.tags + '</p>');
                                $('#contenedor').append('<hr />');
                            });
                        }
                });
            }
        }

    })




})