import React, { createContext, FunctionComponent, ReactNode, useCallback, useState } from 'react';
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

type TProvider = {
    children: ReactNode;
};

export const NoticeContextProvider: FunctionComponent<TProvider> = ({
    children,
}: {
    children: React.ReactNode;
}) => {
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
    }, [isClose]);

    return (
        <NoticeContext.Provider
            value={{ message, messageType, provideNoticeData, isClose, closeNotice }}
        >
            {children}
        </NoticeContext.Provider>
    );
};
