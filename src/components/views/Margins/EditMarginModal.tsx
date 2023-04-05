import React, {ChangeEventHandler, FormEventHandler} from "react";
import gear from "../../icons/gear.png";
import checked from "../../icons/checked.png";
import remove from "../../icons/remove.png";
import trash from "../../icons/trash.png";
import Modal from "react-bootstrap/Modal";
import "./EditMarginModal.css";


const EditMarginModal = ({name, value, orderType, showEdit, handleEditCloseModal, handleEditShowModal ,handleSubmitEditMarginModal, handleChangeEditMarginModal, updateOrDeleteMarginModal}
                             : {name:string, value:number, orderType:string,
    handleSubmitEditMarginModal:FormEventHandler,showEdit:boolean,handleEditShowModal:any, handleEditCloseModal:any, handleChangeEditMarginModal:ChangeEventHandler, updateOrDeleteMarginModal:any}):JSX.Element => {

    return (
/*
        <div className="modal fade" id="editMarginStaticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Edit Margin</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <h5>Coin Name: {name}</h5><br/>
                        <h5>Order Type: {orderType}</h5><br/>

                        <form id={"Modal-Form"} onSubmit={handleSubmitEditMarginModal}>

                            <div className={"form-floating"}>
                                <input placeholder={"value"} type={"number"} step={".01"} name={"value"} required
                                      onChange={handleChangeEditMarginModal} className={"form-control"} autoComplete={"off"} defaultValue={value}/><br/>
                                <label htmlFor={"value"}>Value</label>
                            </div>


                            <div className="modal-footer">
                                <button type="submit" className="btn btn-dark" data-bs-dismiss="modal" id={"Modal-Form__CloseButton"}>Close</button>
                                <button type="submit" className="btn btn-danger" value={"deleteButton"}
                                        id={"Modal-Form__DeleteButton"} onClick={updateOrDeleteMarginModal} data-bs-dismiss="modal" >Delete</button>
                                <button type="submit" className="btn btn-success"
                                        value={"updateButton"} id={"Modal-Form__SaveButton"} onClick={updateOrDeleteMarginModal} data-bs-dismiss="modal">Save</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>*/
        <>

            <Modal show={showEdit} onHide={handleEditCloseModal} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton className={"d-flex justify-content-center flex-column"} style={{background:"#7CB9E8"}}>
                    <img src={gear} alt={"gear"}
                         style={{width: "100px", height: "100px", filter: "brightness(0) invert(1)"}}/>
                    <Modal.Title>
                        <h4 className={"text-center mt-2 text-white margin-title"}>Edit Margin</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className={"form-margin-modal"} onSubmit={handleSubmitEditMarginModal}>

                        <div className={"form-floating"}>
                            <input placeholder={"value"} type={"text"} disabled
                                    className={"form-control"} autoComplete={"off"} defaultValue={name}/><br/>
                            <label htmlFor={"value"}>Name</label>
                        </div>

                        <div className={"form-floating"}>
                            <input placeholder={"value"} type={"text"} disabled
                                 className={"form-control"} autoComplete={"off"} defaultValue={orderType}/><br/>
                            <label htmlFor={"value"}>Order Type</label>
                        </div>


                        <div className={"form-floating"}>
                            <input placeholder={"value"} type={"number"} step={".01"} name={"value"} required
                                   onChange={handleChangeEditMarginModal} className={"form-control"} autoComplete={"off"} defaultValue={value}/><br/>
                            <label htmlFor={"value"}>Value</label>
                        </div>



                    <Modal.Footer>

                        <button className={"btn btn-danger"} type={"submit"} value={"deleteButton"} id={"Modal-Form__SaveButton"} onClick={updateOrDeleteMarginModal}>
                            <img src={trash} alt={"trash"} style={{filter: "brightness(0) invert(1)"}}/>
                        </button>

                        <button className={"btn btn-success"} type={"submit"} value={"updateButton"} id={"Modal-Form__SaveButton"} onClick={updateOrDeleteMarginModal}>
                            <img src={checked} alt={"checked"} style={{filter: "brightness(0) invert(1)"}}/>
                        </button>

                        <button type={"button"} className={"btn btn-dark"} onClick={handleEditCloseModal}>
                            <img src={remove} alt={"remove"} style={{filter: "brightness(0) invert(1)"}}/>
                        </button>

                    </Modal.Footer>
                    </form>
                </Modal.Body>
            </Modal>

        </>
    )
}

export default EditMarginModal;