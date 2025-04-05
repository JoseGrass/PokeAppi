function mostrarLista(listaPokes){
    const app = document.getElementById("app");
    
    let Pokes = "";

    const seccion = document.createElement("section");
    seccion.classList.add("c-lista"); 

/*
    const buscador = document.createElement("input");
    buscador.classList.add("c-buscador");
    buscador.type = "text"
    buscador.addEventListener("input", buscarPoke);
*/
Pokes = listaPokes.map(pokemon => {
    let id = pokemon.url.split("/")[6];
    return `
    <div class="c-lista-pokemon poke-${id}" onclick="mostrarDetalle('${pokemon.name}')">
        <p>#${id}</p>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" width="auto" height="60" loading="lazy" alt="${pokemon.name}">
        <p>${pokemon.name}</p>
    </div>`;
}).join('');

    seccion.innerHTML = Pokes;
    
    /*app.appendChild(buscador);*/
    app.appendChild(seccion);
}