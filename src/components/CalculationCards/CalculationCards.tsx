import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import ColumnHead from './ColumnHead';
import Column from './Column/Column';
import { ECardsColumnType } from '../../types/enums';
import scss from './styles/calculationCards.module.scss';

const CalculationCards: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div className={scss.cardSelection}>
            <div className={scss.columnsWrapper}>
                <div className={scss.cardColumn}>
                    <ColumnHead
                        buttonText={`+ ${t('Add new')} ${t('plant')}`}
                        headTitle={t('Plants')}
                        headType={ECardsColumnType.Plants}
                    />
                    <Column columnType={ECardsColumnType.Plants} />
                </div>
                <div className={scss.cardColumn}>
                    <ColumnHead
                        buttonText={`+ ${t('Add new')} ${t('module')}`}
                        headTitle={t('Modules')}
                        headType={ECardsColumnType.Modules}
                    />
                    <Column columnType={ECardsColumnType.Modules} />
                </div>
                <div className={scss.cardColumn}>
                    <ColumnHead
                        buttonText={`+ ${t('Add new')} ${t('inverter')}`}
                        headTitle={t('Inverters')}
                        headType={ECardsColumnType.Inverters}
                    />
                    <Column columnType={ECardsColumnType.Inverters} />
                </div>
            </div>
        </div>
    );
};

export default CalculationCards;
