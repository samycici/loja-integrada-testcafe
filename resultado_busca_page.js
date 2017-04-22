import { Selector } from 'testcafe';

export default class ResultadoBuscaPage {
    constructor () {
        this.resultado = Selector('#listagemProdutos > ul > li > ul > li');
        this.sem_resultado = Selector('#corpo > div > div.secao-principal.row-fluid > div.conteudo.span9 > h1')
    }
}
