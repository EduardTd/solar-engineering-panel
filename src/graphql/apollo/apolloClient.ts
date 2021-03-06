import { ApolloClient, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ELocalStorage } from '../../types/enums';
import { cache } from './cache';

const httpLink = createHttpLink({
    uri: 'https://mb6xi.sse.codesandbox.io/',
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem(ELocalStorage.Token) ?? '';

    return {
        headers: {
            ...headers,
            authorization: token,
        },
    };
});

const apolloClient = new ApolloClient({
    cache,
    link: authLink.concat(httpLink),
});

export default apolloClient;
