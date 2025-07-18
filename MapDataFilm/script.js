
busca = () =>{
    const titulo = document.getElementById("titulo");
    const url = `http://www.omdbapi.com/?t=${titulo}`;
    fetch(url)
        .then(response => response.json())
            .then(data =>{
                if(data.Year < 2000 || data.Response === false) return;

                const container = document.getElementById("titulos");
                
                const card = document.createElement("div");
                card.className = "card";
                
                const arrFilmes = [];
                arrFilmes.push(data);
                
                const result = arrFilmes.map(filme => ({
                    titulo: filme.Title,
                    ano: filme.Year,
                    diretor: filme.Director,
                }));

                container.appendChild(card);
            })
}