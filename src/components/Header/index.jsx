import "./style.css";
import logo from "../../assets/logo3.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function index() {
  const [ativo, setAtivo] = useState(false);
  return (
    <header>
      <img src={logo} className="logo" alt="" />
      <menu>
        <button
          onClick={() => setAtivo(!ativo)}
          className={`botao-menu ${ativo ? "ativo" : ""}`}
        >
          <div className="l l1"></div>
          <div className="l l2"></div>
          <div className="l l3"></div>
        </button>
        <nav className={ativo ? "ativo" : ""}>
          <ul>
            <li>
              <Link onClick={() => setAtivo(false)} className="link" to="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setAtivo(false)}
                className="link"
                to={"/sobre"}
              >
                Sobre Mim
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setAtivo(false)}
                className="link"
                to="/projetos"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setAtivo(false)}
                className="link"
                to="/contato"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </menu>
    </header>
  );
}
