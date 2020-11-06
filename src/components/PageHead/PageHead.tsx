import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import favicon from '../../assets/images/favicon.svg';

const PageHead: FunctionComponent = () => {
    return (
        <Helmet
            defaultTitle="Solar engineering dashboard"
            titleTemplate="%s – Solar engineering dashboard"
            link={[{ rel: 'icon', type: 'image/svg', href: favicon }]}
        >
            <meta name="description" content="Calculation dashboard for solar panel projects" />
        </Helmet>
    );
};

export default PageHead;
