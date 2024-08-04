import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

function Temoignages() {
  return (
    <section className="" id="temoignages">

    <Container>
    <Row>
      <Col lg={12} md={12}>
        <div className="temoignages">
          <h1>Les témoignage</h1>
          <p>
        Voici les témoignage que j'ai reçu pour les projets <br />
        que j'ai déja réalisés.
          </p>
        </div>
      </Col>
    </Row>
    <Row className="mt-5 gy-5">
      <Col lg={6} md={6}>
        <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aperiam esse id et beatae, culpa ipsam non natus consequatur doloremque distinctio fugit totam vero ut tempora soluta odit impedit neque?
          
        </div>
        <div>
          
        </div>
        
      </Col>

      <Col lg={6} md={6}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aperiam esse id et beatae, culpa ipsam non natus consequatur doloremque distinctio fugit totam vero ut tempora soluta odit impedit neque?
       
      </Col>
     
      <Col lg={6} md={6}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aperiam esse id et beatae, culpa ipsam non natus consequatur doloremque distinctio fugit totam vero ut tempora soluta odit impedit neque?

      </Col>

      <Col lg={6} md={6}>
      
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aperiam esse id et beatae, culpa ipsam non natus consequatur doloremque distinctio fugit totam vero ut tempora soluta odit impedit neque?
      </Col>
    </Row>
  </Container>
  </section>

  )
}

export default Temoignages;
