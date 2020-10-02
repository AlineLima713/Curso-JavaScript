let values = []
let res = document.querySelector('div#res')
let num = document.querySelector('input#number')

function adicionarNum() {
  let list = document.querySelector('select#lista')
  let num2 = Number(num.value)

  if (num2 < 1 || num2 > 100) {
    alert('Digite um número entre 1 e 100!')
  } else if (values.includes(num2)) {
    alert('Número já adicionado, adicione um número diferente!')
  } else {
    values.push(num2)

    let item = document.createElement('option')
    item.value = `${num2}`
    item.text = `Valor ${num2} adicionado.`
    list.appendChild(item)
    res.innerHTML = ""
  }
  num.value = ""
  num.focus()
}

document.addEventListener('keyup', function (e) {
  if (e.key == "Enter") {
    document.getElementById("btFechar").click();
  }
});

function informarDetalhesSobreNumeros() {

  if (values.length === 0) {
    alert('Inclua valores antes de finalizar!')
  } else {
    res.innerHTML = ""
    res.innerHTML += `Ao todo, temos ${values.length} números cadastrados.`
    let array = values.slice()
    array.sort((a, b) => a - b) //faz com que o array seja ordenado numericamente e de ordem crescente.
    res.innerHTML += `</br> O maior valor informado foi ${array[array.length - 1]}.`
    res.innerHTML += `</br> O menor valor informado foi ${array[0]}.`

    let sum = 0

    for (let p = 0; p < array.length; p++) {
      sum += array[p]
    } // ou: const sum = values.reduce((sum, value) => sum + value, 0)
    res.innerHTML += `</br> Somando todos os valores, temos ${sum}.`
    res.innerHTML += `</br> A média dos valores digitados é ${sum / array.length}.`
  }
  num.focus()
}
