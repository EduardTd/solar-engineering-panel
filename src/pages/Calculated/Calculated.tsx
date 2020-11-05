import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import PanelTemplate from '../../components/PanelTemplate';

const Calculated: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <PanelTemplate pageClass="calculated-page">
            <h2>{t('Calculated')}</h2>
        </PanelTemplate>
    );
};

export default Calculated;
