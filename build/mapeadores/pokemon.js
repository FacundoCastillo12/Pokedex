import Pokemon from '../entidades/pokemon.js';
export function mapearPokemon(datosApi) {
    const { id, name: nombre, base_experience: experiencia, height: altura, weight: peso, } = datosApi;
    const imagen = datosApi.sprites.other.home.front_default;
    const tipo = datosApi.types[0].type.name;
    return new Pokemon(id, nombre, experiencia, imagen, altura, peso, tipo);
}
//# sourceMappingURL=pokemon.js.map