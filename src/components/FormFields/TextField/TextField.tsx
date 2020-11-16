import React, { FunctionComponent } from 'react';
import { ErrorMessage, Field, FormikErrors, FormikTouched } from 'formik';
import scss from './styles/textField.module.scss';

type TTextField = {
    errors: FormikErrors<any>;
    touched: FormikTouched<any>;
    placeholder?: string;
    label: string;
    fieldId: string;
    fieldName: string;
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
    type,
    unit,
    disabled,
}) => {
    const errorClass = errors[`${fieldName}`] && touched[`${fieldName}`] ? scss.error : '';
    const disabledClass = disabled ? scss.disabled : '';
    const textFieldClass = `${scss.textField} ${errorClass} ${disabledClass}`;

    return (
        <div className={textFieldClass}>
            <label className={scss.label} htmlFor={fieldId}>
                {label}
            </label>
            <div className={scss.fieldWrapper}>
                {unit ? <span className={scss.unit}>{unit}</span> : null}
                <Field
                    className={scss.textInput}
                    placeholder={placeholder ? placeholder : ''}
                    id={fieldId}
                    name={fieldName}
                    component="input"
                    type={type}
                    disabled={!!disabled}
                />
            </div>
            <ErrorMessage component="span" className={scss.errorMessage} name={fieldName} />
        </div>
    );
};

export default TextField;
