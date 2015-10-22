$(document).ready(function(){

    $("#boton_inicio").click(function(){

        tablero = new TableroBi();
        ficha = new Ficha();
        varia = new variables();
        $("#bug").fadeOut("slow");
        $("#divMenu").fadeOut("slow", function(){

            tablero.crearTablero();
            tablero.rellenarTablero();
            ficha.comprobarFeliz();
            ficha.comprobarFelizCerdos();
            ficha.comprobarPosible();
        });


        var fichasrojas = parseInt($("#rangoR").val());
        varia.setFichasRojas(fichasrojas);

        var fichasverdes = parseInt($("#rangoV").val());
        varia.setFichasVerdes(fichasverdes);

        var vecinosFelicidad = parseInt($("#rangoVecinos").val());
        varia.setVecinos(vecinosFelicidad);

        console.log("El usuario a elegido: " + fichasrojas + " fichas rojas.");
        console.log("El usuario a elegido tener " + fichasverdes + " fichas verdes");
        console.log("El usuario a elegido tener " + vecinosFelicidad + " vecinos par ser feliz.");
    });
})