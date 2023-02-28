/// <reference types="cypress" />

describe('Funcionalidade Pré Cadastro', () => {


    beforeEach(() => {
        cy.visit('minha-conta')
    });


    it('Deve completar o pré cadastro com sucesso', () => {
        cy.get('#reg_email').type('teste2023@teste.com')
        cy.get('#reg_password').type('teste@teste.com')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a')

        cy.get('#account_first_name').type('Julia')
        cy.get('#account_last_name').type('Maria')
        cy.get('.woocommerce-Button').click()
    });
    
});