import { crearTarjetasPokemon } from './pokemon.js';

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
