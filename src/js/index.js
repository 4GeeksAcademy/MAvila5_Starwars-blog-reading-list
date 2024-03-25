import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';
import App from './App';
import { injectContext } from './store/appContext';

const AppWithStore = injectContext(App);
const container = document.getElementById('root');

if (container !== null) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <AppWithStore />
        </React.StrictMode>
    );
} else {
    console.error('Failed to find the root element');
}