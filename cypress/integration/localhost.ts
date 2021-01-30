describe('Testing a local React App', () => {
    it('can add a Vegetable 3 times', () => {
        cy.visit('http://localhost:3000');
        cy.get('#add-button')
            .should('have.text', 'Add Product')
            .click()
            .click()
            .click();
    });

    it('can remove the Vegetables', () => {
        cy.get('#remove-button')
            .should('have.text', 'Remove Product')
            .click();
    });
});
