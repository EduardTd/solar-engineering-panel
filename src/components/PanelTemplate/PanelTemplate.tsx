import React, { Fragment, FunctionComponent, ReactNode } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import GlobalNotice from '../GlobalNotice';
import NewCardModal from '../NewCardModal';
import scss from './styles/panelTemplate.module.scss';

type TPanelTemplate = {
    pageClass?: string;
    children: ReactNode;
};

const PanelTemplate: FunctionComponent<TPanelTemplate> = ({ pageClass, children }) => {
    return (
        <Fragment>
            <Header />
            <NewCardModal />
            <main className={`panel-template ${scss.panelTemplate} ${pageClass ? pageClass : ''}`}>
                <Sidebar />
                <div className={scss.panelContent}>
                    <GlobalNotice />
                    {children}
                </div>
            </main>
        </Fragment>
    );
};

export default PanelTemplate;
