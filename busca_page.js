import { Selector } from 'testcafe';

export default class BuscaPage {
    constructor () {
        this.input_busca = Selector('#auto-complete');
        this.btn_buscar = Selector('#form-buscar > button');
    }
}
