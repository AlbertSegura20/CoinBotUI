import React, {ChangeEventHandler, FormEventHandler, useState} from "react";
import ICoin from "../../types/Icoin";
import NewFile from "../../icons/NewFile.png";
import trash from "../../icons/trash.png";
import checked from "../../icons/checked.png";
import remove from "../../icons/remove.png";
import Modal from 'react-bootstrap/Modal';
import axios from "axios/index";
import notification, {Notification} from "../../notification/Notification";

const NewMarginModal = ({show, handleCloseModal, handleShowModal, CoinsName, orderTypeArray, handleCreateMarginModal, handleSubmitCreateMarginModal, handleChangeCreateModal}
                            : {CoinsName:ICoin[], orderTypeArray:string[]
    handleCreateMarginModal:any, handleSubmitCreateMarginModal:FormEventHandler, handleChangeCreateModal:ChangeEventHandler
    , show:boolean, handleCloseModal:any, handleShowModal:any}):JSX.Element => {


/*

const NewMarginModal = ({CoinsName, orderTypeArray, handleSubmitCreateMarginModal}
                            : {CoinsName:ICoin[], orderTypeArray:string[], handleChangeCreateModal:ChangeEventHandler, handleSubmitCreateMarginModal:FormEventHandler}):JSX.Element => {


    const [value, setValue] = useState<number>();
    const [show, setShow] = useState<boolean>(false);
    const [coinID, setCoinID] = useState<number>();
    const [orderTypeModal, setNewOrderTypeModal] = useState<string>();
    const notification = new Notification();



    const handleCreateMarginModal = ({target}:{target:any}):void => {
        // // setCoinID(target.name);
        if(target.name === "selectCoin"){
            setCoinID(target.value);
        }

        if(target.name === "selectOrder"){
            setNewOrderTypeModal(target.value);

        }

    }

    const handleChangeCreateModal = ({target}:{target:any}):void => {
        setValue(target.value);
    }



    const handleSubmitMargin = (event:any) => {



    }


    const handleCloseModal = () => {
        setShow(false);
    };
    const handleShowModal = () => setShow(true);

*/




    return (

        /*<div className="modal fade" id="newMarginStaticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">New Margin</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                        <form id={"Modal-Form"} onSubmit={handleSubmitCreateMarginModal} >

                            <select className="form-select" aria-label="Default select example" name={"selectCoin"} onChange={handleCreateMarginModal} required>
                                <option value="">Select a Coin</option>
                            {CoinsName?.map((coin, index) => (
                                    <option value={coin.id} key={index}>{coin.name}</option>
                            ))}
                            </select>


                            <br/><br/>
                            <select className="form-select" aria-label="Default select example" name={"selectOrder"} onChange={handleCreateMarginModal} required>
                                <option value="">Order Type</option>
                            {orderTypeArray?.map((order, index) => (
                                <option value={order} key={index}>{order}</option>

                            ))}
                            </select>


                            <br/><br/>
                            <div className={"form-floating"}>
                                <input placeholder={"value"} type={"number"} step={".01"} name={"value"} onChange={handleChangeCreateModal} required
                                       className={"form-control"} autoComplete={"off"}/><br/>
                                <label htmlFor={"value"}>Value</label>
                            </div>


                            <div className="modal-footer">
                                <button type="button" className="btn btn-dark" data-bs-dismiss="modal" id={"Modal-Form__CloseButton"}>Close</button>
                                <button type="submit" className="btn btn-success" id={"Modal-Form__SaveButton"}>Save</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>*/

        <>

            <Modal show={show} onHide={handleCloseModal} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton className={"d-flex justify-content-center flex-column"} style={{background:"#6495ED"}}>
                    <img src={NewFile} alt={"NewFile"}
                         style={{width: "100px", height: "100px", filter: "brightness(0) invert(1)"}}/>
                    <Modal.Title>
                        <h4 className={"text-center mt-2 text-white margin-title pe-2"}>New Margin</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form onSubmit={handleSubmitCreateMarginModal} >
                    {/*<form onSubmit={handleSubmitMargin} >*/}
                        <div className={"form-floating"}>
                        <select className="form-select form-select-margins" aria-label="Default select example" name={"selectCoin"} onChange={handleCreateMarginModal} required>
                            <option value="">Select a Coin</option>
                            {CoinsName?.map((coin, index) => (
                                <option value={coin.id} key={index}>{coin.name}</option>
                            ))}
                        </select>

                        <br/><br/>
                        <select className={"form-select form-select-margins"} aria-label="Default select example" name={"selectOrder"} onChange={handleCreateMarginModal} required>
                            <option value="">Order Type</option>
                            {orderTypeArray?.map((order, index) => (
                                <option value={order} key={index}>{order}</option>

                            ))}
                        </select>
                        </div>

                        <br/><br/>

                        <div className={"form-floating"}>
                            <input placeholder={"value"} type={"number"} step={".01"} name={"value"} onChange={handleChangeCreateModal} required
                                   className={"form-control"} autoComplete={"off"}/><br/>
                            <label htmlFor={"value"}>Value</label>
                        </div>

                        <Modal.Footer>
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

export default NewMarginModal;