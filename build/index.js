import { actualizarNumeroPagina, cambiarNumeroPagina, actualizarOrdenPokemonLista, añadirTarjetasPokemon, obtenerNumeroDePagina, } from './ui.js';
añadirTarjetasPokemon();
const BotonAnterior = document.querySelector('#anterior');
const BotonSiguiente = document.querySelector('#siguiente');
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
//# sourceMappingURL=index.js.map