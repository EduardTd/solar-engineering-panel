import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

const Meteo: FunctionComponent = () => {
    const { t } = useTranslation();

    return <h2>{t('Meteo')}</h2>;
};

export default Meteo;
