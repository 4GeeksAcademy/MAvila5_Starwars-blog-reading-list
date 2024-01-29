import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';

function CharCard({ character, removeFavorite }) {
    // Function to call when the 'Remove from Favorites' button is clicked
    const handleRemoveClick = () => {
        removeFavorite(character.id);
    };

    return (
        <Card style={{ width: '18rem', marginBottom: '1rem' }}>
            <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`} />
            <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Birth Year: {character.birth_year}</ListGroup.Item>
                    <ListGroup.Item>Gender: {character.gender}</ListGroup.Item>
                    <ListGroup.Item>Height: {character.height} cm</ListGroup.Item>
                    <ListGroup.Item>Eye Color: {character.eye_color}</ListGroup.Item>
                </ListGroup>
                <Button variant="primary" onClick={handleRemoveClick}>
                    Remove from Favorites
                </Button>
            </Card.Body>
        </Card>
    );
}

export default CharCard;
