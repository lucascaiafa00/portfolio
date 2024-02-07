import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./style.css";
import { Link } from "react-router-dom";
import projetos from "../../components/ProjetosData";
import { motion } from "framer-motion";

export default function Projetos() {
  const [x, setX] = useState(-100);
  const [contador, setContador] = useState(1);

  console.log(x);
  function handleClick(e) {
    if (
      (e === 1 && contador === 1) ||
      (e === -1 && contador === projetos.length)
    ) {
      return;
    }
    const novaPosicao = x + 240 * e;
    setX(novaPosicao);
    setContador(contador - e);
  }
  return (
    <section id="projetos">
      <motion.h1
        className="titulo"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 1 }}
      >
        Projetos
      </motion.h1>
      <motion.div
        className="carrossel-container"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div
          className="carrossel"
          style={{ left: `calc(50% + ${x}px)`, position: "relative" }}
        >
          {projetos.map((projeto) => (
            <Link
              to={`/projetos/${projeto.id}`}
              key={projeto.id}
              className={`projeto ${
                projeto.status == "incompleto" ? "projeto-incompleto" : ""
              } ${contador == projeto.id ? "projeto-atual" : ""}`}
            >
              <p>{projeto.nome}</p>
            </Link>
          ))}
        </div>
        <button className="prev-button" onClick={() => handleClick(1)}>
          <IoIosArrowBack />
        </button>
        <button className="next-button" onClick={() => handleClick(-1)}>
          <IoIosArrowForward />
        </button>
      </motion.div>
    </section>
  );
}
