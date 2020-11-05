import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import ColumnHead from './ColumnHead';
import Columns from './Columns/Columns';
import { ECardsColumnType } from '../../types/enums';

const CalculationCards: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div className="card-selection">
            <div className="columns-wrapper">
                <div className="card-column">
                    <ColumnHead
                        buttonText={`+ ${t('Add new')} ${t('plant')}`}
                        headTitle={t('Plants')}
                        headType={ECardsColumnType.Plants}
                    />
                    <Columns columnType={ECardsColumnType.Plants} />
                </div>
                <div className="card-column">
                    <ColumnHead
                        buttonText={`+ ${t('Add new')} ${t('module')}`}
                        headTitle={t('Modules')}
                        headType={ECardsColumnType.Modules}
                    />
                    <Columns columnType={ECardsColumnType.Modules} />
                </div>
                <div className="card-column">
                    <ColumnHead
                        buttonText={`+ ${t('Add new')} ${t('inverter')}`}
                        headTitle={t('Inverters')}
                        headType={ECardsColumnType.Inverters}
                    />
                    <Columns columnType={ECardsColumnType.Inverters} />
                </div>
            </div>
        </div>
    );
};

export default CalculationCards;
