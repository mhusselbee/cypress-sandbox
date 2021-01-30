import React from 'react';
import './App.css';
import { CartProvider } from './lib/state/useShoppingCart';
import { CartConsumer } from './lib/cartConsumer';

function App() {
    return (
        <CartProvider>
            <CartConsumer />
        </CartProvider>
    );
}

export default App;
