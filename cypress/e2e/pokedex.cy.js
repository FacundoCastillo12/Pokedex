/* eslint-disable no-loop-func */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
// IMPORTANTE: El testeo no es util. Siempre se llama a la API lo cual no es bueno.
/// <reference types="cypress" />
const URL = 'http://127.0.0.1:8080';
context('Pokedex pruebas', () => {
  describe('Verificar Pokedex', () => {
    beforeEach('Antes de todo', () => {
      cy.intercept('https://pokeapi.co/api/v2/pokemon/**').as('pokemon');
      cy.visit(URL);
      cy.wait('@pokemon');
      cy.wait(2000);
    });
    it('Verificar la conexion con API', () => {
      let pokemonId = 0;
      for (let i = 0; i <= 5; i += 1) {
        pokemonId += 1;
        cy.request(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).its('body').then((pokemon) => {
          expect(pokemon).to.have.property('id');
          expect(pokemon.is_default).to.be.true;
          expect(pokemon).to.have.property('sprites');
          expect(pokemon.sprites).to.not.be.empty;
        });
      }
    });
    it('Comprobar si las tarjetas han cargado correctamente', () => {
      cy.get('.fila-1 .col').then(() => {
        cy.get('.col').find('img').should('have.attr', 'src');
        cy.get('.nombre-pokemon').should('be.visible');
        cy.get('.fila-1 .tarjeta-1').trigger('mouseover');
      });
      cy.get('.fila-1 .col').should('have.length', 5);
      cy.get('.fila-2 .col').should('have.length', 5);
      cy.get('.fila-3 .col').should('have.length', 5);
      cy.get('.fila-4 .col').should('have.length', 5);
    });
    it('Asegurar que pagina siguiente y anterior funcione correctamente', () => {
      cy.get('.fila-1 .col').should('have.length', 5);
      cy.get('.fila-2 .col').should('have.length', 5);
      cy.get('.fila-3 .col').should('have.length', 5);
      cy.get('.fila-4 .col').should('have.length', 5);
      cy.get('#siguiente').click().then(() => {
        cy.wait(1000);
        cy.get('.col').find('img').should('have.attr', 'src');
        cy.get('.fila-1 .col').should('have.length', 5);
        cy.get('.fila-2 .col').should('have.length', 5);
        cy.get('.fila-3 .col').should('have.length', 5);
        cy.get('.fila-4 .col').should('have.length', 5);
        cy.get('#pagina').should('have.text', '2');
      });
      cy.get('#anterior').click().then(() => {
        cy.wait(1000);
        cy.get('.col').find('img').should('have.attr', 'src');
        cy.get('.fila-1 .col').should('have.length', 5);
        cy.get('.fila-2 .col').should('have.length', 5);
        cy.get('.fila-3 .col').should('have.length', 5);
        cy.get('.fila-4 .col').should('have.length', 5);
        cy.get('#pagina').should('have.text', '1');
      });
    });
    it('Asegurar respuesta al presionar multiples veces el boton siguiente', () => {
      cy.get('#siguiente').click().then(() => {
        cy.wait(1000);
        cy.get('.col').find('img').should('have.attr', 'src');
        cy.get('.fila-1 .col').should('have.length', 5);
        cy.get('.fila-2 .col').should('have.length', 5);
        cy.get('.fila-3 .col').should('have.length', 5);
        cy.get('.fila-4 .col').should('have.length', 5);
        cy.get('#pagina').should('have.text', '2');
      });
      cy.get('#siguiente').click();
      cy.wait(1000);
      cy.get('#siguiente').click();
      cy.wait(1000);
      cy.get('#siguiente').click();
      cy.wait(1000);
      cy.get('#siguiente').click();
      cy.wait(1000);
      cy.get('#siguiente').click();
      cy.wait(1000);
      cy.get('#siguiente').click();
      cy.wait(1000);
      cy.get('#siguiente').click();
      cy.wait(1000);
      cy.get('#siguiente').click();
      cy.wait(1000);
      cy.get('#siguiente').click();
      cy.wait(1000);
    });
  });
});
