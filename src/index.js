/* eslint-disable func-names */
import {
  actualizarNumeroPagina,
  cambiarNumeroPagina,
  actualizarOrdenPokemonLista,
  añadirTarjetasPokemon,
  obtenerNumeroDePagina,
} from './ui.js';

añadirTarjetasPokemon();

document.querySelector('#anterior').onclick = function () {
  if (obtenerNumeroDePagina() > 1) {
    actualizarOrdenPokemonLista(40);
    cambiarNumeroPagina('-');
    actualizarNumeroPagina();
    añadirTarjetasPokemon();
  }
};

document.querySelector('#siguiente').onclick = function () {
  if (obtenerNumeroDePagina() >= 1) {
    cambiarNumeroPagina('+');
    actualizarNumeroPagina();
    añadirTarjetasPokemon();
  }
};
