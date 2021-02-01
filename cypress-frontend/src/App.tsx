import React from 'react';
import './App.css';
import Checkout from './lib/components/Checkout';
import SignIn from './lib/components/SignIn';
import { AuthProvider, useAuth } from './lib/state/useAuth';

const MainPage = () => {
    const { signedIn } = useAuth();
    return signedIn ? <Checkout /> : <SignIn />;
};

const App = () => {
    return (
        <div className="AppHeader">
            <AuthProvider>
                <MainPage />
            </AuthProvider>
        </div>
    );
};

export default App;
