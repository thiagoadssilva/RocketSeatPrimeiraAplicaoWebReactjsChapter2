import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable(){

  useEffect(() =>{// Fazendo a comunicação com api fake
    api.get('transactions')
      .then(Response => console.log(Response.data))
  },[]);

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
     

        <tbody>
          <tr>
            <td>Desenvolvimento de software</td>
            <td>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/09/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de software</td>
            <td>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/09/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de software</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/09/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="widthdraw">- R$700</td>
            <td>Casa</td>
            <td>20/01/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}