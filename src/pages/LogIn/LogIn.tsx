import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ESessionStorageKey } from '../../types/enums';
import routes from '../../routes/routes';
import GlobalNotice from '../../components/GlobalNotice';
import LogInForm from '../../components/LogInForm';
import scss from './styles/log-in-page.module.scss';

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
        <div className={scss.logInPage}>
            <GlobalNotice />
            <div className={scss.logInBlock}>
                <div className={scss.headBlock}>
                    <Logo className={scss.headLogo} />
                    <h2>Log in</h2>
                    <span className={scss.headText}>{t('Enter your details below')}</span>
                </div>
                <LogInForm />
                <div className={scss.signUp}>
                    <span className={scss.signUpText}>{t('Don’t have an account?')} </span>
                    <Link className={scss.signUpLink} to={routes.signUp} title={t('Sign Up')}>
                        {t('Sign Up')}
                    </Link>
                </div>
            </div>
        </div>
    ) : (
        <Fragment />
    );
};

export default LogIn;
