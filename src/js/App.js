import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './views/HomePage';
import DetailsPage from './views/DetailsPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout><HomePage /></Layout>} />
                <Route path="/details/:type/:id" element={<Layout><DetailsPage /></Layout>} />
            </Routes>
        </Router>
    );
}

export default App;
