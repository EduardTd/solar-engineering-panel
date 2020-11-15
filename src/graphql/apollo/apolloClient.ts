import { ApolloClient } from '@apollo/client';
import { ELocalStorage } from '../../types/enums';
import { cache } from './cache';

const apolloClient = new ApolloClient({
    cache,
    uri: 'http://localhost:8500/',
    headers: {
        authorization: localStorage.getItem(ELocalStorage.Token) ?? '',
    },
});

export default apolloClient;
