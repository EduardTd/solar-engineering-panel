import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

const StartCalculating: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div className="start-calculating">
            <div className="info-block">
                <span className="block-title">{t('Select and calculate')}</span>
                <h2>{t('Starting 4 new calculations')}</h2>
                <div className="calculation-info">
                    <span className="block">
                        <span>{`${t('Already calculated')}: `}</span>
                        <span>2</span>
                    </span>
                    <span className="block">
                        <span>{`${t('Incompatible configurations')}: `}</span>
                        <span>2</span>
                    </span>
                </div>
            </div>
            <div className="toolbar">
                <button className="button-white button-large">{t('Cancel')}</button>
                <button className="button-green button-large">{t('Start calculating')}</button>
            </div>
        </div>
    );
};

export default StartCalculating;
