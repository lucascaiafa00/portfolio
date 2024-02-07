import "./style.css";
import foto from "../../assets/foto.jpg";
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoBootstrap,
  BiLogoJava,
  BiLogoPostgresql,
} from "react-icons/bi";

import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <section id="sobre">
      <motion.h1
        className="titulo"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 1 }}
      >
        Sobre Mim
      </motion.h1>
      <motion.div
        className="texto-foto"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <img
          className="foto"
          src={foto}
          alt="foto de um homem branco de olhos castanhos, cabelo curto castanho usando uma camisa preta"
        />
        <div>
          <p>
            Entusiasta do frontend apaixonado por criar experiências visuais
            excepcionais, com habilidades em JavaScript, HTML, CSS e frameworks
            modernos.
          </p>
          <p>
            Além do frontend, possuo conhecimento em Java e desenvolvimento
            mobile, buscando constantemente expandir meu conjunto de
            habilidades. Como alguém que está sempre em busca de aprendizado,
            vejo cada desafio como uma oportunidade de crescimento.
          </p>
          <p>
            Meu principal objetivo é a resolução de problemas e a criação de
            produtos que destacam a usabilidade e a estética. Estou
            constantemente em busca de novos conhecimentos e desafios
            inspiradores para aprimorar minhas habilidades.
          </p>
          <p>Vamos criar experiências incríveis juntos!</p>
        </div>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        Skills
      </motion.h2>
      <motion.div
        className="skills-container"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="html icone-container">
          <BiLogoHtml5 className="icone" />
          <p>HTML</p>
        </div>
        <div  className="css icone-container">
          <BiLogoCss3 className="icone" />
          <p>CSS</p>
        </div>
        <div  className="js icone-container">
          <BiLogoJavascript className="icone" />
          <p>JavaScript</p>
        </div>
        <div  className="bootstrap icone-container">
          <BiLogoBootstrap className="icone" />
          <p>Bootstrap</p>
        </div>
        <div  className="java icone-container">
          <BiLogoJava className="icone" />
          <p>Java</p>
        </div>
        <div  className="postgre icone-container">
          <BiLogoPostgresql className="icone" />
          <p>PostgreSQL</p>
        </div>
      </motion.div>
    </section>
  );
}
