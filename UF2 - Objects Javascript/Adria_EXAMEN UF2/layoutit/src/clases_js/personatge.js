/**
 * Created by adrianferialopez on 18/5/15.
 */
function personatge(nom, cognom, raça, nmagia, nfor, nintel,debug){

    this.nom = nom;
    this.cognom = cognom;
    this.raça = raça;
    this.nmagia = nmagia;
    this.nfor = nfor;
    this.nintel = nintel;
    this.debug = debug;
    this.natac;

    this.generador = function(nmagia, nfor, nintel, raça)
    {
        this.natac = (nfor*nintel)+nmagia;

        if(raça == "Arquer")
        {
            this.natac +=10;
        }else if(raça == "Caballer")
        {
            this.natac +=12;
        }else if(raça == "Guerrer Enano")
        {
            this.natac+=9;
        }

        //console.log("El nivell d'atac del personatge es de: " + this.natac);
        return parseInt(this.natac);
    }

    this.debug = function(debug)
    {
        if(debug)
        {
            console.log("### El joc de "+this.nom +" en mode debug ###");
            console.log("");
            console.log("Debug del personatge: " + this.nom);
            console.log("Raça del persontage: " + this.raça);

            console.log("Nivell de magia: " + this.nmagia);
            console.log("Nivell de força: " + this.nfor);
            console.log("Nivell de intel·ligencia: " + this.nintel);
            console.log("Nivell d'atac del personatge: " + this.natac);
            console.log("");


        }else{
            console.log("### El joc de "+ this.nom+" esta en mode NO debug ###");
            console.log("");
        }
    }

}