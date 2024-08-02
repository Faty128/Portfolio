import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

function TravailRecents() {
  return (
    <Container>
    <Row>
      <Col lg={12} md={12}>
        <div className="témoignage">
          <h1>Travail Recents</h1>
          <p>
        En guise de mes compétences 
        j'ai pu réalisé aussi des projets sur réact js
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
  )
}

export default TravailRecents
