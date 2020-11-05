import React, { FunctionComponent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ToggleNavigation from '../ToggleNavigation';
import routes from '../../routes/routes';

const Sidebar: FunctionComponent = () => {
    const { t } = useTranslation();
    const currentPath = useLocation().pathname;

    return (
        <div className="sidebar">
            <ToggleNavigation classes="overlay" />
            <ul className="navigation">
                <li className="nav-item">
                    <Link
                        to={routes.summary}
                        className={`text-block ${currentPath === routes.summary ? 'active' : ''}`}
                    >
                        <span className="text">{t('Summary')}</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <span className="meta-text">{t('Project parameters')}</span>
                    <Link
                        to={routes.meteo}
                        className={`text-block ${currentPath === routes.meteo ? 'active' : ''}`}
                    >
                        <span className="text">{t('Meteo')}</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <span className="meta-text">{t('Simulation parameters')}</span>
                    <Link
                        to={routes.plantsAndElectrical}
                        className={`text-block ${
                            currentPath === routes.plantsAndElectrical ? 'active' : ''
                        }`}
                    >
                        <span className="text">{t('Plants & electrical')}</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <span className="meta-text">{t('Calculations')}</span>
                    <Link
                        to={routes.calculations}
                        className={`text-block ${
                            currentPath === routes.calculations ? 'active' : ''
                        }`}
                    >
                        <span className="text">{t('Ongoing calculations')}</span>
                    </Link>
                    <Link
                        to={routes.calculated}
                        className={`text-block ${
                            currentPath === routes.calculated ? 'active' : ''
                        }`}
                    >
                        <span className="text">{t('Calculated')}</span>
                        <span className="number">22</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
