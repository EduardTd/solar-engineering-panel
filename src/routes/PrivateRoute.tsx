import React, { FunctionComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router';
import useIsLoggedIn from '../graphql/login/useIsLoggedIn';
import routes from './routes';

const PrivateRoute: FunctionComponent<RouteProps> = (props) => {
    const { isLoggedIn } = useIsLoggedIn();

    return isLoggedIn ? <Route {...props} /> : <Redirect to={routes.logIn} />;
};

export default PrivateRoute;
