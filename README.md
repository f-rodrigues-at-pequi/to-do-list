Páginas Dinâmicas JavaScript ALURA<a name="TOP"></a>
===================
- - - - 

### Aula 1 ###    

| Aprendizado                                                                                                                                                      | Novidade? | Aprendi? |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|----------|
| Inserir diferentes elementos na página, como imagens, formulários, botões e listas, para construir uma interface de usuário.                                     | Sim       | Sim      |
| Aplicar estilos aos elementos HTML usando CSS, definindo cores, layouts, espaçamentos e fontes para tornar a interface visualmente atraente.                     | Não       | Sim      |
| Criar um checkbox personalizado usando HTML e CSS para que ele se pareça com o design fornecido no Figma.                                                        | Sim       | Revisar      |
| Usar variáveis CSS para manter a consistência das cores e como usar Flexbox para organizar elementos na página de forma responsiva.                              | Sim       | Revisar Flexbox      |

## Insights
    - .ListaCompras {
      text-align: left;
  }
  
  Esta abordagem garante que tanto o título quanto os itens da lista estejam alinhados à esquerda de forma consistente, respeitando a estrutura do design proposto e evitando conflitos de herança de estilos.
  
  Aplicar o CSS em elementos pai é útil para se aplicar em elementos filhos sem a repetição da escrita de código.
  
- - - -

### Aula 2 ###    

| Aprendizado                                                                                                                                                                        | Novidade? | Aprendi? |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|----------|
| Inserir JavaScript em um projeto através da criação de um arquivo `script.js` e utilizando a tag `<script>` para associá-lo ao HTML.                                              | Sim       | Sim      |
| Detectar cliques em botões usando o método `addEventListener` e executar funções específicas quando esses eventos ocorrem.                                                         | Não       | Sim      |
| Criar elementos HTML dinamicamente com JavaScript, incluindo listas, botões de exclusão e checkboxes.                                                                              | Não       | Revisar      |
| Manipular o DOM, que permite interagir com a estrutura do documento HTML para adicionar, modificar ou remover elementos.                                                           | Sim       | Sim      |
| Atribuir identificadores únicos a elementos criados dinamicamente para garantir sua manipulação individual.                                                                       | Sim       | Sim      |


## Insights
  - Utilizando const checkbox = document.createElement("input") seguido de checkbox.type = "checkbox" para criar o checkbox e document.createElement('button') para o botão de edição, e depois anexando esses elementos à lista de tarefas com appendChild().


Esta é a abordagem correta, pois utiliza a manipulação do DOM para criar novos elementos (checkbox e botão) e os anexa à lista de tarefas, permitindo interatividade com o usuário.

- - - -

### Aula 3 ###    

| Aprendizado                                                                                                                         | Novidade? | Aprendi? |
|-------------------------------------------------------------------------------------------------------------------------------------|-----------|----------|
| Adicionar ouvintes de eventos a elementos do DOM para executar ações quando ocorrem cliques.                                       | Não       | Sim      |
| Buscar e manipular elementos do DOM, como adicionar ou remover classes e alterar estilos.                                          | Sim       | Sim      |
| Criar elementos HTML dinamicamente e adicionar ao DOM, como a lista de itens comprados.                                            | Sim       | Sim      |
| Obter a data e hora atuais e formatá-las de acordo com as preferências locais do usuário.                                          | Sim       | Revisar      |
| Melhorar a interatividade e a experiência do usuário em aplicações web.                                                            | Sim       | Sim      |


## Insights
  - `if (checkbox.checked) {
      item.classList.add('comprado');
    } else {
      item.classList.remove('comprado');
    }`
    
    Este código verifica corretamente se o checkbox está marcado usando checkbox.checked. Se estiver marcado, adiciona a classe 'comprado' ao item, aplicando o estilo desejado. Se não estiver, remove a classe, retornando o item ao seu estado original.

- - - -

### Aula 4 ###    

| Aprendizado                                                                                                                                                | Novidade? | Aprendi? |
|------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|----------|
| Dividir o código JavaScript em arquivos separados para melhorar a organização e a manutenção.                                                              | Sim       | Sim      |
| Utilizar as palavras-chave `export` e `import` do ES6 para modularizar o código e facilitar a reutilização de funções.                                     | Sim       | Sim      |
| Incluir mensagens de feedback visual para melhorar significativamente a experiência do usuário, especialmente em situações de listas vazias.               | Sim       | Sim      |
| Criar uma função para verificar dinamicamente se uma lista está vazia e exibir uma mensagem apropriada.                                                    | Sim       | Sim      |

## Insights
  - Usar if(lista.length === 0) para verificar se a lista está vazia e sempre incluir a extensão .js ao importar arquivos.


Esta abordagem é eficaz porque a verificação lista.length === 0 é uma maneira direta de verificar se uma lista está vazia. Além disso, incluir a extensão .js ao importar arquivos garante que o navegador ou o ambiente de execução encontre e carregue o arquivo JavaScript corretamente, conforme mencionado no curso.

- - - -

### Aula 5 ###    

| Aprendizado                                                                                                                                                             | Novidade? | Aprendi? |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|----------|
| Prevenir a adição de itens vazios na lista de compras, melhorando a usabilidade e a integridade dos dados.                                                              | Não       | Sim      |
| Implementar uma função segura para excluir itens da lista de compras, incluindo uma confirmação do usuário.                                                             | Não       | Sim      |
| Implementar arrow functions e compreender como as arrow functions funcionam em JavaScript, especialmente em relação ao comportamento do `this`.                        | Sim       | Revisar      |
| Permitir que os usuários editem os nomes dos itens em suas listas de compras, mantendo a marcação de comprado e atualizando a data de criação.                          | Não       | Sim      |
| Adicionar ouvintes de eventos a botões para acionar funções específicas, como excluir ou editar itens, proporcionando uma interação intuitiva.                         | Sim       | Sim      |


## Insights
  - Utilizar uma função que, ao editar o nome do item, também captura a data e hora atual com `new Date()` e a insere abaixo do nome do item na lista.


Esta solução atende ao desafio proposto, pois além de editar o nome do item, também atualiza a data de edição, refletindo o momento atual.
