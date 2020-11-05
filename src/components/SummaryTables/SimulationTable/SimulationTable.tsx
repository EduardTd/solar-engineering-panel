import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import routes from '../../../routes/routes';

const SimulationTable: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div className="summary-table">
            <div className="table-title">
                <span>{t('Simulation parameters')}</span>
            </div>
            <div className="table-body">
                <div className="body-head">
                    <span className="head-title">{t('Plants & electrical')}</span>
                    <Link to={routes.plantsAndElectrical} className="head-button">
                        {t('Go to Plants & electrical')}
                    </Link>
                </div>
                <div className="body-items">
                    <div className="body-item">
                        <span className="item-title">{t('Plant versions')}</span>
                        <span className="value">3</span>
                    </div>
                    <div className="body-item">
                        <span className="item-title">{t('Module versions')}</span>
                        <span className="value">
                            2 <button className="table-button">{t('Quick add')}</button>
                        </span>
                    </div>
                    <div className="body-item">
                        <span className="item-title">{t('Inverter versions')}</span>
                        <span className="value">
                            6 <button className="table-button">{t('Quick add')}</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimulationTable;
