import { useApolloClient, useMutation } from '@apollo/client';
import { useContext } from 'react';
import { IAddModuleCard, ICardValues, TCalculationData } from '../../types/cardsTypes';
import { ECardsColumnType, ENoticeType } from '../../types/enums';
import { NoticeContext } from '../../context/NoticeContext';
import { addNewCardToCache, cardStatusHandler } from './utils';
import { ADD_MODULE_CARD } from './query';

const useCard = () => {
    const client = useApolloClient();
    const { provideNoticeData } = useContext(NoticeContext);
    const [addModuleCard] = useMutation<IAddModuleCard, ICardValues>(ADD_MODULE_CARD, {
        update(cache, { data }) {
            const addModuleCard = data?.addModuleCard;

            if (!addModuleCard) {
                return;
            }

            const { success, message, cardData } = addModuleCard;
            const responseStatus = success ? ENoticeType.Success : ENoticeType.Error;

            provideNoticeData(message, responseStatus);

            if (!cardData) {
                return;
            }

            addNewCardToCache(cache, cardData, ECardsColumnType.Modules);
        },
    });

    const changeCardStatus = (columnName: string, cardIndex: number) => {
        client.cache.modify({
            fields: {
                calculationCards(calculationCards: TCalculationData) {
                    return cardStatusHandler(calculationCards, columnName, cardIndex);
                },
            },
        });
    };

    return { changeCardStatus, addModuleCard };
};

export default useCard;
