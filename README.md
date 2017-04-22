# Exemplo de Testes com TestCafe [![Build Status](https://travis-ci.org/samycici/loja-integrada-testcafe.svg?branch=master)](https://travis-ci.org/samycici/loja-integrada-testcafe)


## Configurando o ambiente ##

### Instalações ###
Ter o [Noje.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/) instalados.

Instalar o testcafe:
```shell
npm install -g testcafe
```

Instalar o gulp:
```shell
npm install gulp
```

Instalar o plugin do Gulp para TestCafe:
```shell
npm install --save-dev gulp-testcafe
```
### Executando os testes ###

Para executar os testes em diferentes browser usando o testcafe:
```shell
testcafe firefox busca_test.js
```
ou
```shell
testcafe chrome busca_test.js
```

ou

```shell
testcafe safari busca_test.js
```

Para executar os testes no Chrome, Firefox e Safari (simultaneamente) usando o gulp:
```shell
gulp run-testcafe-tests
```

Para executar os testes no Chrome e Firefox (simultaneamente) usando o npm:
```shell
npm test
```
