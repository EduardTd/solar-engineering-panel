import React, { FunctionComponent } from 'react';
import { ErrorMessage, FormikErrors, FormikTouched } from 'formik';
import { TSelectOption } from '../../../types/formValues';
import scss from './styles/selectField.module.scss';

type TTextField = {
    errors: FormikErrors<any>;
    touched: FormikTouched<any>;
    label: string;
    fieldId: string;
    fieldName: string;
    options: TSelectOption[];
    disabled?: boolean;
    onChangeHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectField: FunctionComponent<TTextField> = ({
    errors,
    touched,
    label,
    fieldId,
    fieldName,
    options,
    disabled,
    onChangeHandler,
}) => {
    const errorClass = `${errors[fieldName] && touched[fieldName] ? scss.error : ''}`;
    const disabledClass = `${disabled ? scss.disabled : ''}`;
    const selectFieldClass = `${scss.selectField} ${errorClass} ${disabledClass}`;

    return (
        <div className={selectFieldClass}>
            <label className={scss.label} htmlFor={fieldId}>
                {label}
            </label>
            <span className={scss.selectWrapper}>
                <select
                    name={fieldName}
                    id={fieldId}
                    className={scss.select}
                    disabled={!!disabled}
                    onChange={onChangeHandler}
                >
                    <option />
                    {options.map((option: TSelectOption, index: number) => {
                        return (
                            <option key={`${option.value}${index}`} value={option.value}>
                                {option.name}
                            </option>
                        );
                    })}
                </select>
            </span>
            <ErrorMessage component="span" className={scss.errorMessage} name={fieldName} />
        </div>
    );
};

export default SelectField;
