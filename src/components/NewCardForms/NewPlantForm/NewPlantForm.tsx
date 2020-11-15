import React, { FunctionComponent, useContext } from 'react';
import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { ModalContext } from '../../../context/ModalContext';
import scss from './styles/newPlantForm.module.scss';

const NewPlantForm: FunctionComponent = () => {
    const { t } = useTranslation();
    const { closeModal } = useContext(ModalContext);

    return (
        <Formik initialValues={{}} onSubmit={() => {}}>
            {() => (
                <Form className={scss.formAddNew}>
                    <div className={scss.leftColumn} />
                    <div className={scss.rightColumn}>
                        <div className={scss.bottomSection}>
                            <div className={scss.actionsToolbar}>
                                <button
                                    className={scss.buttonWhite}
                                    type="button"
                                    onClick={closeModal}
                                >
                                    {t('Cancel')}
                                </button>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default NewPlantForm;
