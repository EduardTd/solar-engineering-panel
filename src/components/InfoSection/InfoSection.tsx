import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as InfoIcon } from '../../assets/images/icons/info-icon.svg';

const InfoSection: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div className="info-section">
            <InfoIcon />
            <span className="text">{t('Select at least 1 card from each column')}</span>
        </div>
    );
};

export default InfoSection;
