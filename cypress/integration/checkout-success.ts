describe('A customer using the checkout workflow', () => {
    let customerData: CustomerData[];

    it('can fill in their shipping information', () => {
        cy.fixture('customer-fixtures.json')
            .as('testData')
            .then(data => {
                console.log(data.customers);
                customerData = data.customers;
                cy.visit('http://localhost:3000');
                cy.get('#firstName').type(customerData[0].shippingInfo.firstName);
                cy.get('#lastName').type(customerData[0].shippingInfo.lastName);
                cy.get('#address1').type(customerData[0].shippingInfo.address1);
                cy.get('#address2').type(customerData[0].shippingInfo.address2);
                cy.get('#city').type(customerData[0].shippingInfo.city);
                cy.get('#zip').type(customerData[0].shippingInfo.zip);
                cy.get('#state').type(customerData[0].shippingInfo.state);
                cy.get('#country').type(customerData[0].shippingInfo.country);
                cy.get('.PrivateSwitchBase-input-10').click();
                cy.get('.makeStyles-buttons-5 > .MuiButtonBase-root').click();
            });
    });

    it('can fill in their payment information', () => {
        cy.get('#cardName').type(customerData[0].paymentInfo.cardName);
        cy.get('#cardNumber').type(customerData[0].paymentInfo.cardNumber);
        cy.get('#expDate').type(customerData[0].paymentInfo.expDate);
        cy.get('#cvv').type(customerData[0].paymentInfo.cvv);
        cy.get('.PrivateSwitchBase-input-10').click();
        cy.get('.MuiButton-contained').click();
    });

    it('can review and confirm their order', () => {
        cy.get('.MuiTypography-body2.MuiTypography-alignCenter').scrollIntoView();
        cy.get('.MuiButton-contained').click();
    });
});


