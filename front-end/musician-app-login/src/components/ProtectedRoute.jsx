// ProtectedRoute.jsx
import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ element, ...rest }) => {
    const { user } = useAuth();

    return (
        <Route
            {...rest}
            element={user ? element : <Navigate to="/signin" replace />}
        />
    );
};

export default ProtectedRoute;
