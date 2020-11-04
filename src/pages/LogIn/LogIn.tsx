import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

const LogIn: FunctionComponent = () => {
    const { t } = useTranslation();

    return <h2>{t('Log in')}</h2>;
};

export default LogIn;
