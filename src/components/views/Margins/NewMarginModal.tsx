import React, {ChangeEventHandler, FormEventHandler} from "react";
import IMargin from "../../types/IMargin";
import ICoin from "../../types/Icoin";

const NewMarginModal = ({CoinsName, orderTypeArray, handleCreateMarginModal, handleSubmitCreateMarginModal, handleChangeCreateModal}
                            : {CoinsName:ICoin[], orderTypeArray:string[]
    handleCreateMarginModal:any, handleSubmitCreateMarginModal:FormEventHandler, handleChangeCreateModal:ChangeEventHandler}):JSX.Element => {

    return (

        <div className="modal fade" id="newMarginStaticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                                <input placeholder={"value"} type={"number"} name={"value"} onChange={handleChangeCreateModal} required
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
        </div>
    )
}

export default NewMarginModal;