import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// import { BrowserRouter , Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Acceuil from './components/acceuil/Acceuil';
import Projets from './components/mesprojest/Projets';
import TravailRecents from './components/travailrécents/TravailRecents';
import Contacts from './components/contact/Contacts';
import Temoignages from './components/témoignage/Temoignages';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Acceuil/>
      <Projets/>
      <Temoignages />
  <TravailRecents/>
  <Contacts />

    </div>
  );
}

export default App;
