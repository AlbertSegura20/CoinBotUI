import React from "react";
import IMargin from "../../types/IMargin";
import "../Margins/Margin.css";

const MarginsTable = ({Margins, handleLoadMarginModal, handleLoadSelectCoinMarginModal}: {Margins:IMargin[], handleLoadMarginModal:any,
    handleLoadSelectCoinMarginModal:any}):JSX.Element => {

    return (

    <>


        <table className="table table-hover" id={"tableCoins"}>
            <thead className="thead-dark">
            <tr>
                {/*<th scope="col-auto" id={"tableProperties"}>Name</th>*/}
                <th scope="col-auto" id={"tableProperties"}>Symbol</th>
                <th scope="col-auto" id={"tableProperties"}>Value</th>
                <th scope="col-auto" id={"tableProperties"}>Order Type</th>
                <th> <button className={"MarginButton"} onClick={() => handleLoadSelectCoinMarginModal()} data-bs-toggle="modal" data-bs-target="#newMarginStaticBackdrop"><b>New Margin</b></button></th>
            </tr>
            </thead>
            <tbody>


            {Margins?.map((margin, index) => (

                <tr key={index} onClick={() => handleLoadMarginModal(margin)} data-bs-toggle="modal" data-bs-target="#editMarginStaticBackdrop">
                    <td>{margin.Coin} </td>
                    <td>{margin.value}</td>
                    <td>{margin.orderType}</td>


                </tr>
            ))}

            </tbody>
        </table>
    </>
    )
}

export default MarginsTable;