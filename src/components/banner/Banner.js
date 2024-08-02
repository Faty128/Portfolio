import React from 'react';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import"./banner.css";


function Banner() {
  const [text, setText] = useState('');

  return (
      <section className="banner" id="acceuil">
<Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
          <div>
            <span>Bienvenue sur mon portfolio</span>
            <h1>{`Je m'appelle Faty Niang`} 
            <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Je suis une Dévelopeuse", "Web Mobile" ]'><span className="wrap">{text}</span></span>
            </h1>
          </div>
           
           <p>Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Asperiores alias rerum, dignissimos officiis 
            illo id perferendis tempora quas cumque excepturi?
            </p>
            <button className="btn" type="submit">Commençons</button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            
          </Col>
        </Row>
        </Container>
    </section>
  )
}

export default Banner
