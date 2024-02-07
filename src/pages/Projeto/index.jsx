import { useParams } from "react-router-dom";
import projetos from "../../components/ProjetosData";
import "./style.css";

export default function Projeto() {
  const { id } = useParams();
  const projeto = projetos.find((item) => item.id === parseInt(id));
  console.log(projeto);

  return (
    <>
      {projeto ? (
        <>
          <h2>{projeto.nome}</h2>
          <p>{projeto.data}</p>
          <div className="tecnologias">
            {projeto.tecnologias.map((tecnologia, index) => (
              <p key={index}>{tecnologia}</p>
            ))}
          </div>
          <div>
            <img src={projeto.imagem_desktop} alt="" />
            <img src={projeto.imagem_mobile} alt="" />
          </div>
          <p>{projeto.descricao}</p>
          <div>
            <a href={projeto.link_demo}>Acessar Projeto</a>
            <a href={projeto.link_repositorio}>Acessar Repositório</a>
          </div>
        </>
      ) : (
        <p>Projeto não encontrado</p>
      )}
    </>
  );
}
