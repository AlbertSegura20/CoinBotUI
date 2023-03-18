import React, {ChangeEventHandler, FormEventHandler, MouseEventHandler, useState} from "react";
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import checked from "../../icons/checked.png";
import remove from "../../icons/remove.png";
import trash from "../../icons/trash.png";
import gear from "../../icons/gear.png";
// import refresh from "../../icons/refresh.png";
import "./EditCoinModal.css";


const EditCoinModal = ({checkBox, id, assignedUsd, minimumUsdToBuy, assignedUsdToBuyInOffer, minimumUsdToSell, assignedUsdToSellInOffer, isTrading,
                           handleChangeCoinInfo, handleSubmitCoinInfo, show, handleCloseModal}:
                           {show:boolean, handleShowModal:any, handleCloseModal:any, checkBox: MouseEventHandler, id:number, assignedUsd:number, minimumUsdToBuy:number,
                               assignedUsdToBuyInOffer:number, minimumUsdToSell:number, handleChangeCoinInfo:ChangeEventHandler,
                               assignedUsdToSellInOffer:number, isTrading:boolean, handleSubmitCoinInfo:FormEventHandler }):JSX.Element => {


    return (
        <>

            <Modal
                show={show}
                onHide={handleCloseModal}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton className={"d-flex justify-content-center flex-column"} style={{background:"#89CFF0"}}>
                    <img src={gear} alt={"gear"} style={{width:"100px", height:"100px", filter:"brightness(0) invert(1)"}}/>
                    <Modal.Title>
                        <h4 className={"text-center mt-1 text-white"}>Update Properties</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmitCoinInfo}>
                        <div className="form-floating mb-3">

                            <input type={"number"} name={"assignedUsd"} required className={"form-control"}
                                   defaultValue={assignedUsd} onChange={handleChangeCoinInfo} placeholder="assignedUsd"/>
                            <label htmlFor={"assignedUsd"}>Assigned Usd</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input placeholder={"minimumUsdToBuy"} type={"number"} name={"minimumUsdToBuy"} required
                                   className={"form-control"} autoComplete={"off"} defaultValue={minimumUsdToBuy}
                                   onChange={handleChangeCoinInfo}/>
                            <label htmlFor={"minimumUsdToBuy"} >Minimum Usd To Buy</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input placeholder={"minimumUsdToSell"} type={"number"} name={"minimumUsdToSell"} required
                                   className={"form-control"} autoComplete={"off"} defaultValue={minimumUsdToSell}
                                   onChange={handleChangeCoinInfo}/>
                            <label htmlFor={"minimumUsdToSell"} >Minimum Usd To Sell</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input placeholder={"assignedUsdToBuyInOffer"} type={"number"} name={"assignedUsdToBuyInOffer"} required
                                   className={"form-control"} autoComplete={"off"} defaultValue={assignedUsdToBuyInOffer}
                                   onChange={handleChangeCoinInfo}/>
                            <label htmlFor={"assignedUsdToBuyInOffer"} >Assigned Usd To Buy In Offer</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input placeholder={"assignedUsdToSellInOffer"} type={"number"} name={"assignedUsdToSellInOffer"} required
                                   className={"form-control"} autoComplete={"off"} defaultValue={assignedUsdToSellInOffer}
                                   onChange={handleChangeCoinInfo}/>
                            <label htmlFor={"assignedUsdToSellInOffer"}>Assigned Usd To Sell In Offer</label>
                        </div>

                        <div className="form-check ms-4">
                            <input className="form-check-input" type="checkbox" value={id} defaultChecked={isTrading}
                                   id={"check-" + id} onClick={checkBox}/>
                            <label htmlFor={"isTrading"}>Trading</label>
                        </div>

                        <Modal.Footer>
                            <button className={"btn btn-danger"} type={"submit"}>
                                <img src={trash} alt={"trash"} style={{filter:"brightness(0) invert(1)"}}/>
                            </button>

                            <button className={"btn btn-success"} type={"submit"}>
                                <img src={checked} alt={"checked"} style={{filter:"brightness(0) invert(1)"}}/>
                            </button>

                            <button type={"button"} className={"btn btn-dark"} onClick={handleCloseModal}>
                                <img src={remove} alt={"remove"} style={{filter:"brightness(0) invert(1)"}}/>
                            </button>

                        </Modal.Footer>

                    </form>
                </Modal.Body>
            </Modal>





        </>
    )
}

export default EditCoinModal;