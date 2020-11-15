import { gql } from '@apollo/client';

const fragments = {
    cardHead: gql`
        fragment cardHead on CardData {
            title
            description
            status
        }
    `,
    moduleCard: gql`
        fragment moduleCard on ModuleCardData {
            title
            description
            status
            additionalData {
                moduleName
                savePreset
                moduleType
                moduleLayers
                width
                height
                thickness
                glassThickness
                cellsAlongWidth
                cellsAlongHeight
                bifaciality
                bypassDiodes
            }
        }
    `,
};

export const CALCULATION_CARDS = gql`
    query getCalculationCards($userId: String!) {
        calculationCards(userId: $userId) {
            plants {
                ...cardHead
            }
            modules {
                ...moduleCard
            }
            inverters {
                ...cardHead
            }
        }
    }
    ${fragments.cardHead}
    ${fragments.moduleCard}
`;

export const ADD_MODULE_CARD = gql`
    mutation addModuleCard($userId: String!, $cardData: ModuleCardDataInput!) {
        addModuleCard(userId: $userId, cardData: $cardData) {
            success
            message
            cardData {
                ...moduleCard
            }
        }
    }
    ${fragments.moduleCard}
`;
