function carregarFilmes() {
  fetch("https://rafaelescalfoni.github.io/desenv_web/filmes.json")
    .then(res => res.json())
    .then(filmes => {
      console.log(filmes); // Para ver os dados no console
      exibirFilmes(filmes);
    });
}

function exibirFilmes(filmes) {
  const catalogo = document.getElementById("catalogo");

  filmes.forEach(filme => {
    const card = document.createElement("div");
    card.className = "card";

    // Faixa etária
    let cor = "gray";
    if (filme.classificacao >= 0 && filme.classificacao <= 14) cor = "green";
    if (filme.classificacao >= 14 && filme.classificacao < 18) cor = "yellow";
    if (filme.classificacao >= 18) cor = "red";
    card.style.borderLeftColor = cor;

    card.innerHTML = `
      <img src="${filme.figura}" alt="${filme.titulo}">
      <h2>${filme.titulo}</h2>
      <p><strong>Resumo:</strong> ${filme.resumo}</p>
      <p><strong>Gêneros:</strong> ${filme.generos.join(", ")}</p>
      <p><strong>Elenco:</strong> ${filme.elenco.join(", ")}</p>
      <p><strong>Classificação:</strong> ${filme.classificacao} anos</p>
      <p class="rating"><strong>Rating:</strong> ${"★".repeat(Math.round(filme.opinioes.reduce((a,b) => a + b.rating, 0) / filme.opinioes.length || 0))}</p>
    `;

    catalogo.appendChild(card);
  });
}

carregarFilmes();
