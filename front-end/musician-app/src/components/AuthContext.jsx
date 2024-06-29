// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [sessionId, setSessionId] = useState(localStorage.getItem('sessionId'));

    const login = (sessionId) => {
        setSessionId(sessionId);
        console.log(sessionId)
        localStorage.setItem('sessionId', sessionId);
    };

    const logout = () => {
        setSessionId(null);
        localStorage.removeItem('sessionId');
    };

    return (
        <AuthContext.Provider value={{ sessionId, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
