import React from 'react';
import { Redirect, Route } from 'react-router';

const AdminPrivateRoute = ({ children, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }) =>
            sessionStorage.getItem('admin')  ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/AdminLogin",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminPrivateRoute;