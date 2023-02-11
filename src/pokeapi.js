const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon';

export function conseguirInformacionPokemonId(pokemonId) {
  return fetch(`${POKE_API_URL}/${pokemonId}`).then((respuesta) =>
    respuesta.json()
  );
}
