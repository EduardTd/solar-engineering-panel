import React, { FunctionComponent } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { RouteProps } from 'react-router';
import useIsLoggedIn from '../graphql/login/useIsLoggedIn';
import routes from './routes';

const PublicOnlyRoute: FunctionComponent<RouteProps> = (props) => {
    const { isLoggedIn } = useIsLoggedIn();

    return isLoggedIn ? <Redirect to={routes.summary} /> : <Route {...props} />;
};

export default PublicOnlyRoute;
