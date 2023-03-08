import Pokemon from "../entidades/pokemon.js";
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
  
export function mapearPokemon(datosApi: IDatosApi): Pokemon {
  const {
    id,
    name: nombre,
    base_experience: experiencia,
    height: altura,
    weight: peso,
  } = datosApi;
  const imagen = datosApi.sprites.other.home.front_default;
  const tipo = datosApi.types[0].type.name;

  return new Pokemon(
    id,
    nombre,
    experiencia,
    imagen,
    altura,
    peso,
    tipo,
    )
}
