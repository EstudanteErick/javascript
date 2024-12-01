let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = [];

function isnumero(n) {
  // Verifica se é um número e se está dentro do intervalo
  return !isNaN(n) && Number(n) >= 0 && Number(n) <= 100;
}

function inlista(n, lista) {
  // Verifica se o número já existe na lista
  return lista.indexOf(Number(n)) !== -1;
}

function adicionar() {
  res.innerHTML = ''; // Limpar a div de resultados

  if (isnumero(num.value) && !inlista(num.value, valores)) {
    valores.push(Number(num.value));

    let item = document.createElement('option');
    item.text = `Valor ${num.value} adicionado`;
    lista.appendChild(item);
  } else {
    window.alert('Valor inválido ou já encontrado na lista');
  }

  num.value = '';
  num.focus();
}

function finalizar() {
  if (valores.length === 0) {
    window.alert("Adicione valores antes!");
  } else {
    let tot = valores.length;

    let maior = valores[0]
    let menor = valores[0]

    let soma = 0
    let media = 0

    for (let pos in valores) {
        soma += valores[pos]

        if (valores[pos] > maior)
            maior = valores [pos]

        if (valores[pos] < menor) {
            menor = valores [pos]
        }
    }

    media = soma / tot

    res.innerHTML = `<p>Ao todo, temos ${tot} números cadastrados</p>`
    
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`

    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
  }
}

    

    
