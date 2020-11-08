import React, { FunctionComponent, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ToggleNavigation from '../ToggleNavigation';
import { NavigationContext } from '../../context/NavigationContext';
import routes from '../../routes/routes';
import scss from './styles/sidebar.module.scss';

const Sidebar: FunctionComponent = () => {
    const { t } = useTranslation();
    const { navState } = useContext(NavigationContext);
    const currentPath = useLocation().pathname;

    return (
        <div className={`${scss.sidebar} ${navState ? scss.opened : ''}`}>
            <ToggleNavigation classes={scss.overlay} />
            <ul className={scss.navigation}>
                <li className={scss.navItem}>
                    <Link
                        to={routes.summary}
                        className={`${scss.textBlock} ${
                            currentPath === routes.summary ? scss.active : ''
                        }`}
                    >
                        <span className={scss.navItemTitle}>{t('Summary')}</span>
                    </Link>
                </li>
                <li className={scss.navItem}>
                    <span className={scss.metaText}>{t('Project parameters')}</span>
                    <Link
                        to={routes.meteo}
                        className={`${scss.textBlock} ${
                            currentPath === routes.meteo ? scss.active : ''
                        }`}
                    >
                        <span className={scss.navItemTitle}>{t('Meteo')}</span>
                    </Link>
                </li>
                <li className={scss.navItem}>
                    <span className={scss.metaText}>{t('Simulation parameters')}</span>
                    <Link
                        to={routes.plantsAndElectrical}
                        className={`${scss.textBlock} ${
                            currentPath === routes.plantsAndElectrical ? scss.active : ''
                        }`}
                    >
                        <span className={scss.navItemTitle}>{t('Plants & electrical')}</span>
                    </Link>
                </li>
                <li className={scss.navItem}>
                    <span className={scss.metaText}>{t('Calculations')}</span>
                    <Link
                        to={routes.calculations}
                        className={`${scss.textBlock} ${
                            currentPath === routes.calculations ? scss.active : ''
                        }`}
                    >
                        <span className={scss.navItemTitle}>{t('Ongoing calculations')}</span>
                    </Link>
                    <Link
                        to={routes.calculated}
                        className={`${scss.textBlock} ${
                            currentPath === routes.calculated ? scss.active : ''
                        }`}
                    >
                        <span className={scss.navItemTitle}>{t('Calculated')}</span>
                        <span className={scss.number}>22</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
