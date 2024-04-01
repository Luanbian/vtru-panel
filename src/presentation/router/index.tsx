import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import makePanel from '../../core/factories/pages/panel.factory';

export default function Router(): React.JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/preview/:id" element={<>{makePanel()}</>} />
                <Route path="/:creatorName/:id" element={<>{makePanel()}</>} />
            </Routes>
        </BrowserRouter>
    );
}
