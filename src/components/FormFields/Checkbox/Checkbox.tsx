import React, { FunctionComponent } from 'react';
import { ErrorMessage, Field, FormikErrors, FormikTouched } from 'formik';

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
                ${errors[checkboxName] && touched[checkboxName] ? 'error' : ''}
            `}
        >
            <Field
                type="checkbox"
                name={checkboxName}
                id={checkboxId}
                className={`custom-checkbox ${
                    errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : ''
                }`}
            />
            <label className="label" htmlFor={checkboxId}>
                {label}
            </label>
            <span className="error-message">
                <ErrorMessage name={checkboxName} />
            </span>
        </div>
    );
};

export default Checkbox;
