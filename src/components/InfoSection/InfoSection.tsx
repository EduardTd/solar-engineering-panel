import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as InfoIcon } from '../../assets/images/icons/info-icon.svg';
import scss from './styles/infoSection.module.scss';

const InfoSection: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div className={scss.infoSection}>
            <InfoIcon />
            <span>{t('Select at least 1 card from each column')}</span>
        </div>
    );
};

export default InfoSection;
