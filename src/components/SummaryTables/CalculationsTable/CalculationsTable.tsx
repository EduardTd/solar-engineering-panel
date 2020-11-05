import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import routes from '../../../routes/routes';

const CalculationsTable: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div className="summary-table calculation">
            <div className="table-title">
                <span>{t('Calculations')}</span>
            </div>
            <div className="table-body">
                <div className="body-head">
                    <span className="head-title">{t('Recently calculated')}</span>
                    <Link to={routes.calculated} className="head-button">
                        {t('Go to Calculated')}
                    </Link>
                </div>
                <div className="body-items">
                    <div className="body-item">
                        <span className="item-title">{t('No.')}</span>
                        <span className="value">#22</span>
                        <span className="value">#21</span>
                        <span className="value">#20</span>
                    </div>
                    <div className="body-item">
                        <span className="item-title">{t('Date')}</span>
                        <span className="value">2020-09-17</span>
                        <span className="value">2020-09-08</span>
                        <span className="value">2020-09-05</span>
                    </div>
                    <div className="body-item">
                        <span className="item-title">{t('Type')}</span>
                        <span className="value">{t('Preliminary')}</span>
                        <span className="value">{t('Detailed')}</span>
                        <span className="value">{t('Detailed')}</span>
                    </div>
                    <div className="body-item">
                        <span className="item-title">{t('Configuration')}</span>
                        <span className="value">{t('View')}</span>
                        <span className="value">{t('View')}</span>
                        <span className="value">{t('View')}</span>
                    </div>
                    <div className="body-item">
                        <span className="item-title">{t('Yield')}</span>
                        <span className="value">1000 kWh</span>
                        <span className="value">1020 kWh</span>
                        <span className="value">1310 kWh</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalculationsTable;
