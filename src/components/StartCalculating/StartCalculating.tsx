import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import scss from './styles/startCalculating.module.scss';

const StartCalculating: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div className={scss.startCalculating}>
            <div className={scss.infoBlock}>
                <span className={scss.blockTitle}>{t('Select and calculate')}</span>
                <h2>{t('Starting 4 new calculations')}</h2>
                <div className={scss.calculationInfo}>
                    <span className={scss.block}>
                        <span>{`${t('Already calculated')}: `}</span>
                        <span>2</span>
                    </span>
                    <span className={scss.block}>
                        <span>{`${t('Incompatible configurations')}: `}</span>
                        <span>2</span>
                    </span>
                </div>
            </div>
            <div className={scss.toolbar}>
                <button className={`${scss.buttonWhite} ${scss.buttonLarge}`}>{t('Cancel')}</button>
                <button className={`${scss.buttonGreen} ${scss.buttonLarge}`}>
                    {t('Start calculating')}
                </button>
            </div>
        </div>
    );
};

export default StartCalculating;
