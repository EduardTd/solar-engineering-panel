import React, { FunctionComponent, ReactNode, useState } from 'react';
import scss from './styles/dropdown.module.scss';

type TDropdown = {
    dropdownTitle: string;
    textContent?: string;
    children?: ReactNode;
    classes?: string;
};

const Dropdown: FunctionComponent<TDropdown> = ({
    dropdownTitle,
    textContent,
    children,
    classes,
}) => {
    const [dropdownState, setDropdownState] = useState(false);

    return (
        <div className={`${classes} ${dropdownState ? scss.active : ''}`}>
            <div className={scss.dropdowTitle} onClick={() => setDropdownState(!dropdownState)}>
                <span>{dropdownTitle}</span>
            </div>
            <div className={scss.dropdownContent}>
                {textContent ? textContent : ''}
                {children ? children : null}
            </div>
        </div>
    );
};

export default Dropdown;
