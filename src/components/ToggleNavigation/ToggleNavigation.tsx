import React, { FunctionComponent, ReactNode, useContext } from 'react';
import { NavigationContext } from '../../context/NavigationContext';

type TToggleNavigation = {
    classes: string;
    children?: ReactNode;
};

const ToggleNavigation: FunctionComponent<TToggleNavigation> = ({ classes, children }) => {
    const { toggleNavigation } = useContext(NavigationContext);

    return (
        <div className={classes} onClick={toggleNavigation}>
            {children ? children : null}
        </div>
    );
};

export default ToggleNavigation;
