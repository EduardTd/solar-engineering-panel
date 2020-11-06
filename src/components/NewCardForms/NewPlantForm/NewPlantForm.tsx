import React, { FunctionComponent, useContext } from 'react';
import { Form, Formik } from 'formik';
import { ModalContext } from '../../../context/ModalContext';
import { useTranslation } from 'react-i18next';

const NewPlantForm: FunctionComponent = () => {
    const { t } = useTranslation();
    const { closeModal } = useContext(ModalContext);

    return (
        <Formik initialValues={{}} onSubmit={() => {}}>
            {() => (
                <Form className="form form-add-new">
                    <div className="left-column" />
                    <div className="right-column">
                        <div className="bottom-section">
                            <div className="actions-toolbar">
                                <button className="button-white" type="button" onClick={closeModal}>
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
