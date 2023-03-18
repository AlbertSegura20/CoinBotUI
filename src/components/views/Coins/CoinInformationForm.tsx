import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./CoinInformationForm.css";
import React, {ChangeEventHandler, MouseEventHandler, useState} from "react";
import Icoin from "../../types/Icoin";
import coins from "./Coins";
import Button from "react-bootstrap/Button";

const CoinInformationForm = ({Coins, name, handleSelectCoin, CoinData, handleModalLoadCoinInfo, handleShowModal, assignedUsd, minimumUsdToSell, assignedUsdToBuyInOffer,
                            assignedUsdToSellInOffer,minimumUsdToBuy} :
                           {Coins:Icoin[]|undefined, handleSelectCoin:ChangeEventHandler, name:string, CoinData:Icoin, handleModalLoadCoinInfo:any,
                           handleShowModal:any, assignedUsd:number,minimumUsdToSell:number, assignedUsdToBuyInOffer:number,
                           assignedUsdToSellInOffer:number,minimumUsdToBuy:number}):any => {



    return (
        <>

            <section className="coins-Section desktop-section">

                <div className="container container-form-desktop d-flex justify-content-center align-items-center">

                    <div className={"container "}>

                        <div className={"container external-select-container mt-2"}>

                            <div className={"container internal-select-container"}>
                                <select className="form-select" aria-label="Default select example" onChange={handleSelectCoin} required>
                                    <option value="">Select a Coin</option>
                                    {Coins?.map((coin, index) => (
                                        <option value={coin.id} key={index}>{coin.name}</option>
                                    ))}
                                </select>
                            </div>

                        </div>



                        <br/>


                        <div className={"container container-form-items"}>

                            <div className={"form-header"}>
                                <h2>Coins Data</h2>
                            </div>

                            <br/>


                            <form>


                                <div className={"row justify-content-between"}>

                                    <div className="col-3">
                                        <label htmlFor="Name" id={"form-properties"} className="form-label">Name</label>
                                        <input type="text" id={"Name"} name={"Name"} defaultValue={CoinData?.name} className="form-control" disabled
                                               placeholder={"Name"}/>
                                    </div>

                                    <div className="col-3">
                                        <label htmlFor="Symbol" id={"form-properties"} className="form-label">Symbol</label>
                                        <input type="text" id={"input-properties"} name={"Symbol"} defaultValue={CoinData?.symbol} className="form-control" disabled
                                               placeholder={"Symbol"}/>
                                    </div>

                                    <div className="col-3">
                                        <label htmlFor="CoinAmount"  id={"form-properties"} className="form-label">CoinAmount</label>
                                        <input type="text" id={"input-properties"}  name={"CoinAmount"} defaultValue={CoinData?.coinAmount} className="form-control" disabled
                                               placeholder={"CoinAmount"}/>
                                    </div>

                                </div>


                                <div className="row justify-content-between">

                                    <div className="col-3">
                                        {/*minimumUsdToBuy===undefined ? CoinData?.minimumUsdToBuy : CoinData.minimumUsdToBuy = minimumUsdToBuy*/}
                                        <label htmlFor="MinimunUSDToBuy"  id={"form-properties"} className="form-label">MinimunUSDToBuy</label>
                                        <input type="text"  id={"input-properties"} name={"MinimunUSDToBuy"} defaultValue={CoinData?.minimumUsdToBuy} className="form-control" disabled
                                               placeholder={"MinimunUSDToBuy"}/>
                                    </div>

                                    <div className="col-3">
                                        {/*minimumUsdToSell===undefined ? CoinData?.minimumUsdToSell : CoinData.minimumUsdToSell = minimumUsdToSell*/}
                                        <label htmlFor="MinimunUSDToSell" id={"form-properties"} className="form-label">MinimunUSDToSell</label>
                                        <input type="text"   name={"MinimunUSDToSell"} defaultValue={CoinData?.minimumUsdToSell} className="form-control" disabled
                                               placeholder={"MinimunUSDToSell"}/>
                                    </div>


                                    <div className="col-3">
                                        {/*assignedUsd===undefined ? CoinData?.assignedUsd : CoinData.assignedUsd = assignedUsd*/}
                                        <label htmlFor="AssignedUSD" id={"form-properties"} className="form-label">AssignedUSD</label>
                                        <input type="text"  name={"AssignedUSD"} defaultValue={CoinData?.assignedUsd} className="form-control" disabled
                                               placeholder={"AssignedUSD"}/>
                                    </div>

                                </div>



                                <div className="row justify-content-between">

                                    <div className="col-3">
                                        <label htmlFor="AvailableUSD"  id={"form-properties"} className="form-label">AvailableUSD</label>
                                        <input type="text"  name={"AvailableUSD"} defaultValue={CoinData?.availableUsd}  className="form-control" disabled
                                               placeholder={"AvailableUSD"}/>
                                    </div>

                                    <div className="col-3">
                                        {/*assignedUsdToBuyInOffer===undefined ? CoinData?.assignedUsdToBuyInOffer : CoinData.assignedUsdToBuyInOffer = assignedUsdToBuyInOffer*/}
                                        <label htmlFor="AssignedUSDToBuyInOffer"  id={"form-properties"} className="form-label">AssignedUSDToBuyInOffer</label>
                                        <input type="text"  name={"AssignedUSDToBuyInOffer"} defaultValue={CoinData?.assignedUsdToBuyInOffer}  className="form-control" disabled
                                               placeholder={"AssignedUSDToBuyInOffer"}/>
                                    </div>


                                    <div className="col-3">
                                        {/*assignedUsdToSellInOffer===undefined ? CoinData?.assignedUsdToSellInOffer: CoinData.assignedUsdToSellInOffer = assignedUsdToSellInOffer*/}
                                        <label htmlFor="AssignedUSDToSellInOffer" id={"form-properties"} className="form-label">AssignedUSDToSellInOffer</label>
                                        <input type="text"  name={"AssignedUSDToSellInOffer"} defaultValue={CoinData?.assignedUsdToSellInOffer}  className="form-control" disabled
                                               placeholder={"AssignedUSDToSellInOffer"}/>
                                    </div>

                                </div>



                                <div className="row justify-content-between">

                                    <div className="col-3">
                                        <label htmlFor="UserName" id={"form-properties"} className="form-label">UserName</label>
                                        <input type="text"  name={"UserName"} defaultValue={CoinData?.userName} className="form-control" disabled
                                               placeholder={"UserName"}/>
                                    </div>

                                    <div className="col-3">
                                        <label htmlFor="LastOrderPrice" id={"form-properties"} className="form-label">LastOrderPrice</label>
                                        <input type="text"  name={"LastOrderPrice"} defaultValue={CoinData?.lastOrderPrice} className="form-control" disabled
                                               placeholder={"LastOrderPrice"}/>
                                    </div>


                                    <div className="col-3">
                                        <label htmlFor="LastBuyOrderPrice" id={"form-properties"} className="form-label">LastBuyOrderPrice</label>
                                        <input type="text"   name={"LastBuyOrderPrice"} defaultValue={CoinData?.lastBuyOrderPrice} className="form-control" disabled
                                               placeholder={"LastBuyOrderPrice"}/>
                                    </div>

                                </div>



                                <div className="row justify-content-between">

                                    <div className="col-3">
                                        <label htmlFor="LastSellOrderPrice"  id={"form-properties"} className="form-label">LastSellOrderPrice</label>
                                        <input type="text" name={"LastSellOrderPrice"} defaultValue={CoinData?.lastSellOrderPrice} className="form-control" disabled
                                               placeholder={"LastSellOrderPrice"}/>
                                    </div>

                                    <div className="col-3">
                                        <label htmlFor="IsTrading" id={"form-properties"} className="form-label">IsTrading</label>
                                        <input type="text"  name={"IsTrading"} value={CoinData?.isTrading === undefined ? "N/A":String(CoinData?.isTrading)} className="form-control" disabled
                                               placeholder={"IsTrading"}/>
                                    </div>

                                    <div className="col-3" id={"invisible"}>

                                    </div>

                                </div>

                                <br/>

                                <div className="container pb-2 d-flex justify-content-end">
                                    <Button className={"btn btn-secondary button-form"} onClick={() => handleModalLoadCoinInfo(CoinData)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                             className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                            <path
                                                d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                        </svg>
                                    </Button>
                                </div>

                            </form>

                        </div>

                    </div>
                </div>

            </section>
            <section className={"coins-Section min-vh-100 mobile-section "}>

                <div className="container container-form d-flex justify-content-center align-items-center">

                    <div className={"container mobile-container"}>

                        <div className={"container external-select-container mt-2"}>

                            <div className={"container internal-select-container"}>
                                <select className="form-select" aria-label="Default select example" onChange={handleSelectCoin} required>
                                    <option value="">Select a Coin</option>
                                    {Coins?.map((coin, index) => (
                                        <option value={coin.id} key={index}>{coin.name}</option>
                                    ))}
                                </select>
                            </div>

                        </div>

                        <br/>

                        <div className={"container container-form-items"}>

                            <div className={"form-header"}>
                                <h2>Coins Data</h2>
                            </div>

                            <br/>

                            <form>

                                <div className="form-floating mb-3">
                                    <input type="text"  name={"Name"} defaultValue={CoinData?.name} className="form-control"
                                           placeholder={"Name"} disabled/>
                                    <label htmlFor="Name" id={"form-properties"} className="form-label">Name</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="text"  name={"Symbol"} defaultValue={CoinData?.symbol} className="form-control" disabled
                                           placeholder={"Symbol"}/>
                                    <label htmlFor="Symbol" id={"form-properties"} className="form-label">Symbol</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="text"   name={"CoinAmount"} defaultValue={CoinData?.coinAmount} className="form-control" disabled
                                           placeholder={"CoinAmount"}/>
                                    <label htmlFor="CoinAmount"  id={"form-properties"} className="form-label">CoinAmount</label>
                                </div>



                                <div className="form-floating mb-3">
                                    <input type="text"  name={"MinimunUSDToBuy"} defaultValue={CoinData?.minimumUsdToBuy} className="form-control" disabled
                                           placeholder={"MinimunUSDToBuy"}/>
                                    <label htmlFor="MinimunUSDToBuy"  id={"form-properties"} className="form-label">MinimunUSDToBuy</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="text"   name={"MinimunUSDToSell"} defaultValue={CoinData?.minimumUsdToSell} className="form-control" disabled
                                           placeholder={"MinimunUSDToSell"}/>
                                    <label htmlFor="MinimunUSDToSell" id={"form-properties"} className="form-label">MinimunUSDToSell</label>
                                </div>


                                <div className="form-floating mb-3">
                                    <input type="text"  name={"AssignedUSD"}  className="form-control" disabled
                                           placeholder={"AssignedUSD"}/>
                                       <label htmlFor="AssignedUSD" id={"form-properties"} defaultValue={CoinData?.assignedUsd} className="form-label">AssignedUSD</label>
                                </div>




                                <div className="form-floating mb-3">
                                    <input type="text"  name={"AvailableUSD"} defaultValue={CoinData?.availableUsd} className="form-control" disabled
                                           placeholder={"AvailableUSD"}/>
                                      <label htmlFor="AvailableUSD"  id={"form-properties"} className="form-label">AvailableUSD</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="text"  name={"AssignedUSDToBuyInOffer"} defaultValue={CoinData?.assignedUsdToBuyInOffer} className="form-control" disabled
                                           placeholder={"AssignedUSDToBuyInOffer"}/>
                                      <label htmlFor="AssignedUSDToBuyInOffer"  id={"form-properties"} className="form-label">AssignedUSDToBuyInOffer</label>
                                </div>


                                <div className="form-floating mb-3">
                                    <input type="text"  name={"AssignedUSDToSellInOffer"} defaultValue={CoinData?.assignedUsdToSellInOffer} className="form-control" disabled
                                           placeholder={"AssignedUSDToSellInOffer"}/>
                                      <label htmlFor="AssignedUSDToSellInOffer" id={"form-properties"} className="form-label">AssignedUSDToSellInOffer</label>
                                </div>




                                <div className="form-floating mb-3">
                                    <input type="text"  name={"UserName"} defaultValue={CoinData?.userName}className="form-control" disabled
                                           placeholder={"UserName"}/>
                                     <label htmlFor="UserName" id={"form-properties"} className="form-label">UserName</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="text"  name={"LastOrderPrice"} defaultValue={CoinData?.lastOrderPrice} className="form-control" disabled
                                           placeholder={"LastOrderPrice"}/>
                                    <label htmlFor="LastOrderPrice" id={"form-properties"} className="form-label">LastOrderPrice</label>
                                </div>


                                <div className="form-floating mb-3">
                                    <input type="text"   name={"LastBuyOrderPrice"} defaultValue={CoinData?.lastBuyOrderPrice} className="form-control" disabled
                                           placeholder={"LastBuyOrderPrice"}/>
                                     <label htmlFor="LastBuyOrderPrice" id={"form-properties"} className="form-label">LastBuyOrderPrice</label>
                                </div>




                                <div className="form-floating mb-3">
                                    <input type="text" name={"LastSellOrderPrice"} defaultValue={CoinData?.lastSellOrderPrice} className="form-control" disabled
                                           placeholder={"LastSellOrderPrice"}/>
                                     <label htmlFor="LastSellOrderPrice"  id={"form-properties"} className="form-label">LastSellOrderPrice</label>
                                </div>

                                <div className="form-floating">
                                    <input type="text"  name={"IsTrading"} defaultValue={String(CoinData?.isTrading)} className="form-control" disabled
                                           placeholder={"IsTrading"}/>
                                      <label htmlFor="IsTrading" id={"form-properties"} className="form-label">IsTrading</label>
                                </div>

                                <div className="col-3" id={"invisible"}>

                                </div>

                                <br/>

                                <div className="container pb-2 d-flex justify-content-end">
                                    <button className={"btn btn-success button-form"} onClick={() => handleShowModal()}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                             className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                            <path
                                                d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                        </svg>
                                    </button>
                                </div>

                            </form>


                        </div>
                    </div>
                </div>

            </section>



        </>
    );

};

export default CoinInformationForm;
