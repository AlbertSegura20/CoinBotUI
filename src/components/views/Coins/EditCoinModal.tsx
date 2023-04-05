import React, {FormEventHandler, useState} from "react";
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import checked from "../../icons/checked.png";
import remove from "../../icons/remove.png";
import trash from "../../icons/trash.png";
import gear from "../../icons/gear.png";
// import refresh from "../../icons/refresh.png";
import "./EditCoinModal.css";
import ICoin from "../../types/Icoin";


const EditCoinModal = ({
                           handleSubmitCoinInfo, show,
                           handleCloseModal, selectedCoin
                       }:
                           {
                               show: boolean, handleShowModal: any, handleCloseModal: any,
                               handleSubmitCoinInfo: FormEventHandler, selectedCoin?: ICoin
                           }): JSX.Element => {

    const [assignedUsd, setAssignedUsd] = useState<number>();
    const [minimumUsdToBuy, setMinimumUsdToBuy] = useState<number>();
    const [minimumUsdToSell, setMinimumUsdToSell] = useState<number>();
    const [assignedUsdToBuy, setAssignedUsdToBuy] = useState<number>();
    const [assignedUsdToSell, setAssignedUsdToSell] = useState<number>();
    const handleAssignedUsd = (event: any): void => {
        updateValue(event, setAssignedUsd);
    }
    const handleMinimumUsdToBuy = (event: any): void => {
        updateValue(event, setMinimumUsdToBuy);
    }
    const handleMinimumUsdToSell = (event: any): void => {
        updateValue(event, setMinimumUsdToSell);
    }
    const handleAssignedUsdToBuy = (event: any): void => {
        updateValue(event, setAssignedUsdToBuy);
    }
    const handleAssignedUsdToSell = (event: any): void => {
        updateValue(event, setAssignedUsdToSell);
    }
    const updateValue = (event: any, setValue: Function): void => {
        const value = event.target.value;
        setValue(value);
    }

    const handleCheckBox = (event: any): void => {
        const object = event.target;
        let checkID = document.querySelector('#' + object.id) as HTMLInputElement;
        selectedCoin!.isTrading = checkID.checked;
    }

    const updateValueSelectedCoin = (event: any): void => {
        if (assignedUsd) {
            selectedCoin!.assignedUsd = Number(assignedUsd);
        }
        if (minimumUsdToBuy) {
            selectedCoin!.minimumUsdToBuy = Number(minimumUsdToBuy);
        }

        if (minimumUsdToSell) {
            selectedCoin!.minimumUsdToSell = Number(minimumUsdToSell);
        }

        if (assignedUsdToBuy) {
            selectedCoin!.assignedUsdToBuyInOffer = Number(assignedUsdToBuy);
        }

        if (assignedUsdToSell) {
            selectedCoin!.assignedUsdToSellInOffer = Number(assignedUsdToSell);
        }
        handleSubmitCoinInfo(event);
    }

    return (
        <>
            <Modal show={show} onHide={handleCloseModal} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton className={"d-flex justify-content-center flex-column"}
                              style={{background: "#89CFF0"}}>
                    <img src={gear} alt={"gear"}
                         style={{width: "100px", height: "100px", filter: "brightness(0) invert(1)"}}/>
                    <Modal.Title>
                        <h4 className={"text-center mt-1 text-white"}>Update Properties</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={updateValueSelectedCoin} className={"form-coin-modal"}>
                        <div className="form-floating mb-3">

                            <input type={"number"} name={"assignedUsd"} required className={"form-control"}
                                   defaultValue={selectedCoin?.assignedUsd} onInput={handleAssignedUsd}
                                   placeholder="assignedUsd"/>
                            <label htmlFor={"assignedUsd"}>Assigned Usd</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input placeholder={"minimumUsdToBuy"} type={"number"} name={"minimumUsdToBuy"} required
                                   className={"form-control"} autoComplete={"off"}
                                   defaultValue={selectedCoin?.minimumUsdToBuy}
                                   onInput={handleMinimumUsdToBuy}/>
                            <label htmlFor={"minimumUsdToBuy"}>Minimum Usd To Buy</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input placeholder={"minimumUsdToSell"} type={"number"} name={"minimumUsdToSell"} required
                                   className={"form-control"} autoComplete={"off"}
                                   defaultValue={selectedCoin?.minimumUsdToSell}
                                   onInput={handleMinimumUsdToSell}/>
                            <label htmlFor={"minimumUsdToSell"}>Minimum Usd To Sell</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input placeholder={"assignedUsdToBuyInOffer"} type={"number"}
                                   name={"assignedUsdToBuyInOffer"} required
                                   className={"form-control"} autoComplete={"off"}
                                   defaultValue={selectedCoin?.assignedUsdToBuyInOffer}
                                   onInput={handleAssignedUsdToBuy}/>
                            <label htmlFor={"assignedUsdToBuyInOffer"}>Assigned Usd To Buy In Offer</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input placeholder={"assignedUsdToSellInOffer"} type={"number"}
                                   name={"assignedUsdToSellInOffer"} required
                                   className={"form-control"} autoComplete={"off"}
                                   defaultValue={selectedCoin?.assignedUsdToSellInOffer}
                                   onInput={handleAssignedUsdToSell}/>
                            <label htmlFor={"assignedUsdToSellInOffer"}>Assigned Usd To Sell In Offer</label>
                        </div>

                        <div className="form-check ms-4">
                            <input className="form-check-input" type="checkbox" value={selectedCoin?.id}
                                   defaultChecked={selectedCoin?.isTrading}
                                   id={"check-" + selectedCoin?.id} onClick={handleCheckBox}/>
                            <label htmlFor={"isTrading"}>Trading</label>
                        </div>

                        <Modal.Footer>
                            <button className={"btn btn-danger"} type={"submit"}>
                                <img src={trash} alt={"trash"} style={{filter: "brightness(0) invert(1)"}}/>
                            </button>

                            <button className={"btn btn-success"} type={"submit"}>
                                <img src={checked} alt={"checked"} style={{filter: "brightness(0) invert(1)"}}/>
                            </button>

                            <button type={"button"} className={"btn btn-dark"} onClick={handleCloseModal}>
                                <img src={remove} alt={"remove"} style={{filter: "brightness(0) invert(1)"}}/>
                            </button>
                        </Modal.Footer>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default EditCoinModal;