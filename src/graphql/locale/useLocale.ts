import { useQuery } from '@apollo/client';
import { useCallback } from 'react';
import { setLocaleVar } from '../apollo/cache';
import { ELocalStorage } from '../../types/enums';
import { LOCALE } from './query';

const useLocale = () => {
    const { data } = useQuery(LOCALE);
    localStorage.setItem(ELocalStorage.Locale, data?.locale);

    const changeLocale = useCallback((locale: string) => {
        setLocaleVar(locale);
    }, []);

    return { locale: data?.locale, changeLocale };
};

export default useLocale;
