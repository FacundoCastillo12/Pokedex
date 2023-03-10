/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
// eslint-disable-next-line import/extensions
import { mapearPokemon } from '../pokemon';

it('Probar si mapeador funciona correctamente', () => {
  const pokemonBulbasaur = {
    id: 1,
    name: 'bulbasaur',
    base_experience: 64,
    height: 7,
    weight: 69,
    sprites: {
      other: {
        home: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png',
        },
      },
    },
    types: [
      {
        type: {
          name: 'grass',
        },
      },
    ],
  };
  const nuevoPokemon = mapearPokemon(pokemonBulbasaur);
  expect(nuevoPokemon.id).toBe(1);
  expect(nuevoPokemon.experiencia).toBe(64);
  expect(nuevoPokemon.altura).toBe(7);
  expect(nuevoPokemon.peso).toBe(69);
});
