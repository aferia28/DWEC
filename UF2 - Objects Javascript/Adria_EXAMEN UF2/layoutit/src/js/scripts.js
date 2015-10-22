$(document).ready(function(){
var c=0;
    $("#datos").click(function(){
        $("#div_personatges").show('fast', function(){
            for(var i = 0; i<joc.nperson.length; i++)
            {
                if(joc.nperson[i]!=null) {
                    if(c>0)
                    {   $("#ordenats").show("fast");
                        $("#ordenats").append("<label>"+"Nom persontatge:  "+joc.nperson[i].nom+" : "+ joc.nperson[i].raça + " : "+ joc.nperson[i].natac +"</label><br>");
                    }else{
                    console.log("Personatge: " + joc.nperson[i].nom);
                    $("#div_personatges").append("<label>"+"Nom persontatge:  "+joc.nperson[i].nom+" : "+ joc.nperson[i].raça + " : "+ joc.nperson[i].natac +"</label><br>");
                    }
                }

            }
        })
        $(this).attr("disabled", "disabled");
    })

    $("#ordenar").click(function(){

        for(var i=0; i<joc.nperson.length; i++)
        {
            var aux;
            if(joc.nperson[i] != null && joc.nperson[i + 1] != null)
            {
                if(joc.nperson[i].natac < joc.nperson[i+1].natac)
                {
                    aux = i+1;
                    var aux2 = joc.nperson[i];
                    joc.nperson[i] = joc.nperson[aux];
                    joc.nperson[i+1] = aux2;
                    //aux = 0;
                }
            }
        }
        c++;
        $("#ordenar").attr("disabled", "disabled");
        $("#datos").removeAttr("disabled");
    })

    //$("#mostrar").click(function())


})