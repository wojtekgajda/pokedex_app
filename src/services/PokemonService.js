
let formatUrl = (limit) =>`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`;

export const pokemonService = {
  getPokemonList: async (limit ) => {
    return new Promise((resolve) => {
      fetch(formatUrl(limit))
        .then(res => res.json())
        .then(data => {
          resolve(data.results);
        })
    })
  },
  fetchPokemonDetails: async (url) => {
    const response = await fetch(url)
    return response.json();
  }
}
