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
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/details/:id" component={DetailsPage} />
                    <Route path="/favorites" component={FavoritesPage} />
                </Switch>
            </Layout>
        </Router>
    );
};

export default App;
