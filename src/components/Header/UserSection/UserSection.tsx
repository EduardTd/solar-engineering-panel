import React, { FunctionComponent, Fragment } from 'react';
import useUser from '../../../graphql/user/useUser';
import Logout from './Logout';
import scss from './styles/user-section.module.scss';
import ChangeLanguage from './ChangeLanguage';

const UserSection: FunctionComponent = () => {
    const { userData } = useUser();

    if (!userData) {
        return <Fragment />;
    }

    const fullNameString = `${userData.name} ${userData.lastName}`;

    return (
        <div className={scss.userBlock}>
            <div title={fullNameString}>
                <span className={scss.fullName}>{fullNameString}</span>
                <span className={scss.userIcon}>{userData.name.charAt(0)}</span>
            </div>
            <div className={scss.userDropdown}>
                <div className={scss.dropdownWrapper}>
                    <Logout />
                    <ChangeLanguage />
                </div>
            </div>
        </div>
    );
};

export default UserSection;
