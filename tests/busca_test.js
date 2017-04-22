import BuscaPage from '../busca_page';
import ResultadoBuscaPage from '../resultado_busca_page';

const busca = new BuscaPage();
const resultado_busca = new ResultadoBuscaPage();

fixture `Busca de Filmes`
    .page `https://tghcastro.lojaintegrada.com.br/`;

test('Busca por nome completo', async t => {

    await t
    .typeText(busca.input_busca, 'O Hobbit: A Desolação de Smaug')
    .click(busca.btn_buscar);

    await t.expect(resultado_busca.resultado.count).eql(1);
});

test('Busca por parte do nome', async t => {

    await t
    .typeText(busca.input_busca, 'Senhor')
    .click(busca.btn_buscar);

    await t.expect(resultado_busca.resultado.count).eql(2);
});

test('Busca por filme inexistente', async t => {

    await t
    .typeText(busca.input_busca, 'O Homem Aranha')
    .click(busca.btn_buscar);

    await t.expect(resultado_busca.sem_resultado.innerText).contains('não encontrou nenhum resultado');
});
