# Exemplo de Testes com TestCafe [![Circle CI](https://circleci.com/gh/samycici/cucumber-capybara-site_prism.svg?style=shield)](https://circleci.com/gh/samycici/cucumber-capybara-site_prism)

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

Para executar os testes no Chrome e Firefox (simultaneamente) usando o gulp:
```shell
gulp run-testcafe-tests
```
