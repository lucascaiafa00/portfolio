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
          <p>{projeto.descricao}</p>
          {/* Add more details as needed */}
        </>
      ) : (
        <p>Projeto não encontrado</p>
      )}
    </>
  );
}
