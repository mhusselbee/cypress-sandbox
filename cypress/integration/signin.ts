describe(`A customer in the ${Cypress.env('environment')} environment`, () => {
    it(' can sign in', () => {
        cy.visit('http://localhost:3000');
        //@ts-ignore
        cy.signIn();
    });
});
