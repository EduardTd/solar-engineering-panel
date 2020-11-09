import React, { FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FormikErrors, FormikTouched } from 'formik';
import TextField from '../../../FormFields/TextField';
import { selectFieldData } from '../../mockData/selectField';
import { TCardSelectField } from '../../../../types/formValues';
import SelectField from '../../../FormFields/SelectField';
import scss from './styles/leftColumn.module.scss';

type TLeftColumn = {
    errors: FormikErrors<any>;
    touched: FormikTouched<any>;
};

const LeftColumn: FunctionComponent<TLeftColumn> = ({ errors, touched }) => {
    const { t } = useTranslation();
    const [isBifacialityDisabled, setIsBifacialityDisabled] = useState(false);

    const disableBifaciality = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (event.target.value !== 'monofacial') {
            setIsBifacialityDisabled(false);

            return;
        }

        setIsBifacialityDisabled(true);
    };

    return (
        <div className={scss.leftColumn}>
            <h2>{`${t('Add new')} ${t('module')}`}</h2>
            <div className={scss.quickAdd}>
                <h3>{t('Quick add')}</h3>
                <div className={scss.toolbar}>
                    <button className={scss.buttonWhite} type="button">
                        {t('Upload PAN file')}
                    </button>
                    <button className={scss.buttonWhite} type="button">
                        {t('Select from presets')}
                    </button>
                </div>
            </div>
            <div className={scss.fieldset}>
                <h3>{t('Parameters')}</h3>
                <TextField
                    errors={errors}
                    touched={touched}
                    label={t('Module name')}
                    fieldId="module-name"
                    fieldName="moduleName"
                />
                <div className={scss.fieldGroup}>
                    {selectFieldData.map((fieldData: TCardSelectField, index: number) => {
                        return (
                            <SelectField
                                key={`${fieldData.fieldName}${index}`}
                                errors={errors}
                                touched={touched}
                                label={fieldData.label}
                                fieldId={fieldData.fieldId}
                                fieldName={fieldData.fieldName}
                                options={fieldData.options}
                                onChangeHandler={disableBifaciality}
                            />
                        );
                    })}
                </div>
                <div className={scss.fieldGroup}>
                    <TextField
                        errors={errors}
                        touched={touched}
                        label={t('Width')}
                        fieldId="width"
                        fieldName="width"
                        unit="mm"
                    />
                    <TextField
                        errors={errors}
                        touched={touched}
                        label={t('Height')}
                        fieldId="height"
                        fieldName="height"
                        unit="mm"
                    />
                </div>
                <div className={scss.fieldGroup}>
                    <TextField
                        errors={errors}
                        touched={touched}
                        label={t('Thickness')}
                        fieldId="thickness"
                        fieldName="thickness"
                        unit="mm"
                    />
                    <TextField
                        errors={errors}
                        touched={touched}
                        label={t('Glass thickness')}
                        fieldId="glass-thickness"
                        fieldName="glassThickness"
                        unit="mm"
                    />
                </div>
                <div className={scss.fieldGroup}>
                    <TextField
                        errors={errors}
                        touched={touched}
                        label={t('No. of cells along width')}
                        fieldId="along-width"
                        fieldName="cellsAlongWidth"
                    />
                    <TextField
                        errors={errors}
                        touched={touched}
                        label={t('No. of cells along height')}
                        fieldId="along-height"
                        fieldName="cellsAlongHeight"
                    />
                </div>
                <div className={scss.fieldGroup}>
                    <TextField
                        errors={errors}
                        touched={touched}
                        label={t('Bifaciality')}
                        fieldId="bifaciality"
                        fieldName="bifaciality"
                        disabled={isBifacialityDisabled}
                    />
                    <TextField
                        errors={errors}
                        touched={touched}
                        label={t('Number of bypass diodes')}
                        fieldId="bypass-diodes"
                        fieldName="bypassDiodes"
                    />
                </div>
            </div>
        </div>
    );
};

export default LeftColumn;
