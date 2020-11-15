import { createStore } from 'redux';
import createRootReducer from './rootReducer';

export const configureStore = () => {
    const store = createStore(
        createRootReducer(),
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};

export default configureStore;
