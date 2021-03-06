import React, { FunctionComponent, useCallback } from 'react';
import { useApolloClient } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import scss from '../styles/user-section.module.scss';
import { setIsLoggedInVar } from '../../../../graphql/apollo/cache';
import { ELocalStorage } from '../../../../types/enums';

const Logout: FunctionComponent = () => {
    const { cache } = useApolloClient();
    const { t } = useTranslation();

    const handleLogOut = useCallback(() => {
        cache.evict({ fieldName: 'getUser' });
        cache.gc();
        localStorage.removeItem(ELocalStorage.UserId);
        localStorage.removeItem(ELocalStorage.Token);
        setIsLoggedInVar(false);
    }, [cache]);

    return (
        <div className={scss.logout} onClick={handleLogOut}>
            <span>{t('Logout')}</span>
        </div>
    );
};

export default Logout;
