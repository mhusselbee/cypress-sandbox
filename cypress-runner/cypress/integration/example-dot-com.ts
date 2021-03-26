describe('Testing with Cypress using example.com', () => {
    it('has correct header', () => {
        cy.visit('https://www.example.com');
        cy.get('h1').should('have.text', 'Example Domain');
    });

    it('has correct text', () => {
        cy.get('body > :nth-child(1) > :nth-child(2)').should(
            'have.text',
            'This domain is for use in illustrative examples in documents. You may use this\n    domain in literature without prior coordination or asking for permission.',
        );
    });

    it('has valid anchor', () => {
        cy.get('a')
            .should('have.text', 'More information...')
            .should('have.attr', 'href')
            .and('include', 'example');
    });
});
