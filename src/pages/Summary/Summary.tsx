import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import PanelTemplate from '../../components/PanelTemplate';
import { CalculationsTable, ProjectTable, SimulationTable } from '../../components/SummaryTables';

const Summary: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <PanelTemplate>
            <h2>{t('Summary')}</h2>
            <ProjectTable />
            <SimulationTable />
            <CalculationsTable />
        </PanelTemplate>
    );
};

export default Summary;
