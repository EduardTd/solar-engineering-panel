import React, { createContext, FunctionComponent, ReactNode, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { removeBodyClass, toggleBodyClass } from '../components/utils';

export interface INavigationValues {
    navState: boolean;
    toggleNavigation: () => void;
}

const initialNavigationValues = {
    navState: false,
    toggleNavigation: () => null,
};

export const NavigationContext = createContext<INavigationValues>(initialNavigationValues);

type TProvider = {
    children: ReactNode;
};

export const NavigationContextProvider: FunctionComponent<TProvider> = ({ children }) => {
    const [navState, setNavState] = useState(initialNavigationValues.navState);
    const { listen } = useHistory();
    const openedClass = 'overflow-hidden';

    listen(() => {
        setNavState(false);
        removeBodyClass(openedClass);
    });

    const toggleNavigation = useCallback(() => {
        setNavState(!navState);
        toggleBodyClass(openedClass);
    }, [navState]);

    return (
        <NavigationContext.Provider value={{ navState, toggleNavigation }}>
            {children}
        </NavigationContext.Provider>
    );
};
