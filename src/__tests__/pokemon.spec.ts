/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import { crearElementosTarjeta, crearTarjetasPokemon } from '../pokemon.js';
import pokedexFixture from './fixture/pokedex.fixture.js';
import { mapearPokemon } from '../mapeadores/pokemon.js';

describe('Probar pokemon.js', () => {
  const pokemonBulbasaur = {
    id: 1,
    name: 'bulbasaur',
    base_experience: 64,
    height: 7,
    weight: 69,
    sprites: {
      other: {
        home: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png',
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
  beforeEach(() => {
    global.fetch = jest.fn();
    document.body.innerHTML = pokedexFixture;
  });
  it('Probar crear tarjetas', () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(pokemonBulbasaur),
    });
    crearTarjetasPokemon(19, 1, 1);
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
  it('Probar crear elementos para tarjeta', () => {
    const nuevoPokemon = mapearPokemon(pokemonBulbasaur);
    const ELEMENTOS = crearElementosTarjeta(nuevoPokemon);
    expect(ELEMENTOS).toContain('ID: <strong>1');
    expect(ELEMENTOS).toContain('EXP BASE: <strong>64');
    expect(ELEMENTOS).toContain('ALTURA: <strong>7<');
    expect(ELEMENTOS).toContain('PESO: <strong>69');
    expect(ELEMENTOS).toContain('TIPO: <strong>grass');
  });
});
