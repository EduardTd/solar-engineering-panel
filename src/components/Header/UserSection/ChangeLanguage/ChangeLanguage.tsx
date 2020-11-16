import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { languages } from '../../../../i18n/languages';
import scss from '../styles/user-section.module.scss';
import LanguageItem from './LanguageItem';

const ChangeLanguage: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div className={scss.changeLanguage}>
            <div className={scss.languageHead}>
                <span>{t('Change language')}</span>
            </div>
            <ul className={scss.languageList}>
                {languages.map((language, index) => (
                    <LanguageItem key={`${language.name}${index}`} language={language} />
                ))}
            </ul>
        </div>
    );
};

export default ChangeLanguage;
