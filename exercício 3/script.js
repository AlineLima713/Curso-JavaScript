function contar() {
  var start = document.querySelector('input#start').value
  var end = document.querySelector('input#end').value
  var step = document.querySelector('input#step').value
  var res = document.querySelector('div#res')
  
  if (start.length === 0 || end.length === 0 || step.length === 0) {
    alert('Um ou mais campos não preenchidos!')
    return;
  }

  var s = Number(start)
  var e = Number(end)
  var st = Number(step)

  if (s === e) {
    alert('Valor inicial e final não podem ser iguais!')
    return;
  }
  if (st <= 0) {
    alert('"Passo" tem que ser maior que zero!')
    return;
  }

  res.innerHTML = 'Resultado: <br/>'

  if (s < e) {
    for(var c = s; c <= e; c += st) {
      res.innerHTML += ` ${c} \u{1F449}`
    }
  } else {
    for(var c = s; c >= e; c -= st) {
      res.innerHTML += ` ${c} \u{1F449}`
    }
  }
  res.innerHTML += '\u{1F3C1}'
}