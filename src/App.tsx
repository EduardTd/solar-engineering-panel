import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import IntlProvider from './i18n/IntlProvider';
import configureStore from './store';
// import { ModalContextProvider } from './context/ModalContext';
// import { CardsContextProvider } from './context/CardsContext';
// import { NoticeContextProvider } from './context/NoticeContext';
// import { NavigationContextProvider } from './context/NavigationContext';
// import { withProviders } from './context/withProviders';
import PagesHandler from './pages/PagesHandler';
import './assets/styles/styles.scss';
import history from './store/history';

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <IntlProvider>
                    <PagesHandler />
                </IntlProvider>
            </Router>
        </Provider>
    );
}

export default App;
