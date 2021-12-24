function carregar(){
    var msg= document.querySelector("div.msg")
    var foto= window.document.querySelector("div.foto")
    var data=new Date()
    var horas=data.getHours()
    
    msg.innerHTML="agora são "+horas+" horas"
    if(horas>=0 && horas < 12){
        foto.style.background="url(imagens/pexels-ave-calvar-martinez-3030459.jpg)"
    }else if(hora>=12 && hora < 18){
        
    }
    else{

    }
}

