import axios from "axios";
import React from "react";
import { useState } from "react";

const url = "http://localhost:9090/transferencia/nome";

const Home = () => {
  const [nome_OPERADOR_TRANSACAO, setNome_OPERADOR_TRANSACAO] = useState("");

  const pesquisa = async (e) => {
    const transferecia = {
      nome_OPERADOR_TRANSACAO,
    };

    const formData = new FormData();
    formData.append("nome_OPERADOR_TRANSACAO", nome_OPERADOR_TRANSACAO);

    const response = await axios.post(url,formData, nome_OPERADOR_TRANSACAO);
    console.log(transferecia);
  };

  return (
    <div className="meuForm">
      <div className="form-row">
        <form id="meuForm" onSubmit={(e) => pesquisa(e)}>
          <div className="title">Pesquisar</div>

          <div className="inputs">
            <input
              type={"text"}
              name="brand"
              id="brand"
              value={nome_OPERADOR_TRANSACAO}
              className="form-control"
              placeholder="Marca"
              onChange={(e) => setNome_OPERADOR_TRANSACAO(e.target.value)}
            />
          </div>

          <div className="inputs">
            Data de Início
            <input
              type={"text"}
              name="arrivalDate"
              id="arrivalDate"
              className="form-control"
              // value={arrivalDate}
              placeholder="Arrival date"
              // onChange={(e) => setArrivalDate(e.target.value)}
            />
          </div>

          <div className="inputs">
            Data de Fim
            <input
              type={"text"}
              name="arrivalDate"
              id="arrivalDate"
              className="form-control"
              // value={arrivalDate}
              placeholder="Arrival date"
              // onChange={(e) => setArrivalDate(e.target.value)}
            />
          </div>
          <br></br>
          <button
            type="submit"
            className="btn btn-success"
            onChange={(e) => this.pesquisa(e)}
            // onClick={() => resetForm()}
          >
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
};
export default Home;
