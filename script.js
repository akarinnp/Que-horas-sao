function carregar(){
    let img= document.getElementById('imagem')
    let msg = document.getElementById('msg')
    
    
    var data = new Date()
    let hora = data.getHours()
    
    
    
    if(hora == 1){
       img.src ="dia.png"
       document.body.style.backgroundColor = ' #fab75c'
       msg.innerHTML +=`Agora é ${hora} hora da manhã!`
       
   }
    else if(hora >= 0 && hora < 12){
        img.src ="dia.png"
        document.body.style.backgroundColor = ' #fab75c'
        msg.innerHTML +=`Agora são ${hora} horas da manhã!`
        
    }

    else if(hora >= 12 && hora < 18){
        img.src ="tarde.png"
        document.body.style.backgroundColor = ' #c85244'
        msg.innerHTML=`Agora são ${hora} horas da tarde!`
    }
    else{
        img.src = "noite.png"
        document.body.style.backgroundColor = ' #125a73'
        msg.innerHTML=`Agora são ${hora} horas da noite!`
    }



}




