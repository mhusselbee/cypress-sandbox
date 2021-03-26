type CustomerData = {
    id: string;
    shippingInfo?: ShippingInfo;
    paymentInfo?: PaymentInfo;
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

interface Cart {
    add: (item: Product) => number;
    remove: (item: Product) => number;
    update: (item: Product) => boolean;
    items: Product[];
}

type Product<TDetails = any> = {
    sku: string;
    name: string;
    details: TDetails;
    price: number;
    quantity: number;
};
