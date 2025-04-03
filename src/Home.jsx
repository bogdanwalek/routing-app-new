import React from 'react';
import { Button, Accordion } from 'react-bootstrap';

export const Home = () => (
    <div>
        <h2>Vítejte na našem webu</h2>
        <p>úvodní text úvodní strany</p>
        <Button href="/about" variant="secondary">O nás</Button>
        <p>Další text</p>
    </div>
)


