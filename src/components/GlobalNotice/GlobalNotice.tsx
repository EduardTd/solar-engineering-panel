import React, { FunctionComponent, useContext, useEffect } from 'react';
import { ReactComponent as CloseIcon } from '../../assets/images/icons/close-icon.svg';
import { NoticeContext } from '../../context/NoticeContext';

const GlobalNotice: FunctionComponent = () => {
    const { message, messageType, isClose, closeNotice } = useContext(NoticeContext);

    useEffect(() => {
        setTimeout(() => {
            if (isClose) {
                return;
            }

            closeNotice();
        }, 5000);
    }, [isClose, closeNotice]);

    return (
        <div className={`global-notice ${messageType} ${isClose ? 'hidden' : ''} `}>
            <div className="container">
                <span className="text">{message}</span>
                <span className="close-notice" onClick={closeNotice}>
                    <CloseIcon />
                </span>
            </div>
        </div>
    );
};

export default GlobalNotice;
