import React, { FunctionComponent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import scss from '../styles/user-section.module.scss';
import { TLanguageData } from '../../../../types/languageTypes';
import useLocale from '../../../../graphql/locale/useLocale';

type TLanguageItem = {
    language: TLanguageData;
};

const LanguageItem: FunctionComponent<TLanguageItem> = ({ language }) => {
    const { t } = useTranslation();
    const { changeLocale } = useLocale();
    const isCurrentLocale = i18next.language === language.locale;
    const activeClass = isCurrentLocale ? scss.selectedLanguage : '';
    const locale = language.locale;

    const handleLocaleChange = useCallback(() => {
        if (isCurrentLocale) {
            return;
        }
        changeLocale(locale);
    }, [isCurrentLocale, locale, changeLocale]);

    return (
        <li className={`${scss.languageItem} ${activeClass}`} onClick={handleLocaleChange}>
            <span>{t(language.name)}</span>
        </li>
    );
};

export default LanguageItem;
