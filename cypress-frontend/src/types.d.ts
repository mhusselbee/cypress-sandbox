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
