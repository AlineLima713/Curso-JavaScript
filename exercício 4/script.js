function gerarTabuada() {
  let num = document.querySelector('input#number').value
  let tab = document.querySelector('select#tabuada')

  if(num === "") {
    alert('Por favor, digite um número!')
    return
  }

  tab.innerHTML = ""

  let item = document.createElement('option')
  item.value = ""
  item.text = `Tabuada de ${num}`
  tab.appendChild(item)

  let c = 1
  for(let n = Number(num); c <= 10; c++) {
    item = document.createElement('option')
    item.value = `tab${c}`
    item.text = `${n} x ${c} = ${n*c}`
    tab.appendChild(item)
  }
}