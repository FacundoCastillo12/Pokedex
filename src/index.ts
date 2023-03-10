/* eslint-disable import/no-unresolved */
/* eslint-disable func-names */
import {
  actualizarNumeroPagina,
  cambiarNumeroPagina,
  actualizarOrdenPokemonLista,
  añadirTarjetasPokemon,
  obtenerNumeroDePagina,
} from './ui.js';

añadirTarjetasPokemon();
const BotonAnterior = document.querySelector('#anterior') as HTMLButtonElement;
const BotonSiguiente = document.querySelector(
  '#siguiente',
) as HTMLButtonElement;
BotonAnterior.onclick = function () {
  if (obtenerNumeroDePagina() > 1) {
    actualizarOrdenPokemonLista(40);
    cambiarNumeroPagina('-');
    actualizarNumeroPagina();
    añadirTarjetasPokemon();
  }
};
BotonSiguiente.onclick = function () {
  if (obtenerNumeroDePagina() >= 1) {
    cambiarNumeroPagina('+');
    actualizarNumeroPagina();
    añadirTarjetasPokemon();
  }
};
