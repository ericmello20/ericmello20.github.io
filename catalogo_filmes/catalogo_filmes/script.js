async function carregarFilmes() {
  try {
    const resposta = await fetch('https://rafaelescafloni.github.io/desenv_web/filmes.json');
    const filmes = await resposta.json();
    console.log(filmes);
    exibirFilmes(filmes);
  } catch (erro) {
    console.error("Erro ao carregar os filmes:", erro);
  }
}

function exibirFilmes(lista) {
  const catalogo = document.getElementById('catalogo');

  lista.forEach(filme => {
    const card = document.createElement('div');
    card.className = 'filme';

    const titulo = document.createElement('h2');
    titulo.textContent = filme.titulo;

    const imagem = document.createElement('img');
    imagem.src = filme.figura;
    imagem.alt = filme.titulo;

    const resumo = document.createElement('p');
    resumo.textContent = filme.resumo;

    const classificacao = document.createElement('p');
    classificacao.textContent = `Classificação: ${filme.classificacao}`;

    if (filme.classificacao <= 0) {
      classificacao.className = 'classificacao-0';
    } else if (filme.classificacao <= 14) {
      classificacao.className = 'classificacao-14';
    } else {
      classificacao.className = 'classificacao-18';
    }

    const rating = document.createElement('p');
    const estrelas = '⭐'.repeat(Math.round(filme.rating || 0));
    rating.textContent = `Avaliação: ${estrelas}`;

    card.appendChild(titulo);
    card.appendChild(imagem);
    card.appendChild(resumo);
    card.appendChild(classificacao);
    card.appendChild(rating);

    catalogo.appendChild(card);
  });
}

carregarFilmes();
