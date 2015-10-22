/**
 * Created by adrianferialopez on 18/5/15.
 */
function joc(nom,nperson)
{
    this.nom = nom;
    this.nperson = new Array(10);


    this.agefirPersonatge = function(pos, person)
    {
        //var random = Math.floor((Math.random() * 10) + 1);
        this.nperson[pos] = person;
    }
}