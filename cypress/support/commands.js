Cypress.Commands.add('fillShipping', (customerData, fail = false, saveAddress = true) => {
    cy.get('#firstName').type(customerData.shippingInfo.firstName);
    cy.get('#lastName').type(customerData.shippingInfo.lastName);
    cy.get('#address1').type(customerData.shippingInfo.address1);
    cy.get('#address2').type(customerData.shippingInfo.address2);
    cy.get('#city').type(customerData.shippingInfo.city);
    cy.get('#zip').type(customerData.shippingInfo.zip);
    cy.get('#state').type(customerData.shippingInfo.state);
    !fail && cy.get('#country').type(customerData.shippingInfo.country);
    saveAddress && cy.get('.PrivateSwitchBase-input-10').click();
});

Cypress.Commands.add('fillPayment', (customerData, fail = false, saveInformation = true) => {
    cy.get('#cardName').type(customerData.paymentInfo.cardName);
    cy.get('#cardNumber').type(customerData.paymentInfo.cardNumber);
    cy.get('#expDate').type(customerData.paymentInfo.expDate);
    !fail && cy.get('#cvv').type(customerData.paymentInfo.cvv);
    saveInformation && cy.get('.PrivateSwitchBase-input-10').click();
});
