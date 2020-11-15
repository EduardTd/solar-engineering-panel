export type TCardData = {
    title: string;
    description: string[];
    status: string;
    additionalData: {};
};

export type TCardsGroup = TCardData[];

export type TCalculationData = {
    [index: string]: TCardsGroup;
};

export interface ICalculationCards {
    calculationCards: TCalculationData;
}

export interface IModuleCardResponse {
    success: boolean;
    message: string;
    cardData: TCardData;
    __typename: 'ModuleCardResponse';
}

export interface IAddModuleCard {
    addModuleCard: IModuleCardResponse;
}

export interface ICardValues {
    userId: string;
    cardData: TCardData;
}
