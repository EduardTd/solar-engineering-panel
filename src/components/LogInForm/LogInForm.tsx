import React, { FunctionComponent, Fragment } from 'react';
import { Formik, Form } from 'formik';
import { useTranslation } from 'react-i18next';
import TextField from '../FormFields/TextField';
import { useLogin } from '../../graphql/login/useLogin';
import { TLogInFormValues } from '../../types/formValues';
import Loading from '../Loading';
import scss from './styles/log-in-form.module.scss';
import logInSchema from './logInSchema';

const LogInForm: FunctionComponent = () => {
    const { t } = useTranslation();
    const { onSubmit, loading } = useLogin();
    const initialValues: TLogInFormValues = {
        email: '',
        password: '',
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={logInSchema}
            validateOnBlur={false}
            onSubmit={onSubmit}
        >
            {({ errors, touched }) => (
                <Form>
                    <TextField
                        errors={errors}
                        touched={touched}
                        label={t('Email')}
                        fieldId="userEmail"
                        fieldName="email"
                    />
                    <TextField
                        errors={errors}
                        touched={touched}
                        label={t('Password')}
                        fieldId="userPassword"
                        fieldName="password"
                        type="password"
                    />
                    <div className={scss.actionsToolbar}>
                        {loading ? <Loading /> : <Fragment />}
                        <button className={scss.buttonGreen} type="submit">
                            {t('Log in')}
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default LogInForm;
