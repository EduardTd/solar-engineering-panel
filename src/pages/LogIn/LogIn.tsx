import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ESessionStorageKey } from '../../types/enums';
import routes from '../../routes/routes';
import GlobalNotice from '../../components/GlobalNotice';
import LogInForm from '../../components/LogInForm';

const LogIn: FunctionComponent = () => {
    const { t } = useTranslation();
    const { replace } = useHistory();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem(ESessionStorageKey.Token)) {
            replace(routes.summary);
        }

        setLoaded(true);
    }, []);

    return loaded ? (
        <div className="log-in-page">
            <GlobalNotice />
            <div className="log-in-block">
                <div className="head-block">
                    <Logo className="logo" />
                    <h2>Log in</h2>
                    <span className="text">{t('Enter your details below')}</span>
                </div>
                <LogInForm />
                <div className="sign-up-text">
                    <span className="text">{t('Don’t have an account?')} </span>
                    <a href="/" className="link">
                        Sign Up
                    </a>
                </div>
            </div>
        </div>
    ) : (
        <Fragment />
    );
};

export default LogIn;
