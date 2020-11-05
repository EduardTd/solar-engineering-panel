import React, { Fragment, FunctionComponent, ReactNode } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import GlobalNotice from '../GlobalNotice';
import NewCardModal from '../NewCardModal';

type TPanelTemplate = {
    pageClass: string;
    children: ReactNode;
};

const PanelTemplate: FunctionComponent<TPanelTemplate> = ({ pageClass, children }) => {
    return (
        <Fragment>
            <Header />
            <NewCardModal />
            <main className={`panel-template ${pageClass ? pageClass : ''}`}>
                <Sidebar />
                <div className="panel-content container">
                    <GlobalNotice />
                    {children}
                </div>
            </main>
        </Fragment>
    );
};

export default PanelTemplate;
