import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Calculated from './pages/Calculated';
import LogIn from './pages/LogIn';
import Summary from './pages/Summary';
import PlantsAndElectrical from './pages/PlantsAndElectrical';
import Meteo from './pages/Meteo';
import Calculations from './pages/Calculations';
import IntlProvider from './i18n/IntlProvider';
import routes from './routes/routes';
import configureStore from './store';
import './App.scss';

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <IntlProvider>
                    <Switch>
                        <Route exact path={routes.logIn} component={LogIn} />
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
                    </Switch>
                </IntlProvider>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
