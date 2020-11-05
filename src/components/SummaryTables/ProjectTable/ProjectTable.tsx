import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import routes from '../../../routes/routes';

const ProjectTable: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div className="summary-table">
            <div className="table-title">
                <span>{t('Project parameters')}</span>
            </div>
            <div className="table-body">
                <div className="body-head">
                    <span className="head-title">{t('Meteo')}</span>
                    <Link to={routes.meteo} className="head-button">
                        {t('Go to Meteo')}
                    </Link>
                </div>
                <div className="body-items">
                    <div className="body-item">
                        <span className="item-title">{t('Location')}</span>
                        <span className="value">{t('Kaunas, Lithuania')}</span>
                    </div>
                    <div className="body-item">
                        <span className="item-title">{t('Coordinates')}</span>
                        <span className="value">54.8985° N, 23.9036° E</span>
                    </div>
                    <div className="body-item">
                        <span className="item-title">{t('Meteo data source')}</span>
                        <span className="value">{t('PVGIS')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectTable;
