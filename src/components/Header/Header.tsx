import React, { FunctionComponent, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ReactComponent as HamburgerIcon } from '../../assets/images/icons/hamburger-icon.svg';
import { ReactComponent as HomeIcon } from '../../assets/images/icons/home-icon.svg';
import ToggleNavigation from '../ToggleNavigation';
import routes from '../../routes/routes';
import scss from './styles/header.module.scss';
import { setIsLoggedInVar } from '../../graphql/apollo/cache';
import { useApolloClient } from '@apollo/client';

const Header: FunctionComponent = () => {
    const { t } = useTranslation();
    const { cache } = useApolloClient();

    const handleLogOut = useCallback(() => {
        cache.evict({ fieldName: 'getUser' });
        cache.gc();
        localStorage.clear();
        setIsLoggedInVar(false);
    }, []);

    return (
        <header className={scss.header}>
            <div className={scss.container}>
                <ToggleNavigation classes={scss.hamburger}>
                    <HamburgerIcon />
                </ToggleNavigation>
                <Link className={scss.homeLink} to={routes.summary} title={t('Back to projects')}>
                    <HomeIcon />
                    <span className={scss.homeLinkText}>{t('Back to projects')}</span>
                </Link>
                <div className={scss.headerTitle}>
                    <span>{t('Kaunas park')}</span>
                </div>
                <div className={scss.userBlock} title="Tester Testman">
                    <span className={scss.fullName}>Tester Testman</span>
                    <span className={scss.userIcon} onClick={handleLogOut}>
                        A
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
