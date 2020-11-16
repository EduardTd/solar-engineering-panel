import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { setIsLoggedInVar } from '../apollo/cache';
import { ELocalStorage } from '../../types/enums';
import { IIsLoggedIn, TUseIsLoggedIn } from '../../types/loginTypes';
import { IS_LOGGED_IN, IS_TOKEN_SAME } from './query';

const useIsLoggedIn = () => {
    const [isLoaded, setLoaded] = useState(false);
    const { data } = useQuery<IIsLoggedIn>(IS_LOGGED_IN);
    const isLoggedIn = data?.isLoggedIn;

    useQuery(IS_TOKEN_SAME, {
        variables: {
            token: localStorage.getItem(ELocalStorage.Token),
        },
        onCompleted({ isTokenSame }) {
            if (isTokenSame && isLoggedIn) {
                return;
            }

            setIsLoggedInVar(isTokenSame);
            setLoaded(true);
        },
    });

    return { isLoaded, isLoggedIn };
};

export default useIsLoggedIn;
