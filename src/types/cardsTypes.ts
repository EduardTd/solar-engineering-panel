type TCardData = {
    title: string;
    description: string[];
    status: string;
    additionalData: {};
};

type TCardsGroup = TCardData[];

type TCalculationData = {
    [index: string]: TCardsGroup;
};

export type { TCardData, TCardsGroup, TCalculationData };
