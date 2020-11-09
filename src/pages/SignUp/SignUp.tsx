import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

const SignUp: FunctionComponent = () => {
    const { t } = useTranslation();

    return <h2>{t('Sign Up')}</h2>;
};

export default SignUp;
