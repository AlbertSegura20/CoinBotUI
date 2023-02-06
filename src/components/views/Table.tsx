import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Menu.css";
import "../styles/Table.css"
import "../styles/Queries.css"
const Table = () => {

    return (

            <table className="table table-hover" id={"tableCoins"}>
                <thead className="thead-dark">
                <tr>
                    <th scope="col-auto" id={"tableProperties"}>Name</th>
                    <th scope="col-auto" id={"tableProperties"}>Symbol</th>
                    <th scope="col-auto" id={"tableProperties"}>CoinAmount</th>
                    <th scope="col-auto" id={"tableProperties"}>MinimunUSDToBuy</th>
                    <th scope="col-auto" id={"tableProperties"}>MinimunUSDToSell</th>
                    <th scope="col-auto" id={"tableProperties"}>AssignedUSD</th>
                    <th scope="col-auto" id={"tableProperties"}>AvailableUSD</th>
                    <th scope="col-auto" id={"tableProperties"}>AssignedUSDToBuyInOffer</th>
                    <th scope="col-auto" id={"tableProperties"}>AssignedUSDToSellInOffer</th>
                    <th scope="col-auto" id={"tableProperties"}>UserName</th>
                    <th scope="col-auto" id={"tableProperties"}>LastOrderPrice</th>
                    <th scope="col-auto" id={"tableProperties"}>LastBuyOrderPrice</th>
                    <th scope="col-auto" id={"tableProperties"}>LastSellOrderPrice</th>
                    <th scope="col-auto" id={"tableProperties"}>IsTrading</th>

                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>

                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>

                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>

                </tr>


                </tbody>
            </table>
        
    )
}



export default Table;