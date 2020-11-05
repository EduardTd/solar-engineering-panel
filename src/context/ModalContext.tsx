import React, { createContext, useCallback, useState } from 'react';
import { ECardsColumnType } from '../types/enums';
import { toggleBodyClass } from '../components/utils';

export interface IModalValues {
    isOpen: boolean;
    modalType: ECardsColumnType;
    openModal: (type: ECardsColumnType) => void;
    closeModal: () => void;
}

const initialModalValues = {
    isOpen: false,
    modalType: ECardsColumnType.Default,
    openModal: () => null,
    closeModal: () => null,
};

export const ModalContext = createContext<IModalValues>(initialModalValues);

export const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(initialModalValues.isOpen);
    const [modalType, setModalType] = useState(initialModalValues.modalType);
    const openedClass = 'modal-opened';

    const openModal = useCallback((type: ECardsColumnType) => {
        setModalType(type);
        toggleBodyClass(openedClass);
        setIsOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        toggleBodyClass(openedClass);
        setIsOpen(false);
    }, []);

    return (
        <ModalContext.Provider value={{ isOpen, modalType, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};
