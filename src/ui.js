import { conseguirInformacionPokemonId } from './pokeapi.js';

let pokemonListaId = 0;
let numeroDePagina = 1;

export function actualizarNumeroPagina(pagina) {
  const $pagina = document.querySelector('#pagina');
  $pagina.textContent = numeroDePagina;
}
export function obtenerNumeroDePagina() {
  return numeroDePagina;
}
export function cambirNumeroPagina(signo) {
  if (signo === '-') {
    numeroDePagina--;
  } else if (signo === '+') {
    numeroDePagina++;
  }
}
export function actualizarOrdenPokemonLista(numero) {
  pokemonListaId -= numero;
}
export function añadirTarjetasPokemon() {
  for (let i = 1; i <= 4; i++)
    for (let j = 1; j <= 5; j++) {
      pokemonListaId++;
      crearTarjetasPokemon(pokemonListaId, i, j);
    }
}

export async function crearTarjetasPokemon(pokemonId, ordenFila, ordenTarjeta) {
  let respuestaJSON = await conseguirInformacionPokemonId(`${pokemonId}`);
  let tarjeta = document.querySelector(
    `.fila-${ordenFila} .tarjeta-${ordenTarjeta}`
  );
  let elementos = `
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
  tarjeta.innerHTML = elementos;
}
