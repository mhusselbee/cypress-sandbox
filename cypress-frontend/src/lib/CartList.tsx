import { useEffect, useState } from 'react';
import { useShoppingCart } from './state';

export const CartList = () => {
    const { products } = useShoppingCart();
    const [productNames, setProductNames] = useState<string[]>([]);

    useEffect(() => {
        setProductNames(products.map(p => p.name));
    }, [products]);

    return (
        <ul>
            {productNames.map(name => (
                <li key={name}>{name}</li>
            ))}
        </ul>
    );
};
