import React, { FunctionComponent, useContext } from 'react';
import { Formik, Form } from 'formik';
import { ModalContext } from '../../../context/ModalContext';
import { useTranslation } from 'react-i18next';
import scss from './styles/newInverterForm.module.scss';

const NewInverterForm: FunctionComponent = () => {
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

export default NewInverterForm;
