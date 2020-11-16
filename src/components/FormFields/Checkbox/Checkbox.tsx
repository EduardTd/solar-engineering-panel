import React, { FunctionComponent } from 'react';
import { ErrorMessage, Field, FormikErrors, FormikTouched } from 'formik';
import scss from './styles/checkbox.module.scss';

type TTextField = {
    errors: FormikErrors<any>;
    touched: FormikTouched<any>;
    label: string;
    checkboxId: string;
    checkboxName: string;
};

const Checkbox: FunctionComponent<TTextField> = ({
    errors,
    touched,
    label,
    checkboxId,
    checkboxName,
}) => {
    return (
        <div
            className={`
                checkbox-field 
                ${errors[`${checkboxName}`] && touched[`${checkboxName}`] ? 'error' : ''}
            `}
        >
            <Field
                type="checkbox"
                name={checkboxName}
                id={checkboxId}
                className={`${scss.customCheckbox} ${
                    errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : ''
                }`}
            />
            <label className={scss.label} htmlFor={checkboxId}>
                {label}
            </label>
            <span>
                <ErrorMessage name={checkboxName} />
            </span>
        </div>
    );
};

export default Checkbox;
