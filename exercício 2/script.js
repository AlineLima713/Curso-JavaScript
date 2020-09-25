function verificar() {
  var date = new Date()
  var year = date.getFullYear()
  var fano = document.querySelector('input#txtano')
  var res = document.querySelector('div#res')
  var sex = document.getElementsByName('radsex')
  var idade = year - fano.value
  var genero = ''
  var img = document.createElement('img')
  img.setAttribute('id', 'foto')

  if (fano.value.length == 0 || fano.value > year) {
    alert('Verifique os dados e tente novamente!')
  } else {
    if (sex[0].checked) {
      genero = 'Masculino'
      if (idade >= 0 && idade <= 10) {
        img.setAttribute('src', 'criança-m.png')
      } else if (idade <= 21) {
        img.setAttribute('src', 'jovem-m.png')
      } else if (idade <= 59) {
        img.setAttribute('src', 'adulto-m.png')
      } else {
        img.setAttribute('src', 'idoso-m.png')
      }
    }
    else {
      genero = 'Feminino'
      if (idade >= 0 && idade <= 10) {
        img.setAttribute('src', 'criança-f.png')
      } else if (idade <= 21) {
        img.setAttribute('src', 'jovem-f.png')
      } else if (idade <= 59) {
        img.setAttribute('src', 'adulto-f.png')
      } else {
        img.setAttribute('src', 'idoso-f.png')
      }
    }
  }
  img.style.display = 'flex'
  img.style.margin = 'auto'
  res.style.textAlign = 'center'
  res.innerHTML = `${genero}: ${idade} anos.`
  res.appendChild(img)
}