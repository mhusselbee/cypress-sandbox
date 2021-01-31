const customerInfo = {
    shippingInfo: {
        firstName: 'A',
        lastName: 'Test',
        address1: '123 Sesame Street',
        address2: 'Unit 321',
        city: 'New York',
        zip: '83238',
        state: 'NY',
        country: 'United States',
    },
    paymentInfo: {
        cardName: 'A Good Test',
        cardNumber: '1234123412341234',
        cvv: '123',
        expDate: '10/10/2025',
    },
};

describe('A customer using the checkout workflow', () => {
    it('can fill in their shipping information', () => {
        cy.visit('http://localhost:3000');
        cy.get('#firstName').type(customerInfo.shippingInfo.firstName);
        cy.get('#lastName').type(customerInfo.shippingInfo.lastName);
        cy.get('#address1').type(customerInfo.shippingInfo.address1);
        cy.get('#address2').type(customerInfo.shippingInfo.address2);
        cy.get('#city').type(customerInfo.shippingInfo.city);
        cy.get('#zip').type(customerInfo.shippingInfo.zip);
        cy.get('#state').type(customerInfo.shippingInfo.state);
        cy.get('#country').type(customerInfo.shippingInfo.country);
        cy.get('.PrivateSwitchBase-input-10').click();
        cy.get('.makeStyles-buttons-5 > .MuiButtonBase-root').click();
    });

    it('can fill in their payment information', () => {
        cy.get('#cardName').type(customerInfo.paymentInfo.cardName);
        cy.get('#cardNumber').type(customerInfo.paymentInfo.cardNumber);
        cy.get('#expDate').type(customerInfo.paymentInfo.expDate);
        cy.get('#cvv').type(customerInfo.paymentInfo.cvv);
        cy.get('.PrivateSwitchBase-input-10').click();
        cy.get('.MuiButton-contained').click();
    });

    it('can review and confirm their order', () => {
        cy.get('.MuiTypography-body2.MuiTypography-alignCenter').scrollIntoView();
        cy.get('.MuiButton-contained').click();
    });
});
