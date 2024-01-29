import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { FavoritesProvider } from './store/FavoritesContext';

ReactDOM.render(
    <React.StrictMode>
        <FavoritesProvider>
            <App />
        </FavoritesProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
