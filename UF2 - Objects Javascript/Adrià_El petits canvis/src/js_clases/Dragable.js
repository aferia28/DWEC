/**
 * Created by adrianferialopez on 29/4/15.
 */
var inicio;
function start(e) {
    
    e.dataTransfer.effecAllowed = 'move'; // Define el efecto como mover (Es el por defecto)
    e.dataTransfer.setData("Text", e.target.id); // Coje el elemento que se va a mover
    e.target.style.opacity = '1';
    inicio = e.target.parentNode.id;
}

function end(e){
    e.target.style.opacity = ''; // Restaura la opacidad del elemento
    e.dataTransfer.clearData("Data");
}

/** Función que se ejecuta cuando un elemento arrastrable esta sobre el elemento desde del que se llama.
* Devuelve false si el objeto se puede soltar en ese elemento y true en caso contrario.
**/
function over(e) {

    var target_casilla = (e.target.parentNode.id);

    if ((e.target.parentNode.id == "d_tablero") || (e.target.className == "casilla"))
        return false;
    else
        return true;
}

function enter(e) {
    return true;
}

/**
 * Función que se ejecuta cuando un elemento arrastrable se suelta sobre el elemento desde del que se llama.
 **/
function drop(e){

    e.preventDefault(); // Evita que se ejecute la accion por defecto del elemento soltado.
    var targ= e.target.id;
    var attribute = e.target.attributes[1].nodeValue;
    var bol;

    for(var i = 0; i<10; i++)
    {
        for(var j = 0; j<10; j++)
        {
            if(tablero.casillas[i][j].id == targ)
            {
                if(attribute == "si" && tablero.casillas[i][j].getOcupada() == false)
                {
                    bol = false;
                    var elementoArrastrado = e.dataTransfer.getData("Text");
                    e.target.appendChild(document.getElementById(elementoArrastrado));

                    tablero.casillas[i][j].setOcupada(true);
                    $("#"+targ+" > img").remove();

                    var strXinicio = inicio.substring(1,2); //recogemos las coordenadas de la casilla Inicio
                    var strYinicio = inicio.substring(3,4);


                    var ficha_arrastrada = elementoArrastrado.split("-");

                    if(ficha_arrastrada[0] == "i_b")
                    {
                        $("#"+targ).append("<img  href-lang='bird' draggable='false' style='margin-top: 4px;' src='bird.png'/>")

                        tablero.casillas[strXinicio][strYinicio].ficha = null; //
                        tablero.casillas[strXinicio][strYinicio].setOcupada(false);
                        var ficha = new Ficha(elementoArrastrado, "bird", true);
                        tablero.casillas[i][j].setFicha(ficha);
                        //tablero.casillas[i][j].ficha.setFeliz(true);


                    //falta hacer el setFeliz de la ficha y cambiar la imagen dependiendo del tipo. Ahora he puesto la del pajaro,
                    //para ver que funciona
                    }else
                    {
                        $("#"+targ).append("<img  href-lang='pig' draggable='false' style='margin-top: 4px;' src='pig_happy.png'/>")
                        tablero.casillas[strXinicio][strYinicio].ficha = null;
                        tablero.casillas[strXinicio][strYinicio].setOcupada(false);
                        var ficha = new Ficha(elementoArrastrado, "pig", true);
                        tablero.casillas[i][j].setFicha(ficha);
                        //tablero.casillas[i][j].ficha.setFeliz(true);
                    }
                    $("#"+targ).attr("posible","no");
                    $(".casilla").css("background-color","#f7e1b5");

                }else
                {
                    bol = true;
                }
            }
        }
    }
    ficha.comprobarFeliz();
    ficha.comprobarFelizCerdos();
    //if(bol == false)
    //{
         // Coloca el elemento soltado sobre el elemento desde el que se llamo esta funcion
        //cambiar la ficha, y restaurar el valor de la css.
        //y la casilla poner posible NO. Ya que si colocamos la ficha, no podremos poner otra encima.
        //para poder cambiar la ficha, primero tenemos que saber que fcicha se ha arrastrado con el tipo. Un vez sabemos el tipo de ficha
        //eliminamos la ficgha que se ha arrastrado (que estara infeliz) y hacemos append de la imagen con la ficha feliz.
        //tambien tenemos que hacer setFeliz(true).

        //$(".casilla").css("background-color","#f7e1b5");
    //}else
    //{
        //restaurar CSS
      //  $(".casilla").css("background-color","#f7e1b5");
       // alert("No entra porque la casilla NO es posible");
   // }
}

/*
* FALTA HACER COMPROBACIONES PARA SABER SI LA CASILLA DE DESTINO ES LA CORRECTA. ES DECIR SI SERÁ REALMENTE FELIZ EN LA CASILA
* DONDE LO DEJAREMOS

* */