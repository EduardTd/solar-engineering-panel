import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

const Summary: FunctionComponent = () => {
    const { t } = useTranslation();

    return <h2>{t('Summary')}</h2>;
};

export default Summary;
