import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./acceuil.css";
import fatima from "../../assets/img/fatyng.jpeg";

function Acceuil() {
  return (
    <section className="acceuil" id="acceuil">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="nomtitre">
              <span>Bienvenue sur mon portfolio</span>
              <h1>
                {`Je m'appelle Faty Niang`}
                <span
                  className="txt-rotate"
                  dataPeriod="1000"
                  data-rotate='[ "Je suis une Développeuse", "Web Mobile" ]'
                ></span>
              </h1>
            </div>
            <p>
              Étudiante en développement web et mobile avec une passion pour la
              création de solutions numériques innovantes. Ce portfolio présente
              une sélection de mes projets les plus récents, démontrant mes
              compétences en conception et en programmation pour des
              applications web et mobiles. À travers ce site, vous découvrirez
              des exemples de mes travaux, des projets que j'ai réalisés. Mon
              objectif est de concevoir des expériences utilisateur intuitives
              et engageantes tout en restant à la pointe des technologies
              actuelles. N'hésitez pas à me contacter pour toute opportunité de
              collaboration en développement!
            </p>
            <button className="btn btn-success" type="submit">
              Commençons
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="imgfaty">
              <img src={fatima} alt="fatyng" className="faty ms-auto" />
            </div>
          </Col>
        </Row>
        <Row className="btntravail">
          <Col xs={12} md={12}>
            <div>
            <h6>Travailé avec</h6>
            </div>
          </Col>
          {/* <div className="btntravail"> */}
          <Col xs={12} md={3}>
            <a href="https://openclassrooms.com/fr/courses/1603881-creez-votre-site-web-avec-html5-et-css3">
              <button className="btncours">Html / Css</button>
            </a>
            </Col>
            <Col xs={12} md={3}>

            <a href="https://www.w3schools.com/bootstrap/">
              <button className="btncours">Bootstrap</button>
            </a>
            </Col>
          <Col xs={12} md={3} >
            <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript">
              <button className="btncours">JavaScript</button>
            </a>
            </Col>

          <Col xs={12} md={3} >

            <a href="https://www.w3schools.com/REACT/DEFAULT.ASP">
              <button className="btncours">React JS</button>
            </a>
            </Col>

          {/* </div> */}
        </Row>
      </Container>
    </section>
  );
}

export default Acceuil;
