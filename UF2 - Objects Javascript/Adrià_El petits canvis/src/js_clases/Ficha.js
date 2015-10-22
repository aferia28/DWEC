function Ficha(id, tipo, feliz)
{
    this.id = id;
    this.tipo = tipo;
    this.feliz = feliz;
    this.contadorP = 0;
    this.contadorB = 0;

    function rango(x,y)
    {
        return ((x >= 0 && y >= 0) && (x < 10 &&  y < 10));
    }

    this.comprobarFeliz = function(){

        for(var i = 0; i<10; i++)
        {
            for(var j = 0; j<10; j++)
            {
                if(tablero.casillas[i][j].getOcupada() == true && tablero.casillas[i][j].ficha.tipo == "bird")
                {
                    indiceX = i;
                    indiceY = j + 1;

                    if(rango(indiceX,indiceY)) //el indice de la Y(j en el for) llega hasta 9. Si sumamos 9 + 1 error.
                    {
                        if (tablero.casillas[i][j + 1].getOcupada() == true && tablero.casillas[i][j + 1].ficha.tipo == "bird") {
                            this.contadorB++;
                        }
                    }

                    indiceX = i;
                    indiceY = j - 1;

                    if(rango(indiceX,indiceY))
                    {
                        if (tablero.casillas[indiceX][indiceY].getOcupada() == true && tablero.casillas[indiceX][indiceY].ficha.tipo == "bird") {
                            this.contadorB++;
                        }
                    }

                    indiceX = i + 1;
                    indiceY = j;

                    if(rango(indiceX,indiceY))
                    {
                        if (tablero.casillas[indiceX][indiceY].getOcupada() == true && tablero.casillas[indiceX][indiceY].ficha.tipo == "bird") {
                            this.contadorB++;
                        }
                    }

                    indiceX = i - 1;
                    indiceY = j;

                    if(rango(indiceX,indiceY))
                    {
                        if (tablero.casillas[indiceX][indiceY].getOcupada() == true && tablero.casillas[indiceX][indiceY].ficha.tipo == "bird") {
                            this.contadorB++;
                        }
                    }

                    indiceX = i - 1;
                    indiceY = j - 1;

                    if(rango(indiceX,indiceY))
                    {
                        if (tablero.casillas[indiceX][indiceY].getOcupada() == true && tablero.casillas[indiceX][indiceY].ficha.tipo == "bird") {
                            this.contadorB++;
                        }
                    }

                    indiceX = i - 1;
                    indiceY = j + 1;

                    if(rango(indiceX,indiceY))
                    {
                        if (tablero.casillas[indiceX][indiceY].getOcupada() == true && tablero.casillas[indiceX][indiceY].ficha.tipo == "bird") {
                            this.contadorB++;
                        }
                    }

                    indiceX = i + 1;
                    indiceY = j + 1;

                    if(rango(indiceX,indiceY))
                    {
                        if (tablero.casillas[indiceX][indiceY].getOcupada() == true && tablero.casillas[indiceX][indiceY].ficha.tipo == "bird") {
                            this.contadorB++;
                        }
                    }

                    indiceX = i + 1;
                    indiceY = j - 1;

                    if(rango(indiceX,indiceY))
                    {
                        if (tablero.casillas[indiceX][indiceY].getOcupada() == true && tablero.casillas[indiceX][indiceY].ficha.tipo == "bird") {
                            this.contadorB++;
                        }
                    }

                    if(this.contadorB > varia.N_VECINOS_FELICIDAD || this.contadorB == varia.N_VECINOS_FELICIDAD) //Si la ficha con coordenadas [i][j] tiene mas de 2 fichas a su alrededor. Es feliz.
                    {
                        //Si la ficha es feliz, cambiamos el pajaro infeliz por el pajaro feliz.!
                        $("#c"+i+"-"+j+" > img").remove();
                        $("#c"+i+"-"+j).append("<img  href-lang='bird' draggable='false' style='margin-top: 4px;' src='bird.png'/>");
                        tablero.casillas[i][j].ficha.setFeliz(true);
                        console.log(tablero.casillas[i][j] + "es feliz");
                        this.contadorB = 0;
                    }else{
                        this.contadorB = 0;
                    }
                }
            }
        }
    }

    this.comprobarFelizCerdos = function(){

        for(var i = 0; i<10; i++)
        {
            for(var j = 0; j<10; j++)
            {
                if(tablero.casillas[i][j].getOcupada() == true && tablero.casillas[i][j].ficha.tipo == "pig")
                {
                    indiceX = i;
                    indiceY = j + 1;

                    if(rango(indiceX,indiceY))
                    {
                        if (tablero.casillas[i][j + 1].getOcupada() == true && tablero.casillas[i][j + 1].ficha.tipo == "pig") {
                            this.contadorP++;
                        }
                    }

                    indiceX = i;
                    indiceY = j - 1;

                    if(rango(indiceX,indiceY))
                    {
                        if (tablero.casillas[indiceX][indiceY].getOcupada() == true && tablero.casillas[indiceX][indiceY].ficha.tipo == "pig") {
                            this.contadorP++;
                        }
                    }

                    indiceX = i + 1;
                    indiceY = j;

                    if(rango(indiceX,indiceY))
                    {
                        if (tablero.casillas[indiceX][indiceY].getOcupada() == true && tablero.casillas[indiceX][indiceY].ficha.tipo == "pig") {
                            this.contadorP++;
                        }
                    }

                    indiceX = i - 1;
                    indiceY = j;

                    if(rango(indiceX,indiceY))
                    {
                        if (tablero.casillas[indiceX][indiceY].getOcupada() == true && tablero.casillas[indiceX][indiceY].ficha.tipo == "pig") {
                            this.contadorP++;
                        }
                    }

                    indiceX = i - 1;
                    indiceY = j - 1;

                    if(rango(indiceX,indiceY))
                    {
                        if (tablero.casillas[indiceX][indiceY].getOcupada() == true && tablero.casillas[indiceX][indiceY].ficha.tipo == "pig") {
                            this.contadorP++;
                        }
                    }

                    indiceX = i - 1;
                    indiceY = j + 1;

                    if(rango(indiceX,indiceY))
                    {
                        if (tablero.casillas[indiceX][indiceY].getOcupada() == true && tablero.casillas[indiceX][indiceY].ficha.tipo == "pig") {
                            this.contadorP++;
                        }
                    }

                    indiceX = i + 1;
                    indiceY = j + 1;

                    if(rango(indiceX,indiceY))
                    {
                        if (tablero.casillas[indiceX][indiceY].getOcupada() == true && tablero.casillas[indiceX][indiceY].ficha.tipo == "pig") {
                            this.contadorP++;
                        }
                    }

                    indiceX = i + 1;
                    indiceY = j - 1;

                    if(rango(indiceX,indiceY))
                    {
                        if (tablero.casillas[indiceX][indiceY].getOcupada() == true && tablero.casillas[indiceX][indiceY].ficha.tipo == "pig") {
                            this.contadorP++;
                        }
                    }

                    if(this.contadorP > varia.N_VECINOS_FELICIDAD || this.contadorP == varia.N_VECINOS_FELICIDAD) //Si la ficha con coordenadas [i][j] tiene mas de 2 fichas a su alrededor. Es feliz.
                    {
                        $("#c"+i+"-"+j+" > img").remove();
                        $("#c"+i+"-"+j).append("<img  href-lang='pig' draggable='false' style='margin-top: 4px;' src='pig_happy.png'/>");
                        tablero.casillas[i][j].ficha.setFeliz(true);
                        console.log(tablero.casillas[i][j] + "es feliz");
                        this.contadorP = 0;
                    }else{
                        this.contadorP = 0;
                    }
                }
            }
        }
    }

     function esGuay(){

            var idCasilla = Comportamiento.valorIdCasilla(event);

            for(var i = 0; i<10; i++)
            {
                for(var j = 0; j<10; j++)
                {
                    if(tablero.casillas[i][j].id == idCasilla) //si la cuando recorre la id coincide, es que es donde hemos clicado y procedera a comprobar si es es feliz.
                    {
                        if(tablero.casillas[i][j].ficha.feliz == true)
                        {
                            console.log("click == true");
                            return true;
                        }else{
                            console.log("click no feliz")
                            return false;
                        }
                    }
                }
            }
    }

    this.comprobarPosible = function(){

        //funcion que deberá comprobar a que casillas podemos mover la ficha.
        //Nos indicara remarcando el div donde podemos colocarla para que sea feliz.

        /*NOTA: Si veo que con draggable es mas complejo, lo haré con .click()
        * Cuando el usuario haga click en cualquiera de las fichas, se mostrara en el tablero las posibilidades.
        * Si la ficha donde se ha clicado ya es feliz, no hara ningun efecto(alert).*/

        $("img").mousedown(function(event){

             //cada vez que se haga click se reiniciara el color del bg para poder volver a mostrarlo.
            var contador = 0;

            var id_div;
            var click_tipo = Comportamiento.valorTipoFicha(event); //me devuelve el tipo de la casilla donde hemos clicado.

            if(esGuay())
            {
                alert("Ya soy FELIZ =)");

            }else{
                //si la ficha donde hemos clicado no es feliz. Se ejecuta el codigo para comprobar donde podría serlo.
                for(var i = 0; i < 10; i++)
                {
                    for(var j = 0; j < 10; j++)
                    {
                        if(tablero.casillas[i][j].getOcupada() == false)
                        {
                            indiceX = i;
                            indiceY = j + 1;

                            if(rango(indiceX,indiceY))//comprobamos que no salgamos del rango de la matriz.
                            {
                                if (tablero.casillas[indiceX][indiceY].getOcupada() == true && tablero.casillas[indiceX][indiceY].ficha.tipo == click_tipo) {
                                    contador++;
                                    //id_div = tablero.casillas[i][j].getId();
                                    //$("#"+id_div).css("background-color","white");
                                }
                            }

                            indiceX = i;
                            indiceY = j - 1;

                            if(rango(indiceX,indiceY))//comprobamos que no salgamos del rango de la matriz.
                            {
                                if (tablero.casillas[indiceX][indiceY].getOcupada() == true && tablero.casillas[indiceX][indiceY].ficha.tipo == click_tipo) {
                                    contador++;
                                    //id_div = tablero.casillas[i][j].getId();
                                    //$("#"+id_div).css("background-color","white");
                                }
                            }

                            indiceX = i + 1;
                            indiceY = j;

                            if(rango(indiceX,indiceY))//comprobamos que no salgamos del rango de la matriz.
                            {
                                if (tablero.casillas[indiceX][indiceY].getOcupada() == true && tablero.casillas[indiceX][indiceY].ficha.tipo == click_tipo) {
                                    contador++;
                                    //id_div = tablero.casillas[i][j].getId();
                                    //$("#"+id_div).css("background-color","white");
                                }
                            }

                            indiceX = i - 1;
                            indiceY = j;

                            if(rango(indiceX,indiceY))//comprobamos que no salgamos del rango de la matriz.
                            {
                                if (tablero.casillas[indiceX][indiceY].getOcupada() == true && tablero.casillas[indiceX][indiceY].ficha.tipo == click_tipo) {
                                    contador++;
                                    //id_div = tablero.casillas[i][j].getId();
                                    //$("#"+id_div).css("background-color","white");
                                }
                            }

                            indiceX = i - 1;
                            indiceY = j - 1;

                            if(rango(indiceX,indiceY))//comprobamos que no salgamos del rango de la matriz.
                            {
                                if (tablero.casillas[indiceX][indiceY].getOcupada() == true && tablero.casillas[indiceX][indiceY].ficha.tipo == click_tipo) {
                                    contador++;
                                    //id_div = tablero.casillas[i][j].getId();
                                    //$("#"+id_div).css("background-color","white");
                                }
                            }

                            indiceX = i - 1;
                            indiceY = j + 1;

                            if(rango(indiceX,indiceY))//comprobamos que no salgamos del rango de la matriz.
                            {
                                if (tablero.casillas[indiceX][indiceY].getOcupada() == true && tablero.casillas[indiceX][indiceY].ficha.tipo == click_tipo) {
                                    contador++;
                                    //id_div = tablero.casillas[i][j].getId();
                                    //$("#"+id_div).css("background-color","white");
                                }
                            }

                            indiceX = i + 1;
                            indiceY = j - 1;

                            if(rango(indiceX,indiceY))//comprobamos que no salgamos del rango de la matriz.
                            {
                                if (tablero.casillas[indiceX][indiceY].getOcupada() == true && tablero.casillas[indiceX][indiceY].ficha.tipo == click_tipo) {
                                    contador++;
                                    //id_div = tablero.casillas[i][j].getId();
                                    //$("#"+id_div).css("background-color","white");
                                }
                            }

                            indiceX = i + 1;
                            indiceY = j + 1;

                            if(rango(indiceX,indiceY))//comprobamos que no salgamos del rango de la matriz.
                            {
                                if (tablero.casillas[indiceX][indiceY].getOcupada() == true && tablero.casillas[indiceX][indiceY].ficha.tipo == click_tipo) {
                                    contador++;
                                    //id_div = tablero.casillas[i][j].getId();
                                    //$("#"+id_div).css("background-color","white");
                                }
                            }

                            if(contador > varia.N_VECINOS_FELICIDAD || contador == varia.N_VECINOS_FELICIDAD) //Solo se remarcará el div que tenga alrededor mas de 2 figuras del mismo tipo.
                            {
                                id_div = tablero.casillas[i][j].getId();
                                $("#"+id_div).attr("posible", "si");
                                $("#"+id_div).css("background-color","rgb(255,255,255)");
                                contador = 0;

                            }
                        }
                    }
                }
            }
        })
        .mouseup(function(){
                $(".casilla").css("background-color","#f7e1b5");
                $(".casilla").attr("posible", "no");
            })
    };
    //SETTERS//

    this.setId = function(){
        this.id = id;
    };
    this.setTipo = function(){
        this.tipo = tipo;
    };
    this.setFeliz = function(feliz){
        this.feliz = feliz;
    };

    //SETTERS//

    //GETTERS//

    this.getId = function(){
        return this.id;
    };

    this.getTipo = function(){
        return this.tipo;
    };

    this.getFeliz = function(){
        return this.tipo;
    };

    //GETTERS//
}
