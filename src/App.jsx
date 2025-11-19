import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import Inicio from "./pages/Inicio";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import Contato from "./pages/Contato";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Cabecalho />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      <Rodape />
    </Router>
  );
}

export default App;