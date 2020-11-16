import React, { FunctionComponent, ReactNode, useEffect } from 'react';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import useLocale from '../graphql/locale/useLocale';
import { languages, resources } from './languages';

i18next.init({
    react: {
        wait: true,
    },
    debug: process.env.NODE_ENV === 'development',
    fallbackLng: 'en_US',
    fallbackNS: ['translation'],
    keySeparator: false,
    resources,
    parseMissingKeyHandler: (missing: any) => {
        if (process.env.NODE_ENV === 'development') {
            console.warn('MISSING TRANSLATION:', missing);
        }
        return missing;
    },
});

i18next.languages = languages.map((language) => language.locale);

const I18N: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    const { locale } = useLocale();

    useEffect(() => {
        i18next.changeLanguage(locale);
    }, [locale]);

    return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
};

export default React.memo(I18N);
