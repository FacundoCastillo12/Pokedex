/* eslint-disable import/no-unresolved */
import Pokemon from './entidades/pokemon.js';
import { mapearPokemon } from './mapeadores/pokemon.js';
import { conseguirInformacionPokemonId } from './pokeapi.js';

export function crearElementosTarjeta(pokemon: Pokemon): string {
  const ELEMENTOS: string = `
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

export async function crearTarjetasPokemon(
  pokemonId: number,
  ordenFila: number,
  ordenTarjeta: number,
) {
  const RESPUESTA_JSON = await conseguirInformacionPokemonId(pokemonId);
  const TARJETA = document.querySelector(`.fila-${ordenFila} .tarjeta-${ordenTarjeta}`);
  const nuevoPokemon = mapearPokemon(RESPUESTA_JSON);
  const ELEMENTOS = crearElementosTarjeta(nuevoPokemon);
  if (TARJETA) {
    TARJETA.innerHTML = ELEMENTOS;
  }
}
