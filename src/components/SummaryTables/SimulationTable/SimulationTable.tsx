import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import routes from '../../../routes/routes';
import scss from '../styles/summary-table.module.scss';

const SimulationTable: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div className={scss.summaryTable}>
            <div className={scss.tableTitle}>
                <span>{t('Simulation parameters')}</span>
            </div>
            <div className={scss.tableBody}>
                <div className={scss.bodyHead}>
                    <span className={scss.headTitle}>{t('Plants & electrical')}</span>
                    <Link to={routes.plantsAndElectrical} className={scss.headButton}>
                        {t('Go to Plants & electrical')}
                    </Link>
                </div>
                <div className={scss.bodyItems}>
                    <div className={scss.bodyItem}>
                        <span className={scss.itemTitle}>{t('Plant versions')}</span>
                        <span className={scss.value}>3</span>
                    </div>
                    <div className={scss.bodyItem}>
                        <span className={scss.itemTitle}>{t('Module versions')}</span>
                        <span className={scss.value}>
                            2 <button className={scss.tableButton}>{t('Quick add')}</button>
                        </span>
                    </div>
                    <div className={scss.bodyItem}>
                        <span className={scss.itemTitle}>{t('Inverter versions')}</span>
                        <span className={scss.value}>
                            6 <button className={scss.tableButton}>{t('Quick add')}</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimulationTable;
