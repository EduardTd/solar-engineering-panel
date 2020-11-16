import { InMemoryCache } from '@apollo/client';
import { ELocalStorage } from '../../types/enums';

export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                isLoggedIn() {
                    return setIsLoggedInVar();
                },
                locale() {
                    return setLocaleVar();
                },
            },
        },
    },
});

export const setIsLoggedInVar = cache.makeVar<boolean>(false);
export const setLocaleVar = cache.makeVar<string>(
    localStorage.getItem(ELocalStorage.Locale) || 'en_US'
);
