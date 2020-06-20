import React, {useCallback, useState} from 'react';

import Route from './routes/Routes';
import {AuthContext} from "./components/Shared/context/auth-context";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = useCallback(() => {
        setIsLoggedIn(true);
    }, []);

    const logout = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    return (
        <div className="text-center p-5 mx-auto">
            <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: login, logout: logout}}>
            <Route/>
            </AuthContext.Provider>
        </div>
    );
}

export default App;
