describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('#btn-login').click();
    cy.url().should('include', 'signin');
    cy.contains('Sign In').should('be.visible');
  })
})