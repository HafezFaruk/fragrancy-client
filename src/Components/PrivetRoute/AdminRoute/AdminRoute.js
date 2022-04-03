import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth()
    let location = useLocation();
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
    if (user.email && admin) {
        return children;
    }
    return <Navigate to="/home" state={{ from: location }} />
};

export default AdminRoute;