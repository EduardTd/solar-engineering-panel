import { ApolloClient } from '@apollo/client';
import { cache } from './cache';
import { ELocalStorage } from '../../types/enums';

const apolloClient = new ApolloClient({
    cache,
    uri: 'http://localhost:8500/',
    headers: {
        authorization: localStorage.getItem(ELocalStorage.Token) ?? '',
    },
});

export default apolloClient;
