import React, { FunctionComponent, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalContext } from '../../../context/ModalContext';
import { CardsContext } from '../../../context/CardsContext';
import { ECardsColumnType } from '../../../types/enums';

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
        <div className="column-head">
            <div className="block-title">
                <h3>{headTitle}</h3>
                <span className="quantity">{`${activeQuantity} ${t('selected')}`}</span>
            </div>
            <button className="add-new-card" onClick={openModalHandler}>
                {buttonText}
            </button>
        </div>
    );
};

export default ColumnHead;
