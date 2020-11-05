import React, { createContext, useCallback, useState } from 'react';
import { ENoticeType } from '../types/enums';

export interface INoticeValues {
    message: string;
    messageType: ENoticeType;
    isClose: boolean;
    closeNotice: () => void;
    provideNoticeData: (message: INoticeValues['message'], messageType: ENoticeType) => void;
}

const initialNoticeValues = {
    message: '',
    messageType: ENoticeType.Default,
    isClose: true,
    closeNotice: () => null,
    provideNoticeData: () => null,
};

export const NoticeContext = createContext<INoticeValues>(initialNoticeValues);

export const NoticeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [message, setMessage] = useState(initialNoticeValues.message);
    const [messageType, setMessageType] = useState(initialNoticeValues.messageType);
    const [isClose, setIsClose] = useState(initialNoticeValues.isClose);

    const provideNoticeData = (message: INoticeValues['message'], messageType: ENoticeType) => {
        setMessage(message);
        setMessageType(messageType);
        setIsClose(false);
    };

    const closeNotice = useCallback(() => {
        setIsClose(isClose);
        setMessage(initialNoticeValues.message);
        setMessageType(initialNoticeValues.messageType);
    }, []);

    return (
        <NoticeContext.Provider
            value={{ message, messageType, provideNoticeData, isClose, closeNotice }}
        >
            {children}
        </NoticeContext.Provider>
    );
};
