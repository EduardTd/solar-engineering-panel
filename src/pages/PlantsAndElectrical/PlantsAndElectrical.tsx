import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import PanelTemplate from '../../components/PanelTemplate';
import StartCalculating from '../../components/StartCalculating';
import InfoSection from '../../components/InfoSection';
import CalculationCards from '../../components/CalculationCards';

const PlantsAndElectrical: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <PanelTemplate>
            <h2>{t('Plants & electrical')}</h2>
            <StartCalculating />
            <InfoSection />
            <CalculationCards />
        </PanelTemplate>
    );
};

export default PlantsAndElectrical;
