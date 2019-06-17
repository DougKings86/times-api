# times-api
Projeto utilizando node para exposição de Api para Consultas dos Times E Rodadas do Campeonato Brasileiro.
O projeto irá utilizar a arquitetura [REST](https://pt.wikipedia.org/wiki/REST) , e o retorno será no formato [JSON](https://pt.wikipedia.org/wiki/JSON).
Nesse Contexto será utilizado somento o verbo GET.

## Instalação
1. Criar uma pasta que irá conter a aplicação : `mkdir apiCampeonato`
2. Realizar o clone da aplicação : `git clone https://github.com/DougKings86/times-api.git`
3. Copiar o o conteúdo recém criado para a pasta .
4. Entre na Pasta `cd apiCampeonato`
5. Instalar as Dependências: `npm install`
6. Iniciar a aplicação: `npm start`
7. Porta Default 3000

## EndPoints
### Listar todos os jogos do Campeonato Brasileiro:
- Buscar Todos os Jogos :
```text
 api/championship
```
Exemplo de Retorno : 


```
    {
        "codigoRodada": 1,
        "dataJogo": "2015-05-10T03:00:00.000Z",
        "horaJogo": "16:00:00",
        "Mandante": "Sport",
        "Visitante": "Figueirense",
        "Placar Mandante": 4,
        "Placar Visitante": 1
    }
```

- Filtrar Jogo por Rodada , onde id será o número da rodada :
```text
 api/championship/:id
```

Exemplo de Retorno : 

```
    {
        "codigoRodada": 1,
        "dataJogo": "2015-05-10T03:00:00.000Z",
        "horaJogo": "16:00:00",
        "Mandante": "Sport",
        "Visitante": "Figueirense",
        "Placar Mandante": 4,
        "Placar Visitante": 1
    }
```

### Listar Times do Campeonato Campeonato Brasileiro:
- Buscar Todos os Jogos :
```text
 api/teams
```

Exemplo de Retorno : 

```
 {
        "Data": "17/06/2019",
        "nomeTime": "Chapecoense",
        "vitorias": 8,
        "derrotas": 7,
        "qtdJogos": 19
    },
    {
        "Data": "17/06/2019",
        "nomeTime": "Corinthians",
        "vitorias": 12,
        "derrotas": 3,
        "qtdJogos": 19
    },
    {
        "Data": "17/06/2019",
        "nomeTime": "Coritiba",
        "vitorias": 4,
        "derrotas": 9,
        "qtdJogos": 19
    }
 ```   
- Filtrar por  Time , onde id será o Código do time :
```text
 api/team/:id
```

Exemplo de Retorno : 

```
 {
        "Data": "17/06/2019",
        "nomeTime": "Chapecoense",
        "vitorias": 8,
        "derrotas": 7,
        "qtdJogos": 19
   }
```    
