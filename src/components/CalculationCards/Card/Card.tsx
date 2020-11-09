import React, { FunctionComponent, useContext } from 'react';
import { CardsContext } from '../../../context/CardsContext';
import { TCardData } from '../../../types/cardsTypes';
import scss from './style/card.module.scss';
import { ECardType } from '../../../types/enums';

type TCard = {
    cardData: TCardData;
    columnName: string;
    cardIndex: number;
};

const Card: FunctionComponent<TCard> = ({ cardData, columnName, cardIndex }) => {
    const { changeStatus } = useContext(CardsContext);

    const changeStatusHandler = () => {
        changeStatus(columnName, cardIndex);
    };
    let statusClass = scss.inactive;
    if (cardData.status === ECardType.Active) statusClass = scss.active;
    if (cardData.status === ECardType.Disabled) statusClass = scss.disabled;

    return (
        <div className={`${scss.card} ${statusClass}`} onClick={changeStatusHandler}>
            <span className={scss.check} />
            <span>{cardData.title}</span>
            <span className={scss.description}>
                {cardData.description.map((text, index) => {
                    return (
                        <span key={`description${index}`} className={scss.descriptionItem}>
                            {text}
                        </span>
                    );
                })}
            </span>
        </div>
    );
};

export default Card;
