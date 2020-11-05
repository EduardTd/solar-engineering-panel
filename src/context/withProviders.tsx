import React from 'react';

const renderComponents = (Component: React.ComponentType, renderMap: any[], props: any) => {
    const Components = renderMap
        .reverse()
        .reduce((ComponentSoFar: React.ComponentType, Provider: React.ComponentType) => {
            const WrappedComponent = () => (
                <Provider>
                    <ComponentSoFar {...props} />
                </Provider>
            );

            return WrappedComponent;
        }, Component); // initial value, first component

    return <Components />;
};

export const withProviders = (
    Component: React.ComponentType,
    providers: { [index: string]: React.ReactNode },
) => {
    const providersArray = Object.keys(providers).map((key) => providers[key]);

    const WrapperComponent = (props: any) => {
        return renderComponents(Component, providersArray, props);
    };

    return WrapperComponent;
};
