import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import routes from '../../../routes/routes';
import scss from '../styles/summary-table.module.scss';

const CalculationsTable: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div className={`${scss.summaryTable} ${scss.calculation}`}>
            <div className={scss.tableTitle}>
                <span>{t('Calculations')}</span>
            </div>
            <div className={scss.tableBody}>
                <div className={scss.bodyHead}>
                    <span className={scss.headTitle}>{t('Recently calculated')}</span>
                    <Link to={routes.calculated} className={scss.headButton}>
                        {t('Go to Calculated')}
                    </Link>
                </div>
                <div className={scss.bodyItems}>
                    <div className={scss.bodyItem}>
                        <span className={scss.itemTitle}>{t('No.')}</span>
                        <span className={scss.value}>#22</span>
                        <span className={scss.value}>#21</span>
                        <span className={scss.value}>#20</span>
                    </div>
                    <div className={scss.bodyItem}>
                        <span className={scss.itemTitle}>{t('Date')}</span>
                        <span className={scss.value}>2020-09-17</span>
                        <span className={scss.value}>2020-09-08</span>
                        <span className={scss.value}>2020-09-05</span>
                    </div>
                    <div className={scss.bodyItem}>
                        <span className={scss.itemTitle}>{t('Type')}</span>
                        <span className={scss.value}>{t('Preliminary')}</span>
                        <span className={scss.value}>{t('Detailed')}</span>
                        <span className={scss.value}>{t('Detailed')}</span>
                    </div>
                    <div className={scss.bodyItem}>
                        <span className={scss.itemTitle}>{t('Configuration')}</span>
                        <span className={scss.value}>{t('View')}</span>
                        <span className={scss.value}>{t('View')}</span>
                        <span className={scss.value}>{t('View')}</span>
                    </div>
                    <div className={scss.bodyItem}>
                        <span className={scss.itemTitle}>{t('Yield')}</span>
                        <span className={scss.value}>1000 kWh</span>
                        <span className={scss.value}>1020 kWh</span>
                        <span className={scss.value}>1310 kWh</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalculationsTable;
