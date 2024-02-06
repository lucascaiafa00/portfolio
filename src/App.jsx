import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

import Contato from "./pages/Contato";
import Projetos from "./pages/Projetos";
import Projeto from "./pages/Projeto";
import Sobre from "./pages/Sobre";
import Inicio from "./pages/Inicio";
import Header from "./components/Header";
import Background from "./components/Background";

import "./App.css";

function App() {
  const location = useLocation();
  return (
    <>
      <main>
      <Background/>
      <Header/>
      <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Inicio />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/projetos/:id" element={<Projeto />} />
          </Routes>
        </AnimatePresence>
      </main>
    </>
  );
}

export default App;
