/**
 * Created by adrianferialopez on 28/4/15.
 */
var Comportamiento = {

    valorIdCasilla: function()
    {

            var casilla = $(event.target.parentNode);
            var id_casilla = casilla.attr("id");

            return id_casilla;
    },

    valorIdFicha: function()
    {
        $("img").click(function(event){

            var casilla = $(event.target.parentNode);
            var id_casilla = casilla.attr("id");

            for(var i = 0; i<10; i++)
            {
                for(var j = 0; j<10; j++)
                {
                    if(tablero.casillas[i][j].id == id_casilla) //si la cuando recorre la id coincide, es que es donde hemos clicado y procedera a comprobar si es es feliz.
                    {
                        var id_ficha = tablero.casillas[i][j].ficha.id;
                        return id_ficha;
                    }
                }
            }

        })
    },

    valorTipoFicha: function()
    {

            var targ = $(event.target);
            var click_tipo = targ.attr("href-lang");

            return click_tipo;
    },

    cambiarFicha: function()
    {
        $("div").click(function(){

            if($(this).has("img"))
            {
                alert("ya hay ficha")
            }
            else
            {
                $(this).css("background-color", "black");
            }
        })
    }
}