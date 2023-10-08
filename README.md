# Desafio Técnico - Frontend

## Author: Luis Henrique Geanini

Desafio técnico desenvolvido em React Js e Typescript.

### Considerações

-   Tive problemas em executar o `BACK` na porta `5000`, pois minha maquina estava utilizando a mesma porta, para fim de testes e configuração do do Docker subi na porta `3030`, porém no enterrável mantive a porta `5000`. Caso de erro na execução do docker por parte do `BACK` é necessária a alteração da porta nos seguintes locais:

    -   `BACK/index.js`

    -   `BACK/Dockerfile`

    -   `FRONT/.env`

    -   `FRONT/Dockerfile`

    -   `docker-compose.yml`

-   Acredito que um endpoint `PATCH` seria interessante de ser agregado ao teste, uma vez que para mudar a lista nao seria necessário enviar todo o objeto do card, somente o campo lista e o id do card;
-   Nos requisitos não ficou muito claro se deveria ser feito um controle de sessão e por via das duvidas segui como dizia o trecho "Deve ser feito o login antes de todas as chamadas".

### Arquitetura MVVM (Model-View-ViewModel)

A arquitetura MVVM aplicada ao React/Next torna muito claro o que e onde deve ser executada cada ação na aplicação. Fica basicamente distribuído da seguinte forma:

-   Model

A camada que faz a conexão e a ponte entre as APIs e aplicação. Seria o nível mais alto de um domínio (por exemplo, um arquivo de page, no caso do Next.js ou o arquivo de nível hierárquico mais alto numa aplicação React comum).

-   ViewModel

É a camada que lida e trata as informações obtidas na camada anterior. É onde montamos as regras de negócio.

-   View

É a camada "menos inteligente" da aplicação, onde tudo que foi carregado e tratado nas camadas anteriores é exibido.

```
- src
-- containers -> Camada ViewModel
-- contexts -> Camada de Controle do contexto e tratamento dos dados
-- components -> Camada View
--- example - Pasta de componente
---- Example.(j|t)sx -> Arquivo de definição de componente
---- Example.styles.(j|t)sx -> Arquivo de estilo do componente
--- ui -> Átomos da aplicação
-- hocs -> Wrapper do Provider do contexto
-- styles -> Configurações de estilos gerais
-- services -> Wrapper das apis
-- utils -> Helpers da aplicação

```

### Execução do projeto

-   Através do docker

```console
> docker-compose up
```

-   Manualmente

-   Passo 1 - Executar a aplicação BACK do projeto:

```console
> cd BACK
> npm install
> npm run server
```

Ele responderá às requisições em http://localhost:5000.

-   Passo 2 - Executar a aplicação FRONT do projeto:

```console
> cd FRONT
> npm install
> npm start
```

Ele responderá às requisições em http://localhost:3000.
