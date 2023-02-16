import React, {ChangeEvent, ChangeEventHandler, FormEventHandler} from "react";
import "../styles/Modal.css";

const Modal = ({checkBox, id, coinName, assignedUsd, minimumUsdToBuy, assignedUsdToBuyInOffer, minimumUsdToSell, assignedUsdToSellInOffer, isTrading,
                   handleChangeCoinInfo, handleSubmitCoinInfo}
                   : {checkBox: any, id:number, coinName:string,  assignedUsd:number, minimumUsdToBuy:number,
                    assignedUsdToBuyInOffer:number, minimumUsdToSell:number, handleChangeCoinInfo:ChangeEventHandler,
                    assignedUsdToSellInOffer:number, isTrading:boolean, handleSubmitCoinInfo:FormEventHandler}):JSX.Element => {

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



                            <form id={"Modal-Form"} onSubmit={handleSubmitCoinInfo}>

                                <div className={"form-floating"}>
                                    <input placeholder={"assignedUsd"} type={"number"} name={"assignedUsd"} required
                                           className={"form-control"} autoComplete={"off"} defaultValue={assignedUsd} onChange={handleChangeCoinInfo}/><br/>
                                    <label htmlFor={"assignedUsd"}>Assigned Usd</label>
                                </div>

                                <div className={"form-floating"}>
                                    <input placeholder={"minimumUsdToBuy"} type={"number"} name={"minimumUsdToBuy"} required
                                           className={"form-control"} autoComplete={"off"} defaultValue={minimumUsdToBuy} onChange={handleChangeCoinInfo}/><br/><br/>
                                    <label htmlFor={"minimumUsdToBuy"} >Minimum Usd To Buy</label>
                                </div>

                                <div className={"form-floating"}>
                                    <input placeholder={"minimumUsdToSell"} type={"number"} name={"minimumUsdToSell"} required
                                           className={"form-control"} autoComplete={"off"} defaultValue={minimumUsdToSell} onChange={handleChangeCoinInfo}/><br/><br/>
                                    <label htmlFor={"minimumUsdToSell"} >Minimum Usd To Sell</label>
                                </div>


                                <div className={"form-floating"}>
                                    <input placeholder={"assignedUsdToBuyInOffer"} type={"number"} name={"assignedUsdToBuyInOffer"} required
                                           className={"form-control"} autoComplete={"off"} defaultValue={assignedUsdToBuyInOffer} onChange={handleChangeCoinInfo}/><br/><br/>
                                    <label htmlFor={"assignedUsdToBuyInOffer"} >Assigned Usd To Buy In Offer</label>
                                </div>


                                <div className={"form-floating"}>
                                    <input placeholder={"assignedUsdToSellInOffer"} type={"number"} name={"assignedUsdToSellInOffer"} required
                                           className={"form-control"} autoComplete={"off"} defaultValue={assignedUsdToSellInOffer} onChange={handleChangeCoinInfo}/><br/>
                                    <label htmlFor={"assignedUsdToSellInOffer"}>Assigned Usd To Sell In Offer</label>
                                </div>

                                <div className="form-check">
                                    {/*<input className="form-check-input" name={"isTrading"} type="checkbox"  onChange={checkBox} id="flexCheckChecked"/>*/}
                                    {/*<label htmlFor={"isTrading"}>Trading</label>*/}

                                    <input className="form-check-input" type="checkbox" value={id} defaultChecked={isTrading}
                                           id={"check-" + id} onClick={checkBox}/>
                                    <label htmlFor={"isTrading"}>Trading</label>

                                </div>


                                <div className="modal-footer">
                                    <button type="button" className="btn btn-dark" data-bs-dismiss="modal" id={"Modal-Form__CloseButton"}>Close</button>
                                    <button type="submit" className="btn btn-success" id={"Modal-Form__SaveButton"} data-bs-dismiss="modal">Save</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Modal;