import { useShoppingCart } from './state';

export const AddProductButton = () => {
    const { add } = useShoppingCart();
    return (
        <button id={'add-button'} onClick={() => add('11111')}>
            Add Product
        </button>
    );
};

export const RemoveProductButton = () => {
    const { remove } = useShoppingCart();
    return (
        <button id={'remove-button'} onClick={() => remove('11111')}>
            Remove Product
        </button>
    );
};
