import { conseguirInformacionPokemonId } from './pokeapi.js';

class Pokemon {
  constructor(RESPUESTA_JSON) {
    this.nombre = RESPUESTA_JSON.name;
    this.id = RESPUESTA_JSON.id;
    this.experiencia = RESPUESTA_JSON.base_experience;
    this.imagen = RESPUESTA_JSON.sprites.other.home.front_default;
    this.altura = RESPUESTA_JSON.height;
    this.peso = RESPUESTA_JSON.weight;
    this.tipo = RESPUESTA_JSON.types[0].type.name;
  }
}

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

export async function crearTarjetasPokemon(pokemonId, ordenFila, ordenTarjeta) {
  const RESPUESTA_JSON = await conseguirInformacionPokemonId(`${pokemonId}`);
  const TARJETA = document.querySelector(
    `.fila-${ordenFila} .tarjeta-${ordenTarjeta}`,
  );
  const nuevoPokemon = new Pokemon(RESPUESTA_JSON);
  const ELEMENTOS = crearElementosTarjeta(nuevoPokemon);
  TARJETA.innerHTML = ELEMENTOS;
}
