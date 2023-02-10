import React from "react";
import "../styles/Modal.css";
import coin from "../types/Coin";
import Coin from "../types/Coin";

const Modal = ({coinName, assignedUsd, minimumUsdToBuy, assignedUsdToBuyInOffer, minimumUsdToSell, assignedUsdToSellInOffer}
                   : {coinName:string, assignedUsd:number, minimumUsdToBuy:number, assignedUsdToBuyInOffer:number,
                    minimumUsdToSell:number, assignedUsdToSellInOffer:number}):JSX.Element => {

    return (
        <div>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">{coinName} Settings</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">



                            <form id={"Modal-Form"}>
                                {/*<div className={"form-floating"}>*/}
                                {/*    <input placeholder={"Add your FirstName"} type={"text"} name={"firstName"} required*/}
                                {/*           className={"form-control"} autoComplete={"off"}/><br/>*/}
                                {/*    <label htmlFor={"firstName"}>User</label>*/}
                                {/*</div>*/}


                                <div className={"form-floating"}>
                                    <input placeholder={"assignedUsd"} type={"number"} name={"assignedUsd"} required
                                           className={"form-control"} autoComplete={"off"}/><br/>
                                    <label htmlFor={"assignedUsd"}>Assigned Usd</label>
                                </div>

                                <div className={"form-floating"}>
                                    <input placeholder={"minimumUsdToBuy"} type={"number"} name={"minimumUsdToBuy"} required
                                           className={"form-control"} autoComplete={"off"}/><br/><br/>
                                    <label htmlFor={"minimumUsdToBuy"} >MinimumUsd To Buy</label>
                                </div>

                                <div className={"form-floating"}>
                                    <input placeholder={"minimumUsdToSell"} type={"number"} name={"minimumUsdToSell"} required
                                           className={"form-control"} autoComplete={"off"}/><br/><br/>
                                    <label htmlFor={"minimumUsdToSell"} >Minimum Usd To Sell</label>
                                </div>


                                <div className={"form-floating"}>
                                    <input placeholder={"assignedUsdToBuyInOffer"} type={"number"} name={"assignedUsdToBuyInOffer"} required
                                           className={"form-control"} autoComplete={"off"}/><br/><br/>
                                    <label htmlFor={"assignedUsdToBuyInOffer"} >AssignedUsd To Buy In Offer</label>
                                </div>


                                <div className={"form-floating"}>
                                    <input placeholder={"assignedUsdToSellInOffer"} type={"number"} name={"assignedUsdToSellInOffer"} required
                                           className={"form-control"} autoComplete={"off"}/><br/>
                                    <label htmlFor={"assignedUsdToSellInOffer"}>AssignedUsd To Sell In Offer</label>
                                </div>

                                {/*<button className="btn btn-primary" id={"SaveButtonForm"} type={"submit"}>Save</button>*/}
                            </form>




                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal" id={"Modal-Form__CloseButton"}>Close</button>
                            <button type="button" className="btn btn-success" id={"Modal-Form__SaveButton"}>Save</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Modal;