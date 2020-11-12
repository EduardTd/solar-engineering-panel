import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../../routes/routes';
import LogIn from '../LogIn';
import Summary from '../Summary';
import PlantsAndElectrical from '../PlantsAndElectrical';
import Meteo from '../Meteo';
import Calculations from '../Calculations';
import Calculated from '../Calculated';
import { withProviders } from '../../context/withProviders';
import * as ContextProvider from '../../context';
import SignUp from '../SignUp';
import useIsLoggedIn from '../../graphql/login/useIsLoggedIn';
import PageNotFound from '../PageNotFound';
import PrivateRoute from '../../routes/PrivateRoute';
import PublicOnlyRoute from '../../routes/PublicOnlyRoute';
import Loading from '../../components/Loading';

const PagesHandler: FunctionComponent = () => {
    const { isLoaded } = useIsLoggedIn();

    if (!isLoaded) {
        return <Loading />;
    }

    return (
        <Switch>
            <PublicOnlyRoute exact path={routes.logIn} component={LogIn} />
            <PublicOnlyRoute exact path={routes.signUp} component={SignUp} />
            <PrivateRoute exact path={routes.summary} component={Summary} />
            <PrivateRoute exact path={routes.plantsAndElectrical} component={PlantsAndElectrical} />
            <PrivateRoute exact path={routes.meteo} component={Meteo} />
            <PrivateRoute exact path={routes.calculations} component={Calculations} />
            <PrivateRoute exact path={routes.calculated} component={Calculated} />
            <Route component={PageNotFound} />
        </Switch>
    );
};

export default withProviders(PagesHandler, { ...ContextProvider });
