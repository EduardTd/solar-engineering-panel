import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import PanelTemplate from '../../components/PanelTemplate';

const Calculations: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <PanelTemplate>
            <h2>{t('Ongoing calculations')}</h2>
        </PanelTemplate>
    );
};

export default Calculations;
