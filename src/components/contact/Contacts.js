import React from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Contacts() {
  return (
    <section id="contact" className="bg-dark py-5">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-4">
            <h1 className="text-white">Contactez-nous</h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nostrum repellat esse dicta? <br />
              Blanditiis recusandae magni voluptate quibusdam nostrum enim esse?
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8}>
            <Form>
              <Form.Group className="mb-3" controlId="formNom">
                <Form.Label className="text-white">Nom</Form.Label>
                <Form.Control type="text" placeholder="Votre nom" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="text-white">Email</Form.Label>
                <Form.Control type="email" placeholder="Votre adresse email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label className="text-white">Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Votre message" />
              </Form.Group>

              <Button variant="btn btn-success" type="submit">
                Envoyer
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contacts;
