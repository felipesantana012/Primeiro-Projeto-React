import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import { ListaSuspensa } from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

export const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (event) => {
    event.preventDefault();
    props.aoColaboradorCadastrado({
      nome: nome,
      cargo: cargo,
      imagem: imagem,
      time: time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite Seu Nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite Seu Cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />

        <CampoTexto
          label="Imagem"
          placeholder="Informe o endereço da Imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />

        <ListaSuspensa
          obrigatorio={true}
          label="Times"
          itens={props.nomeTime}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};
