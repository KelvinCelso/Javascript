function verificar(){
    var data=new Date
    var ano =data.getFullYear()
    var fano =document.getElementById("txtano")
    var res =document.querySelector("#res")
    if(fano.value.lengh==0 ||fano.value > ano){
        alert("verifique os dados e tente novamente")
    }else{
        var fsex=document.getElementsByName("radsex")
        var idade= ano - Number(fano.value)
        var genero=""
        if(fsex[0].checked){
            genero="homem"
        }else{
            genero="mulher"
        }
        res.innerHTML="detetamos "+ genero+" com "+idade+" anos"
    }

}