import "./Colaborador.css";

export const Colaborador = ({ nome, imagem, cargo, corDeFundo}) => {
  return (
    <div className="colaborador" >
      <div className="colaborador__cabecalho" style={{backgroundColor:corDeFundo}}>
        <img src={imagem} alt={nome}></img>
      </div>

      <div className="colaborador__rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};
