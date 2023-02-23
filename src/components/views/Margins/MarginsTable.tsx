import React from "react";
import IMargin from "../../types/IMargin";

const MarginsTable = ({Margins}: {Margins:IMargin[]}):JSX.Element => {

    return (

        <table className="table table-hover" id={"tableCoins"}>
            <thead className="thead-dark">
            <tr>
                {/*<th scope="col-auto" id={"tableProperties"}>Name</th>*/}
                <th scope="col-auto" id={"tableProperties"}>Symbol</th>
                <th scope="col-auto" id={"tableProperties"}>Value</th>
                <th scope="col-auto" id={"tableProperties"}>Order Type</th>

            </tr>
            </thead>
            <tbody>

            {Margins?.map((margin, index) => (

                <tr key={index} /*nClick={() => handleModalLoadCoinInfo(coin)}*/ data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
                    <td>{margin.Coin}</td>
                    <td>{margin.value}</td>
                    <td>{margin.orderType}</td>

                    {/*<td>{coin.minimumUsdToBuy}</td>*/}

                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default MarginsTable;