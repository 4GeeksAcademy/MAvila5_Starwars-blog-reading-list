import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/index.css';
import App from './App';
import { injectContext } from './store/appContext';

const AppWithStore = injectContext(App);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AppWithStore />
    </React.StrictMode>
);