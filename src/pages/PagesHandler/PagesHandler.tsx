import React, { FunctionComponent, Fragment, useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from '../../routes/routes';
import LogIn from '../LogIn';
import Summary from '../Summary';
import PlantsAndElectrical from '../PlantsAndElectrical';
import Meteo from '../Meteo';
import Calculations from '../Calculations';
import Calculated from '../Calculated';
import { useSelector } from 'react-redux';
import { getToken } from '../../store/app/selectors';
import { ESessionStorageKey } from '../../types/enums';
import { withProviders } from '../../context/withProviders';
import * as ContextProvider from '../../context';

const PagesHandler: FunctionComponent = () => {
    const token = useSelector(getToken);
    const [appLoaded, setAppLoaded] = useState(false);
    const [hasToken, setHasToken] = useState(false);

    useEffect(() => {
        setAppLoaded(true);
        setHasToken(Boolean(sessionStorage.getItem(ESessionStorageKey.Token)));
    }, []);

    if (!appLoaded) {
        return <Fragment />;
    }

    return (
        <Switch>
            <Route exact path={routes.logIn} component={LogIn} />
            {hasToken || token ? (
                <>
                    <Route exact path={routes.summary} component={Summary} />
                    <Route
                        exact
                        path={routes.plantsAndElectrical}
                        component={PlantsAndElectrical}
                    />
                    <Route exact path={routes.meteo} component={Meteo} />
                    <Route exact path={routes.calculations} component={Calculations} />
                    <Route exact path={routes.calculated} component={Calculated} />

                    <Route render={() => '404!'} />
                </>
            ) : (
                <Route path="/">
                    <Redirect to={routes.logIn} />
                </Route>
            )}
        </Switch>
    );
};

export default withProviders(PagesHandler, { ...ContextProvider });
