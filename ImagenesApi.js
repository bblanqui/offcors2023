axios({
    method: 'get',
    url: 'https://api.unsplash.com/photos/?client_id=drV11CRckosZ2J_AOcKSSGnY8MgG2ossZAgjY-m6re0',

    }
  )
    .then(function (response) {
        primera = document.querySelector(".uno")
        primera.style.backgroundImage= "url("+response['data'][0]['urls']['raw'] +")";
        segunda = document.querySelector(".dos")
        segunda.style.backgroundImage= "url("+response['data'][1]['urls']['raw'] +")";
        tres = document.querySelector(".tres")
        tres.style.backgroundImage= "url("+response['data'][2]['urls']['raw'] +")";



        cuatro = document.querySelector(".cuatro")
        cuatro.style.backgroundImage= "url("+response['data'][3]['urls']['raw'] +")";
        cinco = document.querySelector(".cinco")
        cinco.style.backgroundImage= "url("+response['data'][4]['urls']['raw'] +")";
        seis = document.getElementById("seis")
        seis.style.backgroundImage= "url("+response['data'][5]['urls']['raw'] +")";
        siete = document.getElementById("siete")
        siete.style.backgroundImage= "url("+response['data'][6]['urls']['raw'] +")";
        
        ocho = document.getElementById("ocho")
        ocho.style.backgroundImage= "url("+response['data'][7]['urls']['raw'] +")";
      
        nueve = document.getElementById("nueve")
        nueve.style.backgroundImage= "url("+response['data'][8]['urls']['raw'] +")";

        diez = document.querySelector(".diez");
        diez.src =  response['data'][5]['urls']['raw']   
        
        once = document.querySelector(".once");
        once.src =  response['data'][3]['urls']['raw']   
        doce = document.querySelector(".doce");
        doce.src =  response['data'][8]['urls']['raw']   
        trece = document.querySelector(".trece");
        trece.src =  response['data'][5]['urls']['raw'] 
        catorce = document.querySelector(".catorce");
        catorce.src =  response['data'][2]['urls']['raw'] 


        id_diez = document.querySelector("#diez");
        id_diez.src =  response['data'][5]['urls']['raw']   

        id_once = document.querySelector("#once");
        id_once.src =  response['data'][3]['urls']['raw']   
 

        id_doce = document.querySelector("#doce");
        id_doce.src =  response['data'][8]['urls']['raw'] 

        id_trece = document.querySelector("#trece");
        id_trece.src =  response['data'][5]['urls']['raw'] 

        
        id_catorce = document.querySelector("#catorce");
        id_catorce.src =  response['data'][2]['urls']['raw'] 

    

        quince = document.querySelector("#quince")
        quince.style.backgroundImage= "url("+response['data'][0]['urls']['raw'] +")";

        
        diesiceis = document.querySelector("#diesies")
        diesiceis.style.backgroundImage= "url("+response['data'][6]['urls']['raw'] +")";

        diesiete = document.querySelector("#diesiete")
        diesiete.style.backgroundImage= "url("+response['data'][9]['urls']['raw'] +")";

        veinte = document.querySelector("#veinte")
        veinte.style.backgroundImage= "url("+response['data'][7]['urls']['raw'] +")";

        veinti_uno = document.querySelector("#veinti_uno")
        veinti_uno.style.backgroundImage= "url("+response['data'][3]['urls']['raw'] +")";

    });
 
