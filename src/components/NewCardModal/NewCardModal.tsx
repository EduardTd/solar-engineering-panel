import React, { Fragment, FunctionComponent, useCallback, useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import { ECardsColumnType } from '../../types/enums';
import NewPlantForm from '../NewCardForms/NewPlantForm';
import NewInverterForm from '../NewCardForms/NewInverterForm';
import NewModuleForm from '../NewCardForms/NewModuleForm';
import scss from './styles/newCardModal.module.scss';

const NewCardModal: FunctionComponent = () => {
    const { isOpen, modalType, closeModal } = useContext(ModalContext);

    const modalContent = useCallback((modalType: ECardsColumnType) => {
        switch (modalType) {
            case ECardsColumnType.Plants:
                return <NewPlantForm />;
            case ECardsColumnType.Modules:
                return <NewModuleForm />;
            case ECardsColumnType.Inverters:
                return <NewInverterForm />;
            default:
                return <Fragment />;
        }
    }, []);

    if (!isOpen) {
        return <Fragment />;
    }

    return (
        <div className={scss.modal}>
            <div className={scss.modalOverlay} onClick={closeModal} />
            <div className={scss.modalContent}>{modalContent(modalType)}</div>
        </div>
    );
};

export default NewCardModal;
