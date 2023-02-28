/// <reference types="cypress" />

context('Funcionalidae login', () => {


  beforeEach(() => {
    cy.visit('minha-conta')

  });

  it('Deve fazer login com sucesso', () => {

    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.page-title').should('contain', 'Minha conta')
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
  })

  it.only('Deve fazer login com sucesso - Usando arquivo de dados', () => {
    cy.fixture ('perfil.json').then(dados => {
      cy.get('#username').type(dados.usuario)
      cy.get('#password').type(dados.senha, {log:false})
      cy.get('.woocommerce-form > .button').click()
  
      cy.get('.page-title').should('contain', 'Minha conta')


    })
    
    
  });


  it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {

    cy.get('#username').type('aluno_ebac@.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error > li').should('contain', 'o usuário aluno_ebac@.com não está cadastrado neste site.')
  })

  it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {

    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error > li').should('contain', 'a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta')


  })



})