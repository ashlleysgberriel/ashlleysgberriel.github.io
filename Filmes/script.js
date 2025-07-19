
import { filmes } from './DataF'; 

async function carregarFilmes() {

    const container = document.getElementById('catalogo');

    filmes.forEach(filme => { 
        const div = document.createElement('div');
        div.className = 'filme';

        
        let corFaixa = 'verde';
        if (filme.classificacao >= 18) corFaixa = 'vermelho';
        else if (filme.classificacao >= 14) corFaixa = 'amarelo';

       
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
        `; 
        container.appendChild(div);
    });
}

carregarFilmes();