import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Menu.css";
import "../styles/Table.css"
import "../styles/Queries.css"
import Icoin from "../types/Icoin";
// im

const Table = ({Coins, handleModalLoadCoinInfo} : {Coins:Icoin[]|undefined, handleModalLoadCoinInfo:any}) => {

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

                        {Coins?.map((coin, index) => (

                            <tr key={index} onClick={() => handleModalLoadCoinInfo(coin)} data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
                                <td>{coin.name}</td>
                                <td>{coin.symbol}</td>
                                <td>{coin.coinAmount}</td>
                                <td>{coin.minimumUsdToBuy}</td>
                                <td>{coin.minimumUsdToSell}</td>
                                <td>{coin.assignedUsd}</td>
                                <td>{coin.availableUsd}</td>
                                <td>{coin.assignedUsdToBuyInOffer}</td>
                                <td>{coin.assignedUsdToSellInOffer}</td>
                                <td>{coin.userName}</td>
                                <td>{coin.lastOrderPrice}</td>
                                <td>{coin.lastBuyOrderPrice}</td>
                                <td>{coin.lastSellOrderPrice}</td>
                                <td>{coin.isTrading}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        
    )
}



export default Table;