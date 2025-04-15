import React from 'react';
import { Container } from 'react-bootstrap';
import "./footer.css"

function Footer() {
  return (
    <footer className="bgfooter text-white py-3">
      <Container className="text-center">
        <p className="mb-0">© 2025 Coding City. Tous droits réservés.</p>
      </Container>
    </footer>
  );
}

export default Footer;
