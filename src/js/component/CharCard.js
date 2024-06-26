import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import { useAppContext } from '../store/appContext';

function CharCard({ character }) {
    const { actions } = useAppContext();

    const addToFavorites = () => {
        actions.addFavorite({ ...character, type: 'character' });
    };

    return (
        <Card className="mb-4" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={character.image} alt={character.name} />
            <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item>Gender: {character.gender}</ListGroup.Item>
                    <ListGroup.Item>Hair Color: {character.hair_color}</ListGroup.Item>
                    <ListGroup.Item>Eye Color: {character.eye_color}</ListGroup.Item>
                </ListGroup>
                <Button variant="primary" onClick={addToFavorites} className="mt-3">
                    Add to Favorites
                </Button>
            </Card.Body>
        </Card>
    );
}

export default CharCard;
