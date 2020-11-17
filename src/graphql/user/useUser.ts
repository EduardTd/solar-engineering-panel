import { useLazyQuery, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { ELocalStorage } from '../../types/enums';
import { IGetUser } from '../../types/userTypes';
import { callQueryOnMount } from '../utils';
import { USER_DATA } from './query';

const useUser = () => {
    const [getUser, { data }] = useLazyQuery<IGetUser>(USER_DATA, {
        variables: {
            userId: localStorage.getItem(ELocalStorage.UserId),
        },
    });
    useEffect(callQueryOnMount(getUser), [getUser]);

    const userData = data ? data.getUser : null;

    return { userData };
};

export default useUser;
