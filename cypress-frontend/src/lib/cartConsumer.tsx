import { useShoppingCart } from './state';

export const CartConsumer = () => {
    const { add } = useShoppingCart();
    return <button onClick={() => add({ price: 1, quantity: 1, sku: '11111', details: {} })}> Add Product </button>;
};
