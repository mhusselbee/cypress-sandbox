import React from 'react';
import './App.css';
import { CartProvider } from './lib/state/useShoppingCart';
import { AddProductButton, RemoveProductButton } from './lib/CartButtons';
import { CartList } from './lib';

function App() {
    return (
        <div className="AppHeader">
            <CartProvider>
                <CartList />
                <AddProductButton />
                <RemoveProductButton />
            </CartProvider>
        </div>
    );
}

export default App;
