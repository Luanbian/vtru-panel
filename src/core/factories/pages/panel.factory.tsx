import React from 'react';
import Panel from '../../../presentation/pages/panel';
import makeObtainAssets from '../data/obtain.assets.factory';

const makePanel = (): React.JSX.Element => {
    const obtainAssets = makeObtainAssets();
    return <Panel obtainAssets={obtainAssets} />;
};
export default makePanel;
