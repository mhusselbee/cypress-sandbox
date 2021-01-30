import React from 'react';
import './App.css';
import { CartProvider } from './lib/state/useShoppingCart';
import { AddProductButton, RemoveProductButton, UpdateProductQuantityButton } from './lib/CartButtons';

function App() {
    return (
        <CartProvider>
            <AddProductButton />
            <RemoveProductButton />
            <UpdateProductQuantityButton />
        </CartProvider>
    );
}

export default App;
