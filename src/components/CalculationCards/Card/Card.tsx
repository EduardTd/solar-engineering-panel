import React, { FunctionComponent, useContext } from 'react';
import { CardsContext } from '../../../context/CardsContext';
import { TCardData } from '../../../types/cardsTypes';

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

    return (
        <div className={`card ${cardData.status}`} onClick={changeStatusHandler}>
            <span className="check" />
            <span className="title">{cardData.title}</span>
            <span className="description">
                {cardData.description.map((text, index) => {
                    return (
                        <span key={`description${index}`} className="description-item">
                            {text}
                        </span>
                    );
                })}
            </span>
        </div>
    );
};

export default Card;
