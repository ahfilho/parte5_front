
import React from "react";
import axios from "axios";
// import "./SsdList.css";

export default class Conta extends React.Component {
  state = {
    conta: [],
  };

  componentDidMount() {
    axios.get("http://localhost:9090/ssd/list").then((res) => {
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
            <th>Marca</th>
            <th>Modelo</th>
            <th>Nº de série</th>
            <th>Capacidade</th>
            <th>Data de compra</th>
            <th>Preço de compra</th>
            <th>Data de venda</th>
            <th>Preço de venda</th>
            <th>Categoria do produto</th>
            <th>Url</th>
            <th></th>
          </tr>
          {this.state.contas.map((conta) => (
            <tr>
              <td>{conta.id}</td>
              <td>{conta.brand}</td>
              <td>{conta.model}</td>
              <td>{conta.serialNumber}</td>
              <td>{conta.size}</td>
              <td>{conta.purchaseDate}</td>
              <td>{conta.purchasePrice}</td>
              <td>{conta.arrivalDate}</td>
              <td>{conta.saleValue}</td>
              <td>{conta.productCategory}</td>
              <td>
                <a href={conta.url}>url</a>
              </td>

              <td>Alterar</td>
              <td>Excluir</td>
            </tr>
          ))}
          {/* {this.state.categories.map((cate) => (
            <tr>
              <td>{cate.productCategory}</td>
            </tr>
          ))} */}
        </table>
      </tbody>
    );
  }
}
