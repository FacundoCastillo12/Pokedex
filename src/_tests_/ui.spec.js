/* eslint-disable no-undef */
/// <reference types="Jest" />

import pokedexFixture from './pokedex.fixture.js';
import {
  actualizarNumeroPagina,
  cambiarNumeroPagina,
  actualizarOrdenPokemonLista,
  añadirTarjetasPokemon,
  obtenerNumeroDePagina,
} from '../ui.js';

describe('Probar ui', () => {
  beforeEach(() => {
    document.body.innerHTML = pokedexFixture;
    global.fetch = jest.fn();
  });
  it('Probar actualizar numero de pagina', () => {
    actualizarNumeroPagina();
    expect(document.querySelector('#pagina').textContent).toBe('1');
  });
  it('Probar cambiar numero de pagina -', () => {
    cambiarNumeroPagina('-');
    const numero = obtenerNumeroDePagina();
    expect(numero).toBe(0);
  });
  it('Probar cambiar numero de pagina +', () => {
    cambiarNumeroPagina('+');
    cambiarNumeroPagina('+');
    const numero = obtenerNumeroDePagina();
    expect(numero).toBe(2);
  });
  it('Probar actualizar orden de pokemon lista', () => {
    // Cambia variable, pero no tengo forma de testearla.
    actualizarOrdenPokemonLista(20);
  });
  it('Probar añadir tarjetas pokemon', () => {
    const POKEMON = {
      name: 'beedrill',
      base_experience: 178,
      sprites: { other: { home: { front_default: 'Imagen' } } },
      id: '19',
      height: '100',
      weight: '5',
      types: [{ type: { name: 'fuego' } }, 'aire'],
    };
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(POKEMON),
    }));
    añadirTarjetasPokemon();
    expect(global.fetch).toHaveBeenCalledTimes(20);
  });
});
