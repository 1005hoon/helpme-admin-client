import React from 'react';
import { Navigate } from 'react-router-dom';
import IUser from '../../utils/interfaces/user.interface';
import { ROUTES } from '../../utils/routes';

interface PrivateRouteProps {
    component: React.ComponentType;
    user: IUser | null;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
    component: RouteComponent,
    user,
}) => {
    if (user) {
        return <RouteComponent />;
    }

    return <Navigate to={ROUTES.LOGIN} />;
};

export default PrivateRoute;
