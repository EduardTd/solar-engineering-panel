import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import routes from '../../../routes/routes';
import scss from '../styles/summary-table.module.scss';

const ProjectTable: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div className={scss.summaryTable}>
            <div className={scss.tableTitle}>
                <span>{t('Project parameters')}</span>
            </div>
            <div className={scss.tableBody}>
                <div className={scss.bodyHead}>
                    <span className={scss.headTitle}>{t('Meteo')}</span>
                    <Link to={routes.meteo} className={scss.headButton}>
                        {t('Go to Meteo')}
                    </Link>
                </div>
                <div className={scss.bodyItems}>
                    <div className={scss.bodyItem}>
                        <span className={scss.itemTitle}>{t('Location')}</span>
                        <span className={scss.value}>{t('Kaunas, Lithuania')}</span>
                    </div>
                    <div className={scss.bodyItem}>
                        <span className={scss.itemTitle}>{t('Coordinates')}</span>
                        <span className={scss.value}>54.8985° N, 23.9036° E</span>
                    </div>
                    <div className={scss.bodyItem}>
                        <span className={scss.itemTitle}>{t('Meteo data source')}</span>
                        <span className={scss.value}>{t('PVGIS')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectTable;
