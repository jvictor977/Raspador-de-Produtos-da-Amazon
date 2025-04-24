# Raspador de Produtos da Amazon

Este projeto consiste em um backend em Bun que raspa dados de produtos da Amazon com base em uma palavra-chave e um frontend simples em HTML, CSS e JavaScript (com Vite) para interagir com o backend e exibir os resultados.

## Pré-requisitos

Certifique-se de ter o seguinte instalado em sua máquina:

* **Bun:** [https://bun.sh/](https://bun.sh/)
* **Node.js e npm (para o Vite do frontend):** [https://nodejs.org/](https://nodejs.org/) (Embora usemos Bun para o backend, o Vite pode depender de `npm` para algumas operações internas)

## Configuração e Execução

Siga estas etapas para executar o aplicativo:

### Backend

1.  **Navegue até o diretório do backend:**

    ```bash
    cd amazon-scraper-api
    ```

2.  **Instale as dependências (se ainda não o fez):**

    ```bash
    bun install
    ```

3.  **Execute o servidor backend:**

    ```bash
    bun run index.js
    ```

    O servidor backend estará rodando em `http://localhost:3000`.

### Frontend

1.  **Navegue até o diretório do frontend:**

    ```bash
    cd ../amazon-scraper-frontend
    ```

2.  **Instale as dependências (se ainda não o fez):**

    ```bash
    bun install
    ```

3.  **Execute o servidor de desenvolvimento do Vite:**

    ```bash
    bun run dev
    ```

    O frontend estará disponível em um endereço local fornecido pelo Vite (geralmente `http://localhost:5173`).

### Utilização

1.  Abra o endereço do frontend no seu navegador.
2.  Digite uma palavra-chave no campo de entrada.
3.  Clique no botão "Buscar".
4.  Os resultados da raspagem da Amazon para a palavra-chave fornecida serão exibidos na página.

## Observações

* A estrutura do HTML da Amazon pode mudar, o que pode quebrar os seletores CSS no backend. Se o raspador não estiver funcionando corretamente, pode ser necessário inspecionar a página da Amazon e atualizar os seletores.
* Este é um exemplo básico e pode não lidar com todos os cenários ou erros possíveis.
* Tenha em mente os termos de serviço da Amazon ao raspar dados do site. O uso excessivo ou indevido pode resultar no bloqueio do seu acesso.
* Adicionei um `User-Agent` na requisição do backend para simular um
