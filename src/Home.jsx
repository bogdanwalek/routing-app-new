import React from 'react';
import { Button, Accordion } from 'react-bootstrap';
import { About } from './About';
import { References } from './References';
import { Contact } from './Contact';
import { Layout } from './components/Layout';

export const Home = () => (
    <div>
        <h2>Vítejte na našem webu</h2>
        <p>úvodní text úvodní strany</p>
        <Button href="/about" variant="secondary">O nás</Button>
        <p>Další text</p>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>O nás</Accordion.Header>
        <Accordion.Body>
            <Layout>
                <About></About>
            </Layout>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Reference</Accordion.Header>
        <Accordion.Body>
            <Layout>
                <References></References>
            </Layout>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Kontakt</Accordion.Header>
        <Accordion.Body>
            <Layout>
                <Contact></Contact>
            </Layout>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
)


