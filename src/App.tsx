import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import IntlProvider from './i18n/IntlProvider';
import configureStore from './store';
import PagesHandler from './pages/PagesHandler';
import './assets/styles/styles.scss';
import history from './store/history';
import PageHead from './components/PageHead';

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <IntlProvider>
                    <HelmetProvider>
                        <PageHead />
                        <PagesHandler />
                    </HelmetProvider>
                </IntlProvider>
            </Router>
        </Provider>
    );
}

export default App;
