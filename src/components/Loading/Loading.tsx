import React, { FunctionComponent } from 'react';
import scss from './styles/loading.module.scss';

const Loading: FunctionComponent = () => {
    return (
        <div className={scss.loadingWrapper}>
            <div className={scss.loader}>
                <div className={scss.loaderDot} />
                <div className={scss.loaderDot} />
                <div className={scss.loaderDot} />
                <div className={scss.loaderDot} />
                <div className={scss.loaderDot} />
                <div className={scss.loaderDot} />
            </div>
        </div>
    );
};

export default Loading;
