import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "./témoignases.css";
import Image from "../../assets/img/teimoignagephoto.png"
import img from  "../../assets/img/victoria.png"
import imgmaria from  "../../assets/img/Maria.png"

function Temoignages() {
  return (
    <section id="temoignages">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <div className="temoignages">
              <h1>Testimonials</h1>
              <p>
                Voici les témoignages reçus pour les projets <br />
                que j'ai déjà réalisés.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mt-5 gy-4">
          {/* Témoignage 1 */}
          <Col lg={4} md={6}>
            <div className="card-temoignage">
              <p>
                "J'avais besoin d'une boutique en ligne performante et intuitive. Grâce à FATY NIANG, 
                j'ai obtenu un site moderne, rapide et parfaitement adapté à mes besoins. 
                Il a su comprendre mes attentes et proposer des solutions efficaces."
              </p>
              <div className="profil">

                <img src={Image} alt="—Fanta" className="profil-img" />   
                <strong>— Fanta</strong>
              </div>

            </div>
          </Col>

          {/* Témoignage 2 */}
          <Col lg={4} md={6}>
            <div className="card-temoignage">
              <p>
                "Le portfolio que FATY NIANG a conçu pour moi est tout simplement incroyable. 
                Il reflète parfaitement mon univers créatif et m’a permis d’attirer de nouveaux clients. 
                L’interface est fluide, et la navigation intuitive."
              </p>
              <div className="profil">

                <img src={img} alt="—Fanta" className="profil-img" />   
                <strong>— Victoria Vénis</strong>
              </div>
            </div>
          </Col>

          {/* Témoignage 3 */}
          <Col lg={4} md={6}>
            <div className="card-temoignage">
              <p>
                "Nous voulions moderniser notre présence en ligne avec un site professionnel et attractif. 
                FATY NIANG a su créer un site web qui met en valeur notre activité et qui est parfaitement optimisé pour le référencement."
              </p>
              <div className="profil">

                <img src={imgmaria} alt="—Fanta" className="profil-img" />   
                <strong>— Maria</strong>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Temoignages;
