import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from '../js/layout/Layout';
import HomePage from '../js/views/HomePage';
import DetailsPage from '../js/views/DetailsPage';
import FavoritesPage from '../js/views/FavoritesPage';

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/details/:id" element={<DetailsPage />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
