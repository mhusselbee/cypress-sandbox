import { useState } from 'react';
import { createContainer } from 'unstated-next';

const useAuthContainer = () => {
    const [user, setUser] = useState<CustomerData | undefined>(undefined);

    return {
        signedIn: user ? true : false,
        user,
        setUser,
    };
};

export const { Provider: AuthProvider, useContainer: useAuth } = createContainer(useAuthContainer);
