describe('Navegação', () => {
    it('should navigate to the CadastroProdutor page', () => {
        cy.visit('http://localhost:3000/')

        cy.get('a[href*="/CadastroProdutor"]').click({multiple: true})

        cy.url().should('include', '/CadastroProdutor')
    })
})