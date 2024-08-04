import React from 'react';
import { FaWhatsapp, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import "./navbar.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#acceuil">Accueil</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#projets">Mes Projets</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#temoignages">Témoignages</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#travailrecents">Travail Récents</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacts">Contacts</a>
            </li>
          </ul>
          <span className="d-flex navbar-icone">
            <a className="nav-link" href="#linkedin">
              <FaLinkedinIn />
            </a>
            <a className="nav-link" href="#facebook">
              <FaFacebookF />
            </a>
            <a className="nav-link" href="#whatsapp">
              <FaWhatsapp />
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
