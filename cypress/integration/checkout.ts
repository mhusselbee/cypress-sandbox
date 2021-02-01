describe(`A customer using the checkout workflow in ${Cypress.env('environment')}`, () => {
    let customerData: CustomerData[];

    it('can fill in their shipping information', () => {
        cy.fixture('customer-fixtures.json')
            .as('testData')
            .then(data => {
                console.log(data.customers);
                customerData = data.customers;
                cy.visit('http://localhost:3000');
                //@ts-ignore
                cy.fillShipping(customerData[0]);
                cy.get('.makeStyles-buttons-5 > .MuiButtonBase-root').click();
            });
    });

    it('can fill in their payment information', () => {
        //@ts-ignore
        cy.fillPayment(customerData[0]);
        cy.get('.MuiButton-contained').click();
    });

    it('can review and confirm their order', () => {
        cy.get('.MuiTypography-body2.MuiTypography-alignCenter').scrollIntoView();
        cy.get('.MuiButton-contained').click();
    });
});
