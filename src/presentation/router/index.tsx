import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import makePanel from '../../core/factories/pages/panel.factory';

export default function Router(): React.JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/preview/:id/:seoTitle" element={<>{makePanel()}</>} />
                <Route path="/:creatorName/:id/:seoTitle" element={<>{makePanel()}</>} />
            </Routes>
        </BrowserRouter>
    );
}
