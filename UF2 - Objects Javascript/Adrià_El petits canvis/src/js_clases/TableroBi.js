/**
 * Created by adrianferialopez on 20/4/15.
 */
function TableroBi(){

    this.casillas = new Array(10);

    for(var i=0; i<this.casillas.length; i++){
        this.casillas[i] = new Array(10);
    }

    this.crearTablero = function(){

        for(var i=0; i<10; i++){

            for(var j=0; j<10; j++) {

                $("#d_tablero").append("<div id='c" + i +"-"+ j + "' posible='no' class='casilla' ondragenter='return enter(event)' ondragover='return over(event)' ondrop='return drop(event)'></div>");
                var casilla = new Casilla("c" + i+"-"+ j, i, j,false);

                this.casillas[i][j] = casilla;

            }
        }
    };

    this.rellenarTablero = function(){

        for(var i = 0; i < varia.FICHAS_ROJAS; i++){

            var randomX = Math.floor((Math.random() * 10) + 0);
            var randomY = Math.floor((Math.random() * 10) + 0);

            if(this.casillas[randomX][randomY].getOcupada() == false)
            {
                var ficha = new Ficha("fb"+randomX+"-"+randomY, "bird", false);

                this.casillas[randomX][randomY].setFicha(ficha);
                //this.fichasBird[i] = ficha;

                $("#c"+randomX+"-"+randomY).append("<img id='i_b-"+i+"' href-lang='bird' draggable='true' ondragstart='start(event)' ondragend='end(event)' style='margin-top: 4px;' src='bird_angry.png'/>");
                this.casillas[randomX][randomY].setOcupada(true);

            }else{i--}
        }

        for(var j=0; j < varia.FICHAS_VERDES; j ++){

            var randomX = Math.floor((Math.random() * 10) + 0);
            var randomY = Math.floor((Math.random() * 10) + 0);

            if(this.casillas[randomX][randomY].getOcupada() == false)
            {
                var ficha = new Ficha("fp"+randomX+"-"+randomY, "pig", false);

                this.casillas[randomX][randomY].setFicha(ficha);

                $("#c"+randomX+"-"+randomY).append("<img id='i_p"+j+"'  href-lang='pig' draggable='true' ondragstart='start(event)' ondragend='end(event)' style='margin-top: 4px;' src='pig_angry.png'/>");
                this.casillas[randomX][randomY].setOcupada(true);

            }else{j--}
        }
    }

    this.getCasillas = function(){
        return this.casillas;
    }

   /* this.comprobarFelicidad = function(casilla){

    }*/
}
