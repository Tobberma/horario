function carregar() {
  var msg = document.getElementById("msg")
  var foto = document.getElementById("imagem")
  
  var data = new Date()
  var hora = data.getHours()
  var minuto = data.getMinutes()
  msg.innerHTML = `agora são ${hora} horas e ${minuto} minutos.`
  
  var title = document.getElementById("titulo")
  
  if (hora >= 5 && hora < 12) {
    foto.src = 'imagem/manha.png'
    title.innerHTML = "Bom dia!"
    document.body.style.background = "lightyellow"
  } else if (hora >= 12 && hora <= 18) {
    foto.src = 'imagem/tarde.png'
    title.innerHTML = "Boa tarde!"
    document.body.style.background = "salmon"
  } else {
    foto.src = 'imagem/noite.png'
    title.innerHTML = "Boa noite!"
    document.body.style.background = "darkgrey"
  }
}