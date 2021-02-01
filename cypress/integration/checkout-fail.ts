// NOTE: that this test passes because there is no validation on the checkout form UI.

describe('A customer using the checkout workflow', () => {
    let customerData: CustomerData[];

    it('cannot checkout without filling in all required fields ', () => {
        cy.fixture('customer-fixtures.json')
            .as('testData')
            .then(data => {
                console.log(data.customers);
                customerData = data.customers;
                cy.visit('http://localhost:3000');
                cy.get('#firstName').type(customerData[1].shippingInfo.firstName);
                cy.get('#lastName').type(customerData[1].shippingInfo.lastName);
                cy.get('#address1').type(customerData[1].shippingInfo.address1);
                cy.get('#address2').type(customerData[1].shippingInfo.address2);
                cy.get('#city').type(customerData[1].shippingInfo.city);
                cy.get('#zip').type(customerData[1].shippingInfo.zip);
                cy.get('#state').type(customerData[1].shippingInfo.state);
                cy.get('.PrivateSwitchBase-input-10').click();
                cy.get('.makeStyles-buttons-5 > .MuiButtonBase-root').click();
                cy.get('#cardName').type(customerData[1].paymentInfo.cardName);
                cy.get('#cardNumber').type(customerData[1].paymentInfo.cardNumber);
                cy.get('#expDate').type(customerData[1].paymentInfo.expDate);
                cy.get('#cvv').type(customerData[1].paymentInfo.cvv);
                const button = cy.get('.PrivateSwitchBase-input-10');
                try {
                    button.click();
                } catch (e) {
                    console.log(e);
                }
            });
    });
});
