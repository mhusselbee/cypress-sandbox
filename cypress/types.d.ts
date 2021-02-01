type CustomerData = {
    shippingInfo: ShippingInfo;
    paymentInfo: PaymentInfo;
};

type ShippingInfo = {
    firstName: string;
    lastName: string;
    address1: string;
    address2: string;
    city: string;
    zip: string;
    state: string;
    country: string;
};

type PaymentInfo = {
    cardName: string;
    cardNumber: string;
    cvv: string;
    expDate: string;
};
