import React, { Fragment, FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import ColumnHead from './ColumnHead';
import Column from './Column/Column';
import { ECardsColumnType } from '../../types/enums';
import scss from './styles/calculationCards.module.scss';
import useCalculationCards from '../../graphql/calculationCards/useCalculationCards';
import Loading from '../Loading';

const CalculationCards: FunctionComponent = () => {
    const { t } = useTranslation();
    const { loading, calculationCards } = useCalculationCards();

    return (
        <div className={scss.cardSelection}>
            {loading ? <Loading /> : <Fragment />}
            <div className={scss.columnsWrapper}>
                <div className={scss.cardColumn}>
                    <ColumnHead
                        buttonText={`+ ${t('Add new')} ${t('plant')}`}
                        headTitle={t('Plants')}
                        headType={ECardsColumnType.Plants}
                    />
                    <Column
                        columnType={ECardsColumnType.Plants}
                        calculationCards={calculationCards}
                    />
                </div>
                <div className={scss.cardColumn}>
                    <ColumnHead
                        buttonText={`+ ${t('Add new')} ${t('module')}`}
                        headTitle={t('Modules')}
                        headType={ECardsColumnType.Modules}
                    />
                    <Column
                        columnType={ECardsColumnType.Modules}
                        calculationCards={calculationCards}
                    />
                </div>
                <div className={scss.cardColumn}>
                    <ColumnHead
                        buttonText={`+ ${t('Add new')} ${t('inverter')}`}
                        headTitle={t('Inverters')}
                        headType={ECardsColumnType.Inverters}
                    />
                    <Column
                        columnType={ECardsColumnType.Inverters}
                        calculationCards={calculationCards}
                    />
                </div>
            </div>
        </div>
    );
};

export default React.memo(CalculationCards);
