import React, { createContext, useCallback, useState } from 'react';
import { TCalculationData } from '../types/cardsTypes';
import { ECardsColumnType, ECardType } from '../types/enums';
import calculationData from '../apiMock/calculationData';

export interface IPlantsValues {
    cardsState: TCalculationData;
    setCardsState: React.Dispatch<React.SetStateAction<TCalculationData>>;
    changeStatus: (columnName: string, cardIndex: number) => void;
    getActiveQuantity: (type: ECardsColumnType) => void;
}

const initialPlantsValues = {
    cardsState: calculationData,
    setCardsState: () => null,
    changeStatus: () => null,
    getActiveQuantity: () => null,
};

export const CardsContext = createContext<IPlantsValues>(initialPlantsValues);

export const CardsContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [cardsState, setCardsState] = useState(initialPlantsValues.cardsState);

    const changeStatus = useCallback((columnName: string, cardIndex: number) => {
        const newData = { ...cardsState };
        const cardStatus = newData[columnName][cardIndex].status;

        if (cardStatus === ECardType.Disabled) {
            return;
        }

        if (cardStatus === ECardType.Active) {
            newData[columnName][cardIndex].status = ECardType.Inactive;
            setCardsState(newData);

            return;
        }

        newData[columnName][cardIndex].status = ECardType.Active;
        setCardsState(newData);
    }, []);

    const getActiveQuantity = useCallback((type: ECardsColumnType) => {
        const quantity = cardsState[type].filter((card) => {
            return card.status === ECardType.Active;
        });

        return quantity.length;
    }, []);

    return (
        <CardsContext.Provider
            value={{ cardsState, setCardsState, changeStatus, getActiveQuantity }}
        >
            {children}
        </CardsContext.Provider>
    );
};
