import React from 'react';
import makePanel from './core/factory/panel.factory';

function App(): React.JSX.Element {
    const props = {};
    return (
        <>
            {makePanel(props)}
        </>
    );
}

export default App;
