/* eslint-disable no-undef */
import { crearElementosTarjeta, crearTarjetasPokemon } from '../pokemon.js';
import pokedexFixture from './pokedex.fixture.js';

const POKEMON = {
  name: 'beedrill',
  base_experience: 178,
  sprites: { other: { home: { front_default: 'Imagen' } } },
  id: '19',
  height: '100',
  weight: '5',
  types: [{ type: { name: 'fuego' } }, 'aire'],
};

describe('Probar pokemon.js', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
    document.body.innerHTML = pokedexFixture;
  });
  it('Probar crear tarjetas', () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(POKEMON),
    }));
    crearTarjetasPokemon(19, 1, 1);
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
  it('Probar crear elementos para tarjeta', () => {
    const ELEMENTOS = crearElementosTarjeta(POKEMON);
    expect(ELEMENTOS).toContain('ID: <strong>19');
    expect(ELEMENTOS).toContain('EXP BASE: <strong>178');
    expect(ELEMENTOS).toContain('ALTURA: <strong>100<');
    expect(ELEMENTOS).toContain('PESO: <strong>5');
    expect(ELEMENTOS).toContain('TIPO: <strong>fuego');
  });
});
