import { useMutation } from '@apollo/client';
import { useCallback, useContext } from 'react';
import { TLogInFormValues } from '../../types/formValues';
import { NoticeContext } from '../../context/NoticeContext';
import { ELocalStorage, ENoticeType } from '../../types/enums';
import { setIsLoggedInVar } from '../apollo/cache';
import * as types from '../../types/loginTypes';
import { LOGIN_MUTATION } from './query';

export const useLogin: types.TUseLogin = () => {
    const { provideNoticeData } = useContext(NoticeContext);
    const [login, { loading }] = useMutation<types.ILogin, types.ILoginVariables>(LOGIN_MUTATION, {
        onCompleted({ login }) {
            const { success, message, data }: types.ILoginResponse = login;

            if (!success) {
                provideNoticeData(message, ENoticeType.Error);

                return;
            }

            setIsLoggedInVar(true);
            localStorage.setItem(ELocalStorage.Token, data?.token as string);
            localStorage.setItem(ELocalStorage.UserId, data?.id as string);
            provideNoticeData(message, ENoticeType.Success);
        },
    });

    const onSubmit = useCallback(({ email, password }: TLogInFormValues) => {
        login({
            variables: {
                email,
                password,
            },
        });
    }, []);

    return { onSubmit, loading };
};
