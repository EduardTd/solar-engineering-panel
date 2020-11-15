import React, { FunctionComponent } from 'react';
import { TCardData } from '../../../types/cardsTypes';
import { ECardType } from '../../../types/enums';
import useCard from '../../../graphql/calculationCards/useCard';
import scss from './style/card.module.scss';

type TCard = {
    cardData: TCardData;
    columnName: string;
    cardIndex: number;
};

const Card: FunctionComponent<TCard> = ({ cardData, columnName, cardIndex }) => {
    const { changeCardStatus } = useCard();
    let statusClass = scss.inactive;
    if (cardData.status === ECardType.Active) {
        statusClass = scss.active;
    }
    if (cardData.status === ECardType.Disabled) {
        statusClass = scss.disabled;
    }

    const changeStatusHandler = () => {
        changeCardStatus(columnName, cardIndex);
    };

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
