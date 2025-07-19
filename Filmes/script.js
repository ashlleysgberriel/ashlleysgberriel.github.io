// script.js
import { filmes } from './DataF'; // Importa a variável 'filmes' do dataF.js

async function carregarFilmes() {
    // Não precisamos mais do fetch, pois os dados já estão importados
    // const resposta = await fetch('https://rafaelescalfoni.github.io/desenv_web/filmes.json');
    // const filmes = await resposta.json(); // A variável 'filmes' já existe por causa do import

    const container = document.getElementById('catalogo');

    filmes.forEach(filme => { // 'filmes' já está disponível aqui
        const div = document.createElement('div');
        div.className = 'filme';

        // Faixa etária colorida
        let corFaixa = 'verde';
        if (filme.classificacao >= 18) corFaixa = 'vermelho';
        else if (filme.classificacao >= 14) corFaixa = 'amarelo';

        // Estrelas
        // Certifique-se que filme.rating é um número válido.
        // Se for um valor com vírgula (ex: "4,5"), Math.round não funcionará.
        // Use parseFloat para converter se necessário: Math.round(parseFloat(filme.rating))
        let estrelas = '★'.repeat(Math.round(filme.rating)) + '☆'.repeat(5 - Math.round(filme.rating));

        div.innerHTML = `
            <h2>${filme.titulo}</h2>
            <p>${filme.resumo}</p>
            <img src="${filme.figura}" alt="Imagem do filme">
            <p>Elenco: ${filme.elenco.join(', ')}</p>
            <p>Gêneros: ${filme.generos.join(', ')}</p>
            <p><span class="faixa ${corFaixa}">Classificação: ${filme.classificacao} anos</span></p>
            <p class="estrelas">${estrelas}</p>
            <p>Opiniões: ${filme.opinioes.map(o => o.descricao).join('; ')}</p>
        `; // Alterei para opiniões.map(o => o.descricao).join('; ') para exibir as descrições.

        container.appendChild(div);
    });
}

carregarFilmes();