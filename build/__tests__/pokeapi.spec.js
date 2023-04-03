var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
                    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png',
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
    test('devuelve los datos de un Pokemon', () => __awaiter(void 0, void 0, void 0, function* () {
        const datos = yield conseguirInformacionPokemonId(1);
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/1');
        expect(datos).toEqual(MOCK_RESPONSE);
    }));
});
//# sourceMappingURL=pokeapi.spec.js.map