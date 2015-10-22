/**
 * Created by adrianferialopez on 5/5/15.
 */
var Inicio = {

    init: function()
    {
        $(document).ready(function(){

            tablero = new TableroBi();
            ficha = new Ficha();

            tablero.rellenarTablero();
            tablero.comprobarFelizCerdos();
            tablero.comprobarFeliz();

            $("img").mousedown(function(e){
                ficha.comprobarPosible();
            })
                .mouseup(function(e){
                    $(".casilla").css("background-color","#f7e1b5");
                    $(".casilla").attr("posible", "no");
                });

        });
    }
}