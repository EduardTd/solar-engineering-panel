import { useQuery } from '@apollo/client';
import { useCallback } from 'react';
import { ECardsColumnType, ECardType, ELocalStorage } from '../../types/enums';
import { ICalculationCards, TCalculationData, TCardData } from '../../types/cardsTypes';
import { CALCULATION_CARDS } from './query';

type TUseCalculationCards = {
    loading: boolean;
    calculationCards: TCalculationData | undefined;
    getActiveQuantity: (argument: ECardsColumnType) => number;
};

const useCalculationCards = (): TUseCalculationCards => {
    const { loading, data } = useQuery<ICalculationCards>(CALCULATION_CARDS, {
        variables: {
            userId: localStorage.getItem(ELocalStorage.UserId),
        },
    });
    const calculationCards = data?.calculationCards;

    const getActiveQuantity = useCallback(
        (type: ECardsColumnType) => {
            if (!calculationCards) {
                return 0;
            }

            const quantity = calculationCards[type].filter((card: TCardData) => {
                return card.status === ECardType.Active;
            });

            return quantity.length;
        },
        [calculationCards]
    );

    return { loading, calculationCards, getActiveQuantity };
};

export default useCalculationCards;
