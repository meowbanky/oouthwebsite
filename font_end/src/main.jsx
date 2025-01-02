import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {disableReactDevTools} from "@fvilers/disable-react-devtools";

// if(process.env.NOD_ENV === 'production') disableReactDevTools();
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);