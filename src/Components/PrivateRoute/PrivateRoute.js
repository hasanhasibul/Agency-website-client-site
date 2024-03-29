import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { userContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [service,setService,loginInfo,setLoginInfo] = useContext(userContext);
    return (
        <Route
          {...rest}
          render={({ location }) =>
          loginInfo.email || sessionStorage.getItem('idToken') ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
};

export default PrivateRoute;