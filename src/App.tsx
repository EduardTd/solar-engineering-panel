import React from 'react';
import { Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { createBrowserHistory } from 'history';
import IntlProvider from './i18n/IntlProvider';
import PagesHandler from './pages/PagesHandler';
import './assets/styles/styles.scss';
import PageHead from './components/PageHead';

function App() {
    return (
        <Router history={createBrowserHistory()}>
            <IntlProvider>
                <HelmetProvider>
                    <PageHead />
                    <PagesHandler />
                </HelmetProvider>
            </IntlProvider>
        </Router>
    );
}

export default App;
