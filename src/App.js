import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// import { BrowserRouter , Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Acceuil from './components/acceuil/Acceuil';
import Projets from './components/mesprojest/Projets';
import Temoiniages from './components/témoignage/Temoiniages';
import TravailRecents from './components/travailrécents/TravailRecents';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Acceuil/>
      <Projets/>
      <Temoiniages />
  <TravailRecents/>

    </div>
  );
}

export default App;
