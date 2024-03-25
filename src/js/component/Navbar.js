// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { useAppContext } from '../store/appContext';

const NavigationBar = () => {
    const { store } = useAppContext();
    const favoritesCount = store.favorites.length;

    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="mb-4">
            <Container>
                <Navbar.Brand as={Link} to="/" className="font-weight-bold text-uppercase">
                    Star Wars Universe
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className="text-light">Home</Nav.Link>
                        <Nav.Link as={Link} to="/favorites" className="text-light">
                            Favorites <Badge bg="secondary">{favoritesCount}</Badge>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;