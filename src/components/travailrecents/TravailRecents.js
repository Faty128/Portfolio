import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import "./travailrecents.css"

// 👉 Importation des images locales
import imgReact from '../../assets/img/Online_cours.png';
import imgNext from '../../assets/img/Red_Product.png';
import imgNextjs from '../../assets/img/leading_page.png';
import igmLaravel_Nodejs from '../../assets/img/Capture portfolio.png';

const projets = [
  {
    titre: "Projet React JS",
    description: "Une application frontend dynamique avec React et Tailwind CSS.",
    image: imgReact,
    lien: "https://tache-validation.vercel.app/",
  },
  {
    titre: "Projet Next.js",
    description: "Site SSR performant et moderne avec Next.js.",
    image: imgNext,
    lien: "https://projet-nextjs-froont-y1g7.vercel.app/dashboard",
  },
  {
    titre: "Projet Next.js & Tailwind CSS",
    description: "UN Site d'hôpital performant et moderne avec Next.js et Tailwind CSS.",
    image: imgNextjs,
    lien: "https://nextjs-healthcare-q467.vercel.app/landing-page",
  },
  {
    titre: "Projet Laravel & Node.js",
    description: "API RESTful rapide et sécurisée avec Node.js et Express.",
    image: igmLaravel_Nodejs,
    lien: "https://easy-portfolio-web.vercel.app/",
  },
];


function TravailRecents() {
  return (
    <section className="travailrecents" id="travailrecents">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-4">
            <h1 className="fw-bold fs-2">Travaux Récents</h1>
            <p>
              Voici quelques projets récents réalisés en utilisant React.js, <br /> Next.js, Laravel, et Node.js.
            </p>
          </Col>
        </Row>

        <Row className="gy-4">
          {projets.map((projet, index) => (
            <Col key={index} lg={6} md={6}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={projet.image} alt={projet.titre} />
                <Card.Body>
                  <Card.Title>{projet.titre}</Card.Title>
                  <Card.Text>{projet.description}</Card.Text>
                  <a
  href={projet.lien}
  className="btn btn-success"
  target="_blank"
  rel="noopener noreferrer"
>
  Voir le projet &nbsp; &gt;
</a>
              </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default TravailRecents;
