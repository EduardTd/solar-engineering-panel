import React, { FunctionComponent, ReactNode, useState } from 'react';

type TDropdown = {
    dropdownTitle: string;
    textContent?: string;
    children?: ReactNode;
};

const Dropdown: FunctionComponent<TDropdown> = ({ dropdownTitle, textContent, children }) => {
    const [dropdownState, setDropdownState] = useState(false);

    return (
        <div className={`dropdown ${dropdownState ? 'active' : ''}`}>
            <div className="dropdow-title" onClick={() => setDropdownState(!dropdownState)}>
                <span>{dropdownTitle}</span>
            </div>
            <div className="dropdown-content">
                {textContent ? textContent : ''}
                {children ? children : null}
            </div>
        </div>
    );
};

export default Dropdown;
