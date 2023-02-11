const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon';

export async function conseguirInformacionPokemonId(pokemonId) {
  const respuesta = await fetch(`${POKE_API_URL}/${pokemonId}`);
  return respuesta.json();
}
