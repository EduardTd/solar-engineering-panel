import React, { FunctionComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';
import routes from './routes';
import useIsLoggedIn from '../graphql/login/useIsLoggedIn';
import { RouteProps } from 'react-router';

const PrivateRoute: FunctionComponent<RouteProps> = (props) => {
    const { isLoggedIn } = useIsLoggedIn();

    return isLoggedIn ? <Route {...props} /> : <Redirect to={routes.logIn} />;
};

export default PrivateRoute;
