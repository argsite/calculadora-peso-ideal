function calcular() {
    
let nome = document.getElementById('nome').value
let rbMasc = document.getElementById('rbMasculino')
let rbFem = document.getElementById('rbFeminino')
let altura = document.getElementById('altura').value
altura = Number(altura)
let resposta = document.getElementById('output')
let masculino = rbMasc.checked
let feminino = rbFem.checked
    
    if (nome == '' || (masculino == false && feminino == false)) {
        alert('Por favor, preencha nome e escolha o sexo')
        document.getElementById('nome').focus()
        return
    }

    if (altura == 0 || altura == isNaN) {
        alert('Por favor, preencha a altura corretamente')
        altura.focus()
        return;
    }

    if (masculino) {
        var peso = 22 * Math.pow(altura, 2) //altura ao quadrado
    } else {
        var peso = 21 * Math.pow(altura, 2)
    }

    resposta.textContent = `Olá, ${nome}, seu peso ideal é ${peso.toFixed(2)}kg.`
}

function limpar(){
    document.getElementById('output').textContent = ''
    
    document.getElementById('nome').value = ''
    document.getElementById('rbMasculino'). checked = false
    document.getElementById('rbFeminino').checked = false
    document.getElementById('altura').value = ''
    document.getElementById('nome').focus()
    
}


let btnCalc = document.getElementById('btnCalcular')

btnCalc.addEventListener('click', calcular)

let btnLimpa = document.getElementById('btnLimpar')

btnLimpa.addEventListener('click', limpar)
