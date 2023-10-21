import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as _Pages from './pages';
const Pages = _Pages as { [key: string]: React.FunctionComponent<object> };

const root = document.getElementById('root');

// we create a page per pages.ts exports in prod mode 
if(import.meta.env.PROD) {
    const currentPage = Object.keys(Pages).find((page) => window.location.pathname.endsWith(`${page}.html`));
    if(currentPage) ReactDOM.hydrate(React.createElement(Pages[currentPage]), root);
    else ReactDOM.hydrate(React.createElement(Object.values(Pages)[0]), root);
} else { // in dev mode we can use react-router
    const { BrowserRouter, Routes, Route } = await import("react-router-dom");
    ReactDOM.render((
        <BrowserRouter>
              <Routes>
                {
                    Object.keys(Pages).map((page) => <Route path={`${page}`} Component={Pages[page]} />)
                }
              </Routes>
        </BrowserRouter>
    ), root)
}