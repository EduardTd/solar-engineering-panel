import { TCalculationData, TCardData } from '../../types/cardsTypes';
import { ECardsColumnType, ECardType } from '../../types/enums';
import { ApolloCache } from '@apollo/client';

export const cardStatusHandler = (
    calculationCards: TCalculationData,
    columnName: string,
    cardIndex: number,
): TCalculationData => {
    const cardStatus = calculationCards[columnName][cardIndex].status;

    if (cardStatus === ECardType.Disabled) {
        return calculationCards;
    }

    const newData = JSON.parse(JSON.stringify(calculationCards));

    if (cardStatus === ECardType.Active) {
        newData[columnName][cardIndex].status = ECardType.Inactive;

        return newData;
    }

    newData[columnName][cardIndex].status = ECardType.Active;

    return newData;
};

export const addNewCardToCache = (
    cache: ApolloCache<any>,
    cardData: TCardData,
    columnType: ECardsColumnType,
) => {
    cache.modify({
        fields: {
            calculationCards(calculationCards) {
                const newData = JSON.parse(JSON.stringify(calculationCards));

                newData[columnType].unshift(cardData);

                return newData;
            },
        },
    });
};
