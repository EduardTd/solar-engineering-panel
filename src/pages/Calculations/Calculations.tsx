import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

const Calculations: FunctionComponent = () => {
    const { t } = useTranslation();

    return <h2>{t('Ongoing calculations')}</h2>;
};

export default Calculations;
