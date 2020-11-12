import { InMemoryCache } from '@apollo/client';

export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                isLoggedIn() {
                    return setIsLoggedInVar();
                },
            },
        },
    },
});

export const setIsLoggedInVar = cache.makeVar<boolean>(false);
