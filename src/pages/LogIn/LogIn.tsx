import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import routes from '../../routes/routes';
import GlobalNotice from '../../components/GlobalNotice';
import LogInForm from '../../components/LogInForm';
import scss from './styles/log-in-page.module.scss';

const LogIn: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div className={scss.logInPage}>
            <GlobalNotice />
            <div className={scss.logInBlock}>
                <div className={scss.headBlock}>
                    <Logo className={scss.headLogo} />
                    <h2>{t('Log in')}</h2>
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
    );
};

export default LogIn;
