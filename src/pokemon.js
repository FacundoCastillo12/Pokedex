import { conseguirInformacionPokemonId } from './pokeapi.js';

function crearTarjetaElementos(respuestaJSON) {
  const ELEMENTOS = `
      <div class="card-group tarjeta-completa">
          <div class="card contenedor-tarjeta">
              <div class="card contenedor-imagen">
                  <h5 class="card-title nombre-pokemon">${respuestaJSON.name}</h5>
                  <img src="${respuestaJSON.sprites.other.home.front_default}" class="card-img-top">
              </div>
          <div class="tarjeta-informacion">
              <p class="card-text id">ID: <strong>${respuestaJSON.id}</strong></p>
              <p class="card-text exp">EXP BASE: <strong>${respuestaJSON.base_experience}</strong></p>
              <p class="card-text altura">ALTURA: <strong>${respuestaJSON.height}</strong></p>
              <p class="card-text peso">PESO: <strong>${respuestaJSON.weight}</strong></p>
              <p class="card-text tipo">TIPO: <strong>${respuestaJSON.types[0].type.name}</strong></p>
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
  const ELEMENTOS = crearTarjetaElementos(RESPUESTA_JSON);
  TARJETA.innerHTML = ELEMENTOS;
}
