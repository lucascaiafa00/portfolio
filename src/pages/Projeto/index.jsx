import { useParams } from "react-router-dom";
import projetos from "../../components/ProjetosData";
import {motion} from "framer-motion"
import "./style.css";

export default function Projeto() {
  const { id } = useParams();
  const projeto = projetos.find((item) => item.id === parseInt(id));
  console.log(projeto);

  return (
    <section id="projeto">
      {projeto ? (
        <motion.div 
        initial={{opacity:0, y:-20}}
        animate={{opacity:1, y:0}}
        exit={{opacity:0, y:-20}}
        transition={{duration: 1}}>
          <h2>{projeto.nome}</h2>
          <p>{projeto.data}</p>
          <div className="tecnologias">
            {projeto.tecnologias.map((tecnologia, index) => (
              <p key={index}>{tecnologia}</p>
            ))}
          </div>
          <div className="imagens-projeto">
            <img className="imagem-desktop" src={projeto.imagem_desktop} alt="" />
            <img className="imagem-mobile" src={projeto.imagem_mobile} alt="" />
          </div>
          <p className="descricao">{projeto.descricao}</p>
          <div className="links-projeto">
            <a target="_blank" href={projeto.link_demo}>Acessar Projeto</a>
            <a target="_blank" href={projeto.link_repositorio}>Acessar Repositório</a>
          </div>
        </motion.div>
      ) : (
        <p>Projeto não encontrado</p>
      )}
    </section>
  );
}
