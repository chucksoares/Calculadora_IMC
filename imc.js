var calcular = document.getElementById('calcular');

function imc() {
    var nome = document.getElementById('nome').value;
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;
    var resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        var valorIMC = (peso / (altura * altura)).toFixed(3);
        resultado.textContent = valorIMC;

        var classificacao = '';

        if (valorIMC < 18.500) {
            classificacao = 'abaixo do peso.';

        }
        else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!'
        }
        else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso. Cuidado!'
        }
        else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I. Cuidado!'
        }
        else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II. Cuidado!!'
        }
        else {
            classificacao = 'com obesidade grau III. Cuidado!!!'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
    }
    else {
        resultado.textContent = 'Preencha todos os campos!'
    }

}
calcular.addEventListener('click', imc);