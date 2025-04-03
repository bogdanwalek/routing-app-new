import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export const NavigationBar = () => (

    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/">VFAP</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Hlavní strana</Nav.Link>
                <Nav.Link href="/about">O nás</Nav.Link>
                <Nav.Link href="/references">Reference</Nav.Link>
                <Nav.Link href="/contact">Kontakt</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
)