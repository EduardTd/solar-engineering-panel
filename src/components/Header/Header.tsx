import React, { FunctionComponent, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ReactComponent as HamburgerIcon } from '../../assets/images/icons/hamburger-icon.svg';
import { ReactComponent as HomeIcon } from '../../assets/images/icons/home-icon.svg';
import ToggleNavigation from '../ToggleNavigation';
import { ESessionStorageKey } from '../../types/enums';
import { setUserToken } from '../../store/app/actions';
import routes from '../../routes/routes';

const Header: FunctionComponent = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { replace } = useHistory();
    const handleLogOut = useCallback(() => {
        sessionStorage.removeItem(ESessionStorageKey.Token);
        dispatch(setUserToken(''));

        replace(routes.logIn);
    }, []);

    return (
        <header className="header">
            <div className="container">
                <ToggleNavigation classes="hamburger">
                    <HamburgerIcon />
                </ToggleNavigation>
                <Link className="home-link" to={routes.summary} title={t('Back to projects')}>
                    <HomeIcon />
                    <span className="text">{t('Back to projects')}</span>
                </Link>
                <div className="header-title">
                    <span>{t('Kaunas park')}</span>
                </div>
                <div className="user-block" title="Tester Testman">
                    <span className="full-name">Tester Testman</span>
                    <span className="user-icon" onClick={handleLogOut}>
                        A
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
