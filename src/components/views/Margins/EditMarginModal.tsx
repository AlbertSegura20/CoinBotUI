import React, {ChangeEventHandler, FormEventHandler} from "react";


const EditMarginModal = ({name, value, orderType, handleSubmitEditMarginModal, handleChangeEditMarginModal, updateOrDeleteMarginModal}
                             : {name:string, value:number, orderType:string,
    handleSubmitEditMarginModal:FormEventHandler, handleChangeEditMarginModal:ChangeEventHandler, updateOrDeleteMarginModal:any}):JSX.Element => {

    return (

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
        </div>
    )
}

export default EditMarginModal;