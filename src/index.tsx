import React from 'react';
import ReactDOM from 'react-dom';

import { CssBaseline } from '@mui/material';

import App from './components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <CssBaseline />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
