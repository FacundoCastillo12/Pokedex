import { IDatosApi } from './mapeadores/pokemon';
export declare const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon";
export declare function conseguirInformacionPokemonId(pokemonId: number): Promise<IDatosApi>;
