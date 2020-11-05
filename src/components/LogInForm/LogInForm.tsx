import React, { FunctionComponent } from 'react';
import { Formik, Form } from 'formik';
import { useTranslation } from 'react-i18next';
import useLogIn from './useLogIn';
import logInSchema from './logInSchema';
import TextField from '../FormFields/TextField';

const LogInForm: FunctionComponent = () => {
    const { t } = useTranslation();
    const { onSubmit } = useLogIn();
    const initialValues = {
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
                <Form className="form">
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
                    <div className="actions-toolbar">
                        <button className="button-green" type="submit">
                            {t('Log in')}
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default LogInForm;
