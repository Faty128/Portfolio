import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./projets.css";
import capture2 from "../../assets/img/Capture 2.png";
import capture3 from "../../assets/img/Capture 3.png";
import capture4 from "../../assets/img/Capture 4.png";


function Projets() {
  return (
    <section className="" id="projets">

    <Container>
      <Row>
        <Col lg={12} md={12}>
          <div className="projets">
            <h1>Projets réalisés</h1>
            <p>
              Au cours des derniers mois, <br />
              j'ai eu le privilège de travailler sur plusieurs projets
              stimulants <br />
              et enrichissants qui ont vraiment mis en valeur mes compétences et
              ma créativité.
              <br />
              Et voici les projets que j'ai eu à réalisés.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="mt-5 gy-5">
        <Col lg={6} md={6}>
          <div>
            <button className="btnTechnologie">HTML/CSS</button>
          </div>
          <div>
            <h5>Curriculum Vitae</h5>
            <p>
              Voici le cv que j'ai réalisé avec le langage html/css <br />
              mon premier projet en développement web
            </p>
          </div>
          <a href="">
            <button className="btnprojet">Voir mon projet</button>
          </a>
        </Col>

        <Col lg={6} md={6}>
          <img src={capture2} alt="CV" className="imgcv" />
        </Col>
       
        <Col lg={6} md={6}>
        <img src={capture3} alt="CV" className="imgcv" />
        </Col>

        <Col lg={6} md={6}>
        <div>
            <button className="btnTechnologie">Bootstrap</button>
          </div>
          <div>
            <h5>Curriculum Vitae</h5>
            <p>
              Voici le projet que j'ai réalisé avec bootstrap 5 <br />
              C'est le second projet en développement web
            </p>
          </div>
          <a href="">
            <button className="btnprojet">Voir mon projet</button>
          </a>
        </Col>
      
        <Col lg={6} md={6}>
        <div>
            <button className="btnTechnologie">Javascript</button>
          </div>
          <div>
            <h5>Formulaire de validation</h5>
            <p>
              Voici le cv que j'ai réalisé avec le langage JavaScript <br />
              mon premier projet en développement web
            </p>
          </div>
          <a href="">
            <button className="btnprojet">Voir mon projet</button>
          </a>
        </Col>

        <Col lg={6} md={6}>
        <img src={capture4} alt="CV" className="imgcv" />
        </Col>
      </Row>
    </Container>
    </section>

  );
}

export default Projets;
