import React from 'react';
import {Navigate} from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');

    if (!isLoggedIn) {

        return <Navigate to="/login"/>;
    }

    return children;
};

export default ProtectedRoute;
