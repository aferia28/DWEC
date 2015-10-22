function variables() {

    var N_VECINOS_FELICIDAD= 0;
    var FICHAS_ROJAS= 0;
    var FICHAS_VERDES= 0;

    this.setVecinos = function(nvecinos){
        this.N_VECINOS_FELICIDAD=nvecinos;
    }

    this.setFichasRojas = function(fichasrojas){
        this.FICHAS_ROJAS=fichasrojas;
    }

    this.setFichasVerdes = function(fichasverdes){
        this.FICHAS_VERDES=fichasverdes;
    }
}
