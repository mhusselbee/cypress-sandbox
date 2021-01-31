import { useState } from 'react';
import { createContainer } from 'unstated-next';

const productsFixture = [{ name: 'Vegetable', price: 1, quantity: 0, sku: '11111', details: {} }];

const useCartContainer = () => {
    const [products, setProducts] = useState<Product[]>(productsFixture);

    const addOne = (sku: string) => {
        setProducts(prev => {
            const index = prev.findIndex(p => p.sku === sku);
            if (index > 0) {
                console.log(true);
            }
            return prev;
        });
        console.log('product added');
        return products.length;
    };

    const remove = (productSku: string) => {
        setProducts(prev => {
            return prev.filter(product => product.sku !== productSku);
        });
        console.log('product removed');
        return products.length;
    };

    const calculateSubTotal = () => {
        return products.reduce((prev, pro) => {
            return prev + pro.price;
        }, 0);
    };

    return {
        products,
        add: addOne,
        remove,
        calculateSubTotal,
    };
};

export const { Provider: CartProvider, useContainer: useShoppingCart } = createContainer(useCartContainer);
