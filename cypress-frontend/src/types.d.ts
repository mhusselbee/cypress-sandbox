interface Cart {
    add: (item: Product) => number;
    remove: (item: Product) => number;
    update: (item: Product) => boolean;
    items: Product[];
}

type Product<TDetails = any> = {
    details: TDetails;
    sku: string;
    price: number;
    quantity: number;
};
