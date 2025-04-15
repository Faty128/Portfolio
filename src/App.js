import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import { BrowserRouter , Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/navbar/NavBar";
import Acceuil from "./components/acceuil/Acceuil";
import Projets from "./components/mesprojest/Projets";
import TravailRecents from "./components/travailrecents/TravailRecents";
import Contacts from "./components/contact/Contacts";
import Temoignages from "./components/témoignage/Temoignages";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Acceuil />
      <Projets />
      <Temoignages />
      <TravailRecents />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
