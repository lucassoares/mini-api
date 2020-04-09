## MINI API AULA NODEJS

Nesta API utilizamos express e nodemon

Para rodar a API 

Com Nodemon (Reinicia a API automaticamente quando alteramos algo de algum arquivo)

Para instalar todas as dependencias do projeto execute:

```
npm install
```

```
npm run dev
```

Com node

```
npm start
```

Comandos mencionados durante a aula

npm -v verifica versão do npm

node -v verifica versão do node

npm start -> padrão
npm test ou npm t -> padrão
npm run dev -> customizado
npm run prog -> customizado

Todos os customizados precisas do *run*

## Tipos de declaração de variaveis: 
var email = 'laskalks' - pior

let email = 'akslaksl' - melhor que var

email = '92832983239'

const = express mais performatico, nao deixa alterar valor durante execução;

## ARQUITETURA

- FRONT VS BACK
- SERVIDOR E CLIENTE
- COMUNICAÇÃO HTTP

## API - BACK-END

- JSON
- VERBOS HTTP ou METODOS HTTP
- STATUS CODE
- TEMPLATE STRING, DESESTRUTURAÇÃO JSON
- POSTMAN OU INSOMNIA
- VSCode - plugins

## TODO

1 - RESGATAR VALORES QUE FICAM NA URL
2 - RESGATAR VALORES QUE FICAM EM QUERY
3 - Implementar novos endpoints com funcionalidades legais

//URL -> users/arroz/laranja/sorvete
//QUERY -> /users/?suco=laranja&sombremesa=sorvete

//BODY -> corpo /users = JSON {"prato": "carne", "sobremesa": "sorvete", "suco":"laranja", "cafezinho": "expresso"}

//BODY -> corpo /users = JSON {"email": "lucas.soares@email.com", "pass": "12345"}


## Tipos de comparação no JS
//= = 1 == '1' // validacao com valor

// = = = 1 '1' // validacao com valor e tipo
