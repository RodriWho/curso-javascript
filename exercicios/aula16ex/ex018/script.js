let vetor = [] // Criar vetor vazio
let soma = 0

function adicionar() {
    let numero = document.getElementById('txtN')
    let tab = document.getElementById('txtS')
    let baixo = document.getElementById('baixo')
    n = Number(numero.value)

    let pos = vetor.indexOf(n) // Buscar valor n no vetor

    if (n == '') { // Verificar se caixa esta vazia ao clicar em Adicionar
        alert(`Digite um valor na caixa`)
    } else {
        if (n < 0 || n > 100) { // Verificar se valor digitado esta nos parametros 0 e 100
            alert(`O valor ${n} é Invalido`)
        } else {
            if (pos == -1) { // Verificar se valor ja registrado
                vetor.push(n)
                let item = document.createElement('option')
                item.text = `Valor ${n} Adicionado`
                tab.appendChild(item)
            } else {
                alert(`O valor ${n} já existe no registro`)
            }
        }
    }

}

function finalizar() {
    vetor.sort()
    somar()
    baixo.innerHTML = `${vetor} <br>`
    baixo.innerHTML += `Total Cadastrados: ${vetor.length} <br>`
    baixo.innerHTML += `Maior valor cadastrado ${vetor[vetor.length -1]} <br>`
    baixo.innerHTML += `Menor valor cadastrado ${vetor[0]} <br>`
    baixo.innerHTML += `A soma dos valores é ${soma} <br>`
    baixo.innerHTML += `A média total é ${soma / vetor.length}`

}

function somar() {
    for(let c = 0 ; c < vetor.length ; c++) {
        soma += vetor[c]
    }
}