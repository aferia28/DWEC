/**
 * Created by adrianferialopez on 16/4/15.
 */
function Casilla(id, x, y, ocupada, ficha){

    this.id = id;
    this.x = x;
    this.y = y;
    this.ocupada = ocupada;
    this.ficha = ficha;

    this.setOcupada = function(ocupada){
        this.ocupada = ocupada;
    }

    this.setFicha = function(ficha)
    {
        this.ficha = ficha;
    }

    this.getFicha = function(){
        return this.ficha;
    }

    this.setId = function(id){
        this.id = id;
    }

    this.setX = function(x){
        this.x = x;
    }

    this.setY = function(y){
        this.y = y;
    }

    this.getX = function(){
        return this.x;
    }

    this.getY = function(){
        return this.Y;
    }

    this.getId = function(){
        return this.id;
    }

    this.getOcupada = function()
    {
        return this.ocupada;
    }
}
