import { useState } from 'react';
import { createContainer } from 'unstated-next';

const useCartContainer = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const add = (product: Product) => {
        setProducts(prev => {
            prev.push(product);
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

    const updateQuantity = (productSku: string, quantity: number) => {
        setProducts(prev => {
            prev.filter(p => p.sku === productSku)[0].quantity = quantity;

            return prev;
        });
        console.log('product updated');
    };

    const calculateSubTotal = () => {
        return products.reduce((prev, pro) => {
            return prev + pro.price;
        }, 0);
    };

    return {
        add,
        remove,
        updateQuantity,
        calculateSubTotal,
    };
};

export const { Provider: CartProvider, useContainer: useShoppingCart } = createContainer(useCartContainer);
