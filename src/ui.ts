import { crearTarjetasPokemon } from './pokemon.js';

let pokemonListaId: number = 0;
let numeroDePagina: number = 1;

export function actualizarNumeroPagina(): void {
  const $pagina: HTMLElement = document.querySelector('#pagina')!;
  if ($pagina !== null) {
    $pagina.textContent = numeroDePagina.toString();
  }
}
export function obtenerNumeroDePagina(): number {
  return numeroDePagina;
}
export function cambiarNumeroPagina(signo: string): void {
  if (signo === '-') {
    numeroDePagina -= 1;
  }
  if (signo === '+') {
    numeroDePagina += 1;
  }
}
export function actualizarOrdenPokemonLista(numero: number): void {
  pokemonListaId -= numero;
}
export function añadirTarjetasPokemon(): void {
  for (let i = 1; i <= 4; i += 1) {
    for (let j = 1; j <= 5; j += 1) {
      pokemonListaId += 1;
      crearTarjetasPokemon(pokemonListaId, i, j);
    }
  }
}
