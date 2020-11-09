import React, { FunctionComponent, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { FormikErrors, FormikTouched } from 'formik';
import { ReactComponent as InfoIcon } from '../../../../assets/images/icons/info-icon.svg';
import { ModalContext } from '../../../../context/ModalContext';
import Dropdown from '../../../Dropdown';
import Checkbox from '../../../FormFields/Checkbox';
import scss from './styles/rightColumn.module.scss';

type TRightColumn = {
    errors: FormikErrors<any>;
    touched: FormikTouched<any>;
};

const RightColumn: FunctionComponent<TRightColumn> = ({ errors, touched }) => {
    const { t } = useTranslation();
    const { closeModal } = useContext(ModalContext);

    return (
        <div className={scss.rightColumn}>
            <div className={scss.infoBlock}>
                <InfoIcon />
                <span className={scss.moduleType}>{t('Module type')}</span>
                <p>
                    <span>{t('Some description about this mysterious module type')}</span>
                </p>
            </div>
            <Dropdown dropdownTitle={t('Show more details')} classes={scss.newModuleDropdown}>
                <p>
                    Vestibulum tincidunt convallis sapien, eget pretium erat commodo eu. Suspendisse
                    sed lectus ullamcorper, scelerisque diam interdum, molestie lacus. Morbi ut nunc
                    eget ipsum aliquam tincidunt. Curabitur a arcu aliquet, iaculis massa sed,
                    ornare metus.
                </p>
            </Dropdown>
            <div className={scss.bottomSection}>
                <div className={scss.checkboxField}>
                    <Checkbox
                        errors={errors}
                        touched={touched}
                        checkboxId="save-preset"
                        checkboxName="savePreset"
                        label={t('Save as preset')}
                    />
                </div>
                <div className={scss.actionsToolbar}>
                    <button className={scss.buttonWhite} type="button" onClick={closeModal}>
                        {t('Cancel')}
                    </button>
                    <button className={scss.buttonGreen} type="submit">
                        {t('Add module')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RightColumn;
