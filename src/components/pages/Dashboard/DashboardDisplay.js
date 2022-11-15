import React from 'react';
import { ReactDOM } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './Dashboard';



ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Dashboard />
        </BrowserRouter>
    </React.StrictMode>
);
