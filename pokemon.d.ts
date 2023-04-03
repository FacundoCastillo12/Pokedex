import Pokemon from './entidades/pokemon.js';
export declare function crearElementosTarjeta(pokemon: Pokemon): string;
export declare function crearTarjetasPokemon(pokemonId: number, ordenFila: number, ordenTarjeta: number): Promise<void>;
