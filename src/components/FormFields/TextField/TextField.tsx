import React, { FunctionComponent } from 'react';
import { ErrorMessage, Field, FormikErrors, FormikTouched } from 'formik';

type TTextField = {
    errors: FormikErrors<any>;
    touched: FormikTouched<any>;
    placeholder?: string;
    label: string;
    fieldId: string;
    fieldName: string;
    component?: string;
    type?: string;
    unit?: string;
    disabled?: boolean;
};

const TextField: FunctionComponent<TTextField> = ({
    errors,
    touched,
    placeholder,
    label,
    fieldId,
    fieldName,
    component,
    type,
    unit,
    disabled,
}) => {
    const controlType = component ? component : 'input';
    const errorClass = `${errors[fieldName] && touched[fieldName] ? 'error' : ''}`;
    const disabledClass = `${disabled ? 'disabled' : ''}`;
    const textFieldClass = `text-field ${errorClass} ${disabledClass}`;

    return (
        <div className={textFieldClass}>
            <div className={`control ${controlType}`}>
                <label className="label" htmlFor={fieldId}>
                    {label}
                </label>
                <div className="field-wrapper">
                    {unit ? <span className="unit">{unit}</span> : null}
                    <Field
                        className="input-text"
                        placeholder={placeholder ? placeholder : ''}
                        id={fieldId}
                        name={fieldName}
                        component={component}
                        type={type}
                        disabled={!!disabled}
                    />
                </div>
                <ErrorMessage component="span" className="error-message" name={fieldName} />
            </div>
        </div>
    );
};

export default TextField;
