import React from "react";
import IMargin from "../../types/IMargin";
import "./MarginsTable.css";
import Dots from "../../icons/dots.png";

const MarginsTable = ({Margins, handleLoadMarginModal, handleLoadSelectCoinMarginModal}: {Margins:IMargin[], handleLoadMarginModal:any,
    handleLoadSelectCoinMarginModal:any}):JSX.Element => {

    return (

    <>
{/*

        <table className="table table-hover" id={"tableCoins"}>
            <thead className="thead-dark">
            <tr>
                <th scope="col-auto" id={"tableProperties"}>Name</th>
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
        </table>*/}

        <section className={"margins-section-desktop d-flex align-items-center justify-content-center"}>

            {/*<div className={"d-flex align-items-center containerAllItems "} >*/}
            {/*<div className={"d-flex align-items-center "}>*/}
            <div>
                <div className={"container table-containerItems d-flex"}>

                    <div className={"scrollItems"}>

                        <table className="table table-hover">
                            <thead className={"table-head"}>
                            <tr className={"align-middle"}>
                                <th scope="col">Name</th>
                                <th scope="col">Symbol</th>
                                <th scope="col">Value</th>
                                <th scope="col">Order Type</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>

                            <tbody>

                            {Margins?.map((margin, index) => (

                                <tr key={index}>
                                    <td>{margin.Coin} </td>
                                    <td>{margin.Coin} </td>
                                    <td>{margin.value}</td>
                                    <td>{margin.orderType}</td>

                                <td><button onClick={() => handleLoadSelectCoinMarginModal()} className={"btn btn-primary btn-add"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-plus-lg" viewBox="0 0 16 16">
                                        <path  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                    </svg>
                                </button>

                                <button className={"btn btn-success btn-edit"} onClick={() => handleLoadMarginModal(margin)}>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-pencil" viewBox="0 0 16 16">
                                        <path
                                            d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                    </svg>
                                </button>

                                    <div className="container dropdown-center">
                                        <button className="btn dots-menu-dropdown d-flex justify-content-center " type="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src={Dots} alt={"dots"} style={{position: "absolute", width: "30px", height:"30px", top: "0"}}/>
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-dark">
                                            <li><a className="dropdown-item" onClick={() => handleLoadSelectCoinMarginModal()}><b>Add</b></a></li>
                                            <hr/>
                                            <li><a className="dropdown-item" onClick={() => handleLoadMarginModal(margin)} ><b>Edit</b></a></li>
                                        </ul>
                                    </div>


                                </td>
                            </tr>
                            ))}

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </section>

    </>
    )
}

export default MarginsTable;