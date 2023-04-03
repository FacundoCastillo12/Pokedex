import Pokemon from '../entidades/pokemon.js';
export interface IDatosApi {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    weight: number;
    sprites: {
        other: {
            home: {
                front_default: string;
            };
        };
    };
    types: {
        type: {
            name: string;
        };
    }[];
}
export declare function mapearPokemon(datosApi: IDatosApi): Pokemon;
