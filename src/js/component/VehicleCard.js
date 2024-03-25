import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import { useAppContext } from '../store/appContext';

function VehicleCard({ vehicle }) {
    const { actions } = useAppContext();

    const addToFavorites = () => {
        actions.addFavorite({ ...vehicle, type: 'vehicle' });
    };

    return (
        <Card className="mb-4" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={vehicle.image} alt={vehicle.name} />
            <Card.Body>
                <Card.Title>{vehicle.name}</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item>Model: {vehicle.model}</ListGroup.Item>
                    <ListGroup.Item>Manufacturer: {vehicle.manufacturer}</ListGroup.Item>
                    <ListGroup.Item>Cost: {vehicle.cost_in_credits} credits</ListGroup.Item>
                </ListGroup>
                <Button variant="primary" onClick={addToFavorites} className="mt-3">
                    Add to Favorites
                </Button>
            </Card.Body>
        </Card>
    );
}

export default VehicleCard;
