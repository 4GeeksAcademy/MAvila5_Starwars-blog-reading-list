import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import { useAppContext } from '../store/appContext';

function PlanetCard({ planet }) {
    const { actions } = useAppContext();

    const addToFavorites = () => {
        actions.addFavorite({ ...planet, type: 'planet' });
    };

    return (
        <Card className="mb-4" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={planet.image} alt={planet.name} />
            <Card.Body>
                <Card.Title>{planet.name}</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item>Climate: {planet.climate}</ListGroup.Item>
                    <ListGroup.Item>Terrain: {planet.terrain}</ListGroup.Item>
                    <ListGroup.Item>Population: {planet.population}</ListGroup.Item>
                </ListGroup>
                <Button variant="primary" onClick={addToFavorites} className="mt-3">
                    Add to Favorites
                </Button>
            </Card.Body>
        </Card>
    );
}

export default PlanetCard;
