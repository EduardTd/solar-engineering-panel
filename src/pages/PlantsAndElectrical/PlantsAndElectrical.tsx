import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

const PlantsAndElectrical: FunctionComponent = () => {
    const { t } = useTranslation();

    return <h2>{t('Plants & electrical')}</h2>;
};

export default PlantsAndElectrical;
