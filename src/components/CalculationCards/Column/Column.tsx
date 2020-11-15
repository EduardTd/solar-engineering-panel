import React, { FunctionComponent, Fragment } from 'react';
import { ECardsColumnType } from '../../../types/enums';
import Card from '../Card';
import { TCalculationData } from '../../../types/cardsTypes';

type TModuleColumn = {
    columnType: ECardsColumnType;
    calculationCards: TCalculationData | undefined | null;
};

const Column: FunctionComponent<TModuleColumn> = ({ columnType, calculationCards }) => {
    const columnData = calculationCards && calculationCards[columnType];

    if (!columnData) {
        return <Fragment />;
    }

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
