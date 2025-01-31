- Resumo do Funcionamento

1. Carregamento inicial: As tarefas salvas no LocalStorage são exibidas.
2. Adicionar tarefas: O usuário pode inserir até 8 tarefas, que serão salvas no LocalStorage.
3. Remover tarefas: Um botão permite excluir qualquer tarefa da lista.
4. Editar tarefas: Um campo de edição permite modificar o texto das tarefas e salvar as alterações.
5. Persistência de dados: Tudo é armazenado no LocalStorage, garantindo que os dados não sejam perdidos ao fechar o navegador.


- Texto JavaScript Digitalizado

O código começa selecionando o elemento "<tag>" HTML com o "ID=lista" e inicializa a variável "tarefas = []" com os dados armazenados no "/LocalStorage" ou um array vazio, caso não haja dados salvos. A função "function carregarTarefas()" é responsável por limpar a "ID=lista" e recriar os itens com base no array "tarefas = []". Para cada tarefa, um novo elemento "<tag>" HTML "<li>" é criado, contendo a descrição da tarefa e dois botões: "Apagar" e "Editar". Esses botões possuem atributos data-index que armazenam o índice da tarefa no array.

O formulário com o "ID=myform" tem um evento de submit que impede o envio padrão do formulário. Ele verifica se o campo de entrada não está vazio e se o número de "tarefas = []" é menor que 8. Se ambas as condições forem atendidas, a nova tarefa é adicionada ao array "tarefas = []", o "/LocalStorage" é atualizado, a "ID=lista" de "tarefas = []" é recarregada e o campo de entrada é limpo. Caso o número de "tarefas = []" seja igual ou maior que 8, uma mensagem de alerta é exibida.

A "ID=lista" de "tarefas = []" também possui eventos de clique para os botões "Apagar" e "Editar". Quando o botão "Apagar" é clicado, o índice da tarefa é obtido através do atributo data-index, a tarefa é removida do array "tarefas = []", o "/LocalStorage" é atualizado e a "ID=lista" de "tarefas = []" é recarregada. Já o botão "Editar" substitui o texto da tarefa por um campo de entrada "<input>" e adiciona um botão "Salvar". Quando o botão "Salvar" é clicado ou a tecla "Enter" é pressionada, a tarefa é atualizada no array "tarefas = []", o "/LocalStorage" é atualizado e a "ID=lista" de "tarefas = []" é recarregada.


Por fim, a função "function carregarTarefas()" é chamada ao carregar a página para exibir as "tarefas = []" salvas no "/LocalStorage".