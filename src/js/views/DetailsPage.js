import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

function DetailsPage() {
    const { id } = useParams(); // Assuming the route parameter is the character's ID
    const [characterDetails, setCharacterDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacterDetails = async () => {
            try {
                const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCharacterDetails(data.result.properties);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacterDetails();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Container>
            <Row className="justify-content-md-center my-5">
                <Col md={6}>
                    <Card>
                        <Card.Img variant="top" src={`...`} className="img-thumbnail" />
                        <Card.Body>
                            <Card.Title>{characterDetails.name}</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item><strong>Name:</strong> {characterDetails.name}</ListGroup.Item>
                            <ListGroup.Item><strong>Birth Year:</strong> {characterDetails.birth_year}</ListGroup.Item>
                            <ListGroup.Item><strong>Gender:</strong> {characterDetails.gender}</ListGroup.Item>
                            <ListGroup.Item><strong>Height:</strong> {characterDetails.height}</ListGroup.Item>
                            <ListGroup.Item><strong>Skin Color:</strong> {characterDetails.skin_color}</ListGroup.Item>
                            <ListGroup.Item><strong>Eye Color:</strong> {characterDetails.eye_color}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default DetailsPage;
