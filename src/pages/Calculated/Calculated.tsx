import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

const Calculated: FunctionComponent = () => {
    const { t } = useTranslation();

    return <h2>{t('Calculated')}</h2>;
};

export default Calculated;
