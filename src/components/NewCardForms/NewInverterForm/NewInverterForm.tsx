import React, { FunctionComponent, useContext } from 'react';
import { Form } from 'formik';
import { ModalContext } from '../../../context/ModalContext';
import { useTranslation } from 'react-i18next';

const NewInverterForm: FunctionComponent = () => {
    const { t } = useTranslation();
    const { closeModal } = useContext(ModalContext);

    return (
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
    );
};

export default NewInverterForm;
