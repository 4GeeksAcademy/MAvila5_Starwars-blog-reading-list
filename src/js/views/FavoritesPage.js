import React, { useContext } from 'react';
import { FavoritesContext } from '../store/FavoritesContext';
import CharCard from '../component/CharCard';
import PlanetCard from '../component/PlanetCard';
import { Container, Row, Col } from 'react-bootstrap';

function FavoritesPage() {
    // Access the favorites and removeFavorite function from context
    const { favorites, removeFavorite } = useContext(FavoritesContext);

    const renderFavorite = (item) => {
        switch (item.type) {
            case 'character':
                return <CharCard key={item.id} character={item} removeFavorite={removeFavorite} />;
            case 'planet':
                return <PlanetCard key={item.id} planet={item} removeFavorite={removeFavorite} />;
            default:
                return null;
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Your Favorites</h1>
                    {favorites.length === 0 ? (
                        <p>You don't have any favorites yet.</p>
                    ) : (
                        // Map through the favorites and render the cards
                        favorites.map(renderFavorite)
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default FavoritesPage;
