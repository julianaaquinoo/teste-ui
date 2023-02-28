/// <reference types="cypress" />

describe('Funcionalidade página de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });


    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
            //.first()
            //.last()
            //.eq(3)
            .contains('Apollo Running Short')
            .click()

    });

    it.only('Deve adcionar um produto ao carrinho', () => {
        var quantidade = 3


        cy.get('.product-block')
            .contains('Arcadio Gym Short').click()
        cy.get('.button-variable-item-33').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)
        cy.get('.woocommerce-message').should('contain' , quantidade + ' × “Arcadio Gym Short” foram adicionados no seu carrinho.')
    });
    


});