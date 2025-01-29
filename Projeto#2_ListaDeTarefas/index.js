// const submitButton = document.getElementById('submitButton');
// const lista = document.getElementById('lista');

// document.getElementById('myform').addEventListener(
// 'submit', function (event) {
//     event.preventDefault();
//     const tarefa = document.getElementById('tarefa').value;
//     const print = `
//     <li>Tarefa a Fazer: <strong>${tarefa}</strong></li>
//     `;
//     lista.innerHTML = print;

// }
// )


// se eu tenho uma tarefa preenchida ela esta no id=tarefa
// entao quando o usuario clica no botao adicionar
// ele manda so uma tarefa
// entao a id=tarefa deve virar uma "lista" que vou chamar de tarefas = [[..][..][..][..]]
// envio a tarefa para dentro da lista tarefas
// inserir no campo de html
// ele sera armazenado em um banco de dados

const lista = document.getElementById('lista');
const tarefas = []; // Uma lista de Arrays para armazenar as tarefas (plural)

document.getElementById('myform').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário

    const tarefa = document.getElementById('tarefa').value; // Obtém o valor do campo de entrada

    // Verifica se o campo não está vazio e se o número de tarefas é menor que 8
    if (tarefa !== "" && tarefas.length < 8) {
        // Adiciona a tarefa ao array tarefas
        tarefas.push(tarefa);

        // Limpa a lista e recria os itens com base no array
        lista.innerHTML = ''; // Limpa a lista

        // Para cada tarefa, cria um novo item na lista
        tarefas.forEach(function (tarefa, index) {
            const novoItem = document.createElement('li');
            novoItem.classList.add('corLi');
            novoItem.innerHTML = `
                <div class="contentLista">
                    <p>
                        Tarefa a Fazer: 
                        <strong style="white-space: pre-wrap;">${tarefa}</strong>
                    </p>
                    <div class="containerBtnsTarefa">
                        <button type="button" class="apagarTarefa" data-index="${index}">Apagar</button>
                        <button type="button" class="editarTarefa" data-index="${index}">Editar</button>
                    </div>
                </div>
            `;
            lista.appendChild(novoItem); // Adiciona o novo item à lista
        });

        // Limpa o campo de entrada após adicionar a tarefa
        document.getElementById('tarefa').value = '';
    } else if (tarefas.length >= 8) {
        alert("Você atingiu o limite máximo de 8 tarefas!");
    }
});

lista.addEventListener('click', function (event) {
    // Verifica se o clique foi no botão "Apagar"
    if (event.target.classList.contains('apagarTarefa')) {
        const index = event.target.getAttribute('data-index'); // Obtém o índice da tarefa
        tarefas.splice(index, 1); // Remove a tarefa do array
        event.target.closest('li').remove(); // Remove o <li> inteiro ao clicar em "Apagar"
    }
});

lista.addEventListener('click', function (event) {
    // Verifica se o clique foi no botão "Editar"
    if (event.target.classList.contains('editarTarefa')) {
        const index = event.target.getAttribute('data-index');
        const li = event.target.closest('li'); // Encontra o <li> mais próximo

        // Inserindo um input para editar a tarefa
        const input = document.createElement('input');
        input.type = 'text';
        input.value = tarefas[index]; // Preenche o input com o valor atual da tarefa

        // Substitui o texto da tarefa pelo input
        const strong = li.querySelector('strong');
        strong.replaceWith(input); // Substitui o <strong> pelo <input>

        // Cria um botão para salvar a edição
        const salvarBtn = document.createElement('button');
        salvarBtn.className = 'corBtn';
        salvarBtn.textContent = 'Salvar';
        salvarBtn.type = 'button';

        // Adiciona o botão de salvar ao lado do input
        li.querySelector('.containerBtnsTarefa').prepend(salvarBtn); // Adiciona o botão "Salvar" dentro da div.containerBtnsTarefa

        // Foca no input automaticamente
        input.focus();

        // Adiciona um evento para salvar a edição
        salvarBtn.addEventListener('click', function () {
            const novaTarefa = input.value.trim(); // Obtém o valor do input; trim() remove espaços em branco

            // Verifica se a nova tarefa não está vazia
            if (novaTarefa !== '') {
                tarefas[index] = novaTarefa; // Atualiza a tarefa no array
                li.innerHTML = `
                    <div class="contentLista">
                        <p>
                            Tarefa a Fazer: 
                            <strong style="white-space: pre-wrap;">${novaTarefa}</strong>
                        </p>
                        <div class="containerBtnsTarefa">
                            <button type="button" class="apagarTarefa" data-index="${index}">Apagar</button>
                            <button type="button" class="editarTarefa" data-index="${index}">Editar</button>
                        </div>
                    </div>
                `; // Atualiza o conteúdo da <li>
            }
        });

        // Adiciona um evento para salvar ao pressionar "Enter"
        input.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                salvarBtn.click(); // Simula o clique no botão "Salvar"
            }
        });
    }
});