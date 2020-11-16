import React, { FunctionComponent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import i18next from 'i18next';
import scss from '../styles/user-section.module.scss';
import { TLanguageData } from '../../../../types/languageTypes';
import { setLocale } from '../../../../store/app/actions';
import { Locale } from '../../../../types/storeTypes';

type TLanguageItem = {
    language: TLanguageData;
};

const LanguageItem: FunctionComponent<TLanguageItem> = ({ language }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isCurrentLocale = i18next.language === language.locale;
    const activeClass = isCurrentLocale ? scss.selectedLanguage : '';

    const handleLocaleChange = useCallback(() => {
        if (isCurrentLocale) {
            return;
        }

        dispatch(setLocale(language.locale as Locale));
    }, [dispatch, isCurrentLocale]);

    return (
        <li className={`${scss.languageItem} ${activeClass}`} onClick={handleLocaleChange}>
            <span>{t(language.name)}</span>
        </li>
    );
};

export default LanguageItem;
