import React, { FunctionComponent } from 'react';
import useIsLoggedIn from '../graphql/login/useIsLoggedIn';
import { Redirect, Route } from 'react-router-dom';
import routes from './routes';
import { RouteProps } from 'react-router';

const PublicOnlyRoute: FunctionComponent<RouteProps> = (props) => {
    const { isLoggedIn } = useIsLoggedIn();

    return isLoggedIn ? <Redirect to={routes.summary} /> : <Route {...props} />;
};

export default PublicOnlyRoute;
