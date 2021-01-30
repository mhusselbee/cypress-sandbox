import { useShoppingCart } from './state';

export const AddProductButton = () => {
    const { add } = useShoppingCart();
    return <button onClick={() => add({ price: 1, quantity: 1, sku: '11111', details: {} })}> Add Product </button>;
};

export const RemoveProductButton = () => {
    const { remove } = useShoppingCart();
    return <button onClick={() => remove('11111')}> Remove Product </button>;
};

export const UpdateProductQuantityButton = () => {
    const { updateQuantity } = useShoppingCart();
    return <button onClick={() => updateQuantity('11111', 2)}> Set Product Quantity </button>;
};
