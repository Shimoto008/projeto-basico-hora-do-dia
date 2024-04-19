function carregar(){
    
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    
    msg.innerHTML = `agora são ${hora} horas`
    if(hora >= 0 && hora <12){ 
        
        img.src = 'manha.jpg'
        document.body.style.background = '#DBC399'

    } else if(hora >= 12 && hora <= 18){

          img.src = 'tarde.jpg'
          document.body.style.background = '#BF7E78'
    }else{

         img.src = 'noite.jpg'
         document.body.style.background = '#1C3753'
    }
}