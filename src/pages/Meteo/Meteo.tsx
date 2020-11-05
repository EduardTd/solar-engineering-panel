import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import PanelTemplate from '../../components/PanelTemplate';

const Meteo: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <PanelTemplate pageClass="meteo-page">
            <h2>{t('Meteo')}</h2>
        </PanelTemplate>
    );
};

export default Meteo;
