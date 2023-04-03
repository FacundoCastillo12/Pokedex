var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { mapearPokemon } from './mapeadores/pokemon.js';
import { conseguirInformacionPokemonId } from './pokeapi.js';
export function crearElementosTarjeta(pokemon) {
    const ELEMENTOS = `
        <div class="card-group tarjeta-completa">
            <div class="card contenedor-tarjeta">
                <div class="card contenedor-imagen">
                    <h5 class="card-title nombre-pokemon">${pokemon.nombre}</h5>
                    <img src="${pokemon.imagen}" class="card-img-top">
                </div>
            <div class="tarjeta-informacion">
                <p class="card-text id">ID: <strong>${pokemon.id}</strong></p>
                <p class="card-text exp">EXP BASE: <strong>${pokemon.experiencia}</strong></p>
                <p class="card-text altura">ALTURA: <strong>${pokemon.altura}</strong></p>
                <p class="card-text peso">PESO: <strong>${pokemon.peso}</strong></p>
                <p class="card-text tipo">TIPO: <strong>${pokemon.tipo}</strong></p>
            </div>
            </div>
        </div> 
    `;
    return ELEMENTOS;
}
export function crearTarjetasPokemon(pokemonId, ordenFila, ordenTarjeta) {
    return __awaiter(this, void 0, void 0, function* () {
        const RESPUESTA_JSON = yield conseguirInformacionPokemonId(pokemonId);
        const TARJETA = document.querySelector(`.fila-${ordenFila} .tarjeta-${ordenTarjeta}`);
        const nuevoPokemon = mapearPokemon(RESPUESTA_JSON);
        const ELEMENTOS = crearElementosTarjeta(nuevoPokemon);
        if (TARJETA) {
            TARJETA.innerHTML = ELEMENTOS;
        }
    });
}
//# sourceMappingURL=pokemon.js.map