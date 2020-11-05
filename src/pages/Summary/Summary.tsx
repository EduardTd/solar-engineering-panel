import React, { FunctionComponent } from 'react';
import PanelTemplate from '../../components/PanelTemplate';
import { CalculationsTable, ProjectTable, SimulationTable } from '../../components/SummaryTables';

const Summary: FunctionComponent = () => {
    return (
        <PanelTemplate pageClass="summary-page">
            <h2 className="panel-title">Summary</h2>
            <ProjectTable />
            <SimulationTable />
            <CalculationsTable />
        </PanelTemplate>
    );
};

export default Summary;
