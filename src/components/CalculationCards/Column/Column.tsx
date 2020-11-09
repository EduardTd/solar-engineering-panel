import React, { FunctionComponent, Fragment, useContext } from 'react';
import { ECardsColumnType } from '../../../types/enums';
import { CardsContext } from '../../../context/CardsContext';
import Card from '../Card';

type TModuleColumn = {
    columnType: ECardsColumnType;
};

const Column: FunctionComponent<TModuleColumn> = ({ columnType }) => {
    const { cardsState } = useContext(CardsContext);
    const columnData = cardsState[columnType];

    return (
        <Fragment>
            {columnData.map((data, index) => {
                return (
                    <Card
                        key={`${columnType}${index}`}
                        cardData={data}
                        columnName={columnType}
                        cardIndex={index}
                    />
                );
            })}
        </Fragment>
    );
};

export default Column;
