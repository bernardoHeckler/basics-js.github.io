"use strict";

//primeiro começo pegando os IDs do meu form

const numA = document.getElementById("numberA");
const numB = document.getElementById("numberB");
const submitButton = document.getElementById('submitButton');
const container = document.getElementById('container');
const operacao = document.getElementById('operacao');
const apagarButton = document.getElementById('apagarButton');

//nececessario pegar o ID do meu form, para adicionar um evento 
// que vai escutar(pegar todas as mensagens do usuario), 

document.getElementById('myform').addEventListener('submit', function (event) { // assim que ele clicar em enviar(submit), 
    event.preventDefault(); // ativa a função do event(evitar o padrão),

    // crio uma const do valor A e B definindo como inteiros;
    const valorA = parseFloat(numA.value) || 0; // var = expressao || 0
    const valorB = parseFloat(numB.value) || 0; // significa se é true or false
    let total; // var total

    if (operacao.value === '-') {
        total = valorA - valorB;  // SUBTRAÇÃO
    }
    else if (operacao.value === '+') {
        total = valorA + valorB;  // ADIÇÃO
    }
    else if (operacao.value === 'x') {
        total = valorA * valorB;  // MULTIPLICAÇÃO
    }
    else if (operacao.value === '/') {
        total = valorA / valorB;  // DIVISÃO
    }
    const print = `
        <p>Total: <strong>${total}</strong></p>
    `;
    // uso do `texto ${var} texto` para inserir o html utilizando .innerHTML;

    container.innerHTML = print; //#container esta no index.html

    container.style.display = 'block'; // mostra o container após o cálculo
});


// botão "Apagar" que vai escutar(pegar todas as mensagens do usuario), 
apagarButton.addEventListener('click', function () {
    numA.value = ''; // Limpa os campos de input
    numB.value = '';

    operacao.value = '+'; // Reseta a operação para o padrão (+)

    // Limpa o conteúdo do container e o oculta
    container.innerHTML = '';
    container.style.display = 'none';
});


