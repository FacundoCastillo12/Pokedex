/* eslint-disable no-undef */
// eslint-disable-next-line import/no-unresolved
import { conseguirInformacionPokemonId } from '../pokeapi.js';

describe('conseguirInformacionPokemonId', () => {
  global.fetch = jest.fn();
  const MOCK_RESPONSE = {
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
    types: {
      type: {
        name: 'grass',
      },
    },
  };

  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(MOCK_RESPONSE),
    });
  });

  test('devuelve los datos de un Pokemon', async () => {
    const datos = await conseguirInformacionPokemonId(1);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      'https://pokeapi.co/api/v2/pokemon/1',
    );
    expect(datos).toEqual(MOCK_RESPONSE);
  });
});
