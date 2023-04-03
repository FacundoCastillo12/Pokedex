import pokedexFixture from './fixture/pokedex.fixture.js';
import { actualizarNumeroPagina, cambiarNumeroPagina, actualizarOrdenPokemonLista, añadirTarjetasPokemon, obtenerNumeroDePagina, } from '../ui.js';
describe('Probar ui', () => {
    beforeEach(() => {
        document.body.innerHTML = pokedexFixture;
        global.fetch = jest.fn();
    });
    it('Probar actualizar numero de pagina', () => {
        const $pagina = document.querySelector('#pagina');
        actualizarNumeroPagina();
        expect($pagina.textContent).toBe('1');
    });
    it('Probar actualizar numero de pagina y probar si #pagina de null', () => {
        document.querySelector = jest.fn().mockReturnValue(null);
        expect(() => actualizarNumeroPagina()).not.toThrow();
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
        global.fetch = jest.fn().mockResolvedValue({
            json: () => Promise.resolve(POKEMON),
        });
        añadirTarjetasPokemon();
        expect(global.fetch).toHaveBeenCalledTimes(20);
    });
});
//# sourceMappingURL=ui.spec.js.map