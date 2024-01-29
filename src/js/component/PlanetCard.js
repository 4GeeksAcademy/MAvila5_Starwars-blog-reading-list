import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';

function PlanetCard({ planet, removeFavorite }) {
    // Function to call when the 'Remove from Favorites' button is clicked
    const handleRemoveClick = () => {
        removeFavorite(planet.id);
    };

    return (
        <Card style={{ width: '18rem', marginBottom: '1rem' }}>
            <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/planets/${planet.id}.jpg`} />
            <Card.Body>
                <Card.Title>{planet.name}</Card.Title>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Climate: {planet.climate}</ListGroup.Item>
                    <ListGroup.Item>Gravity: {planet.gravity}</ListGroup.Item>
                    <ListGroup.Item>Population: {planet.population}</ListGroup.Item>
                </ListGroup>
                <Button variant="primary" onClick={handleRemoveClick}>
                    Remove from Favorites
                </Button>
            </Card.Body>
        </Card>
    );
}

export default PlanetCard;
