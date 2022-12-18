import React from "react";
import axios from "axios";
// import "./SsdList.css";

export default class Conta extends React.Component {
  state = {
    transferencias: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:9090/transferencia/list/all/dataTransfer")
      .then((res) => {
        const transferencias = res.data;
        this.setState({ transferencias });
      });
  }
  render() {
    return (
      <tbody>
        <table>
          <tr>
            <th>Id</th>
            <th>Valor</th>
            <th>data_TRANSFERENCIA</th>
          </tr>
          {this.state.transferencias.map((transferencia) => (
            <tr>
              <td>{transferencia.id}</td>
              <td>{transferencia.valor}</td>
              <td>{transferencia.data_TRANSFERENCIA}</td>
            </tr>
          ))}
        </table>
      </tbody>
    );
  }
}
