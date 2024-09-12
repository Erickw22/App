## Aplicação de Gerenciamento de Metas

**Descrição:**

Este é um aplicativo de linha de comando simples, desenvolvido em JavaScript, para auxiliar na gestão de metas pessoais ou profissionais. Ele permite ao usuário criar, visualizar, marcar como concluídas e excluir metas, armazenando as informações em um arquivo JSON.

**Compreendendo o Código**
O código JavaScript fornecido implementa um aplicativo de linha de comando simples para gerenciar uma lista de metas. Ele utiliza a biblioteca @inquirer/prompts para criar interfaces interativas no terminal e o módulo fs do Node.js para ler e escrever dados em um arquivo JSON.

**Funcionalidades Principais:**

> Cadastro de Metas: Permite ao usuário adicionar novas metas à lista.
> Listagem de Metas: Exibe todas as metas cadastradas, permitindo marcar as concluídas.
> Consulta de Metas: Permite filtrar e visualizar metas realizadas ou abertas.
> Deleção de Metas: Permite remover metas da lista.
> Persistência: Salva as metas em um arquivo JSON para manter as informações entre as execuções do aplicativo.

**Tecnologias Utilizadas:**

* **Node.js:** Plataforma para execução do JavaScript fora do navegador.
* **@inquirer/prompts:** Biblioteca para criar interfaces de linha de comando interativas.
* **fs:** Módulo do Node.js para interagir com o sistema de arquivos.

**Instalação:**

1. **Clone este repositório:**
   ```bash
   git clone https://seu-repositorio.git
   cd seu-repositorio
   
2. **Instale as dependências:**
   ```bash
   npm install
   node index.js

3. **Execução:**
 ```bash
    node index.js
````

**Funcionalidades:**
> Cadastro de metas: Adicione novas metas à sua lista.
> Listagem de metas: Visualize todas as suas metas e marque as concluídas.
> Consulta de metas: Filtre e visualize metas realizadas ou abertas.
> Deleção de metas: Remova metas que não são mais relevantes.

**Como usar:**
Ao iniciar o aplicativo, você será apresentado a um menu com as opções disponíveis. Utilize as setas para navegar entre as opções e pressione Enter para selecionar.

**Estrutura do Arquivo JSON:**
O arquivo metas.json armazena as metas em um formato JSON. Cada meta é representada por um objeto com os seguintes campos:

> value: A descrição da meta.
> checked: Um booleano indicando se a meta foi concluída.

Licença:




