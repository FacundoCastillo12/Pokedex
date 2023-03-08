import { crearTarjetasPokemon } from './pokemon.js';

let pokemonListaId = 0;
let numeroDePagina = 1;

export function actualizarNumeroPagina() {
  const $pagina = document.querySelector('#pagina');
  $pagina.textContent = numeroDePagina;
}
export function obtenerNumeroDePagina() {
  return numeroDePagina;
}
export function cambiarNumeroPagina(signo) {
  if (signo === '-') {
    numeroDePagina -= 1;
  }
  if (signo === '+') {
    numeroDePagina += 1;
  }
}
export function actualizarOrdenPokemonLista(numero) {
  pokemonListaId -= numero;
}
export function añadirTarjetasPokemon() {
  for (let i = 1; i <= 4; i += 1) {
    for (let j = 1; j <= 5; j += 1) {
      pokemonListaId += 1;
      crearTarjetasPokemon(pokemonListaId, i, j);
    }
  }
}
