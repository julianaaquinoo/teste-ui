/// <reference types="cypress" />
var faker = require('faker')

describe('Funcionalidade Pré Cadastro', () => {


    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });


    it('Deve completar o pré cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('teste@teste.com')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a')

        cy.get('#account_first_name').type('Julia')
        cy.get('#account_last_name').type('Maria')
        cy.get('.woocommerce-Button').click()
    });
    
});