import { useLazyQuery } from '@apollo/client';
import { useCallback, useEffect } from 'react';
import { setLocaleVar } from '../apollo/cache';
import { ELocalStorage } from '../../types/enums';
import { callQueryOnMount } from '../utils';
import { LOCALE } from './query';

const useLocale = () => {
    const [getLocale, { data }] = useLazyQuery(LOCALE);
    useEffect(callQueryOnMount(getLocale), [getLocale]);

    localStorage.setItem(ELocalStorage.Locale, data?.locale);

    const changeLocale = useCallback((locale: string) => {
        setLocaleVar(locale);
    }, []);

    return { locale: data?.locale, changeLocale };
};

export default useLocale;
