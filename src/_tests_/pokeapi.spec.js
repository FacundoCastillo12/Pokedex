/* eslint-disable no-undef */
import { conseguirInformacionPokemonId } from '../pokeapi.js';

global.fetch = jest.fn();
test('Probar api', () => {
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
  conseguirInformacionPokemonId();
  conseguirInformacionPokemonId();
  expect(global.fetch).toHaveBeenCalledTimes(2);
});
