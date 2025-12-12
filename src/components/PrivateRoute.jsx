import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function PrivateRoute({ children, adminOnly = false }) {
    const { currentUser } = useAuth();

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    // Note: For a real app, you should check claims or fetch role from Firestore here. 
    // But context state update might be async. For now, we rely on the component usage of role.
    // Ideally, one would wait for role to be fetched in AuthProvider.

    return children;
}
