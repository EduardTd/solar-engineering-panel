import React, { FunctionComponent, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalContext } from '../../../context/ModalContext';
import { CardsContext } from '../../../context/CardsContext';
import { ECardsColumnType } from '../../../types/enums';
import scss from './styles/columnHead.module.scss';

type TColumnHead = {
    buttonText: string;
    headTitle: string;
    headType: ECardsColumnType;
};

const ColumnHead: FunctionComponent<TColumnHead> = ({ buttonText, headTitle, headType }) => {
    const { t } = useTranslation();
    const { openModal } = useContext(ModalContext);
    const { getActiveQuantity } = useContext(CardsContext);
    const activeQuantity = getActiveQuantity(headType);
    const openModalHandler = () => {
        openModal(headType);
    };

    return (
        <div>
            <div className={scss.blockTitle}>
                <h3>{headTitle}</h3>
                <span className={scss.quantity}>{`${activeQuantity} ${t('selected')}`}</span>
            </div>
            <button className={scss.addNewCard} onClick={openModalHandler}>
                {buttonText}
            </button>
        </div>
    );
};

export default ColumnHead;
