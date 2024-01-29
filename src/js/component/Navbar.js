import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                {/* Navbar Brand */}
                <Navbar.Brand as={Link} to="/">Star Wars Universe</Navbar.Brand>

                {/* Toggler */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Navbar Links */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
