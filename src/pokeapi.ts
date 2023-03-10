/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { IDatosApi } from './mapeadores/pokemon';

export const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon';
export async function conseguirInformacionPokemonId(
  pokemonId: number,
): Promise<IDatosApi> {
  const respuesta = await fetch(`${POKE_API_URL}/${pokemonId}`);
  const respuestaJSON = respuesta.json();
  return respuestaJSON;
}
