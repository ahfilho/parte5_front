import React from "react";
import axios from "axios";
// import "./SsdList.css";

export default class Conta extends React.Component {
  state = {
    contas: [],
  };
  
  componentDidMount() {
    axios.get("http://localhost:9090/conta/list/all/contas").then((res) => {
      const contas = res.data;
      this.setState({ contas });
    });
  }
  render() {
    return (
      <tbody>
        <table>
          <tr>
            <th>Id</th>
            <th>Nome Responsável</th>
          </tr>
          {this.state.contas.map((conta) => (
            <tr>
              <td>{conta.id_CONTA}</td>
              <td>{conta.nome_RESPONSAVEL}</td>
            </tr>
          ))}
        </table>
      </tbody>
    );
  }
}
