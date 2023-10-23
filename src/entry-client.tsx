import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as _Pages from './pages';
import { AppContextProvider } from './AppContext';
const Pages = _Pages as { [key: string]: React.FunctionComponent<object> };

const root = document.getElementById('root');


ReactDOM.createRoot(root as Element).render(
    <AppContextProvider>
        <BrowserRouter>
            <Routes>
            {
                Object.keys(Pages).map((page, index) => <Route index={index === 0} path={`${page}`} Component={Pages[page]} />)
            }
            </Routes>
        </BrowserRouter>
    </AppContextProvider>
)