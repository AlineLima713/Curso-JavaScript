function load() {
  var msg = document.querySelector('div#msg')
  var img = document.querySelector('img#imagem')
  var date = new Date()
  var hour = date.getHours()
  var min = date.toLocaleString().substr(14, 2)
  msg.innerHTML = `Agora são ${hour} horas e ${min} minutos.`
  if (hour >= 0 && hour <= 12) {
    img.src = 'manha.png'
    document.body.style.background = '#947007'
  }
  else if (hour > 12 && hour <= 18) {
    img.src = 'tarde.png'
    document.body.style.background = '#e5690b'
  }
  else {
    img.src = 'noite.png'
    document.body.style.background = '#515154'
  }
}
setInterval(load,1000)