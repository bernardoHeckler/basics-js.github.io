const lista = document.getElementById('lista');
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []; // Carrega as tarefas do LocalStorage
// JSON.parse() recuperar dados do LocalStorage pegando o item dentro da tarefas []
// || [] garante que, se não houver nada salvo, um array vazio seja retornado.

// Função para carregar as tarefas na lista
function carregarTarefas() {
    lista.innerHTML = ''; // Limpando a lista
    tarefas.forEach((tarefa, index) => { // para cada tarefa e index que estiver dentro das tarefas
        const novoItem = document.createElement('li'); // criar uma nova lista
        novoItem.classList.add('corLi'); // classe .corLi
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
        lista.appendChild(novoItem); // Adiciona o novoItem na ul#lista
    });
}
// fecho a função carregarTarefas()

// crio um evento que a ID=myform e espera ação de submit, então aqui estamos enviando todos os dados pra serem armazenados
document.getElementById('myform').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário

    const tarefa = document.getElementById('tarefa').value.trim();

    // Verifica se o campo não está vazio (&&) e se o número de tarefas é menor que 8
    if (tarefa !== "" && tarefas.length < 8) {
        tarefas.push(tarefa); // push = empurra a tarefa para dentro do array tarefas []
        localStorage.setItem('tarefas', JSON.stringify(tarefas)); // setItem para pegar variavel, armazenar, e JSON se torna uma string
        carregarTarefas(); // Recarrega a lista de tarefas
        document.getElementById('tarefa').value = ''; // Limpa o campo de entrada
    } else if (tarefas.length >= 8) {
        alert("Você atingiu o limite máximo de 8 tarefas!");
    }
});

// Função para remover uma tarefa
lista.addEventListener('click', function (event) {
    if (event.target.classList.contains('apagarTarefa')) {
        const index = event.target.getAttribute('data-index'); // Obtém o índice da tarefa
        tarefas.splice(index, 1); // Remove apenas 1 tarefa do array tarefas []
        localStorage.setItem('tarefas', JSON.stringify(tarefas)); // setItem para pegar variavel, armazenar, e JSON se torna uma string
        carregarTarefas(); // Recarrega a lista de tarefas
    }
});

// Função para editar uma tarefa
lista.addEventListener('click', function (event) {
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
        salvarBtn.className = 'corBtn';  // classe button.corBtn
        salvarBtn.textContent = 'Salvar';
        salvarBtn.type = 'button';

        // Adiciona o botão de salvar ao lado do input
        li.querySelector('.containerBtnsTarefa').prepend(salvarBtn); // Insere o elemento salvarBtn como o primeiro filho de .containerBtnsTarefa.

        // Foca no input automaticamente para o usuário preencher o campo
        input.focus();

        // Adiciona um evento para salvar a edição
        salvarBtn.addEventListener('click', function () {
            const novaTarefa = input.value.trim(); // Obtém o valor do input

            // Verifica se a nova tarefa não está vazia
            if (novaTarefa !== '') {
                tarefas[index] = novaTarefa; // Atualiza a tarefa no array
                localStorage.setItem('tarefas', JSON.stringify(tarefas)); // setItem para pegar variavel, armazenar, e JSON se torna uma string
                carregarTarefas(); // Recarrega a lista de tarefas
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

// Carrega as tarefas ao iniciar a página
carregarTarefas();