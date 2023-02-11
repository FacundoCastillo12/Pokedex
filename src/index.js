import {
  actualizarNumeroPagina,
  cambirNumeroPagina,
  actualizarOrdenPokemonLista,
  añadirTarjetasPokemon,
  obtenerNumeroDePagina,
} from './ui.js';

añadirTarjetasPokemon();

document.querySelector('#anterior').onclick = function () {
  if (obtenerNumeroDePagina() > 1) {
    actualizarOrdenPokemonLista(40);
    cambirNumeroPagina('-');
    actualizarNumeroPagina();
    añadirTarjetasPokemon();
  }
};

document.querySelector('#siguiente').onclick = function () {
  if (obtenerNumeroDePagina() >= 1) {
    cambirNumeroPagina('+');
    actualizarNumeroPagina();
    añadirTarjetasPokemon();
  }
};
