import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./CoinInformationForm.css";
import React, {ChangeEventHandler} from "react";
import ICoin from "../../types/Icoin";
import Button from "react-bootstrap/Button";

const CoinInformationForm = ({coins, handleSelectCoin, selectedCoin, handleModalLoadCoinInfo, handleShowModal}: {
    coins: ICoin[] | undefined, handleSelectCoin: ChangeEventHandler, selectedCoin: ICoin, handleModalLoadCoinInfo: any,
    handleShowModal: any
}): JSX.Element => {

    return (<>

        <section className="coins-Section desktop-section">
            <div className="container container-form-desktop d-flex justify-content-center align-items-center">
                <div className={"container "}>
                    {/*<div className={"container external-select-container mt-2"}>*/}
                        <div className={"container  internal-select-container d-flex justify-content-center"}>

                            <select className="form-select form-select-coins" aria-label="Default select example"
                                    onChange={handleSelectCoin} required>
                                <option value="" className={"align-items-center"}>Select a Coin</option>
                                {coins?.map((coin, index) => (
                                    <option value={coin.id} key={index}>{coin.name}</option>))}
                            </select>

                        </div>
                    {/*</div>*/}

                    <br/>

                    <div className={"container container-form-items"}>
                        <div className={"form-header"}>
                            <h2 className={"pt-2"}>Coins Information</h2>
                        </div>

                        <br/>

                        <form>
                            <div className={"row justify-content-between"}>
                                <div className="col-3">
                                    <label htmlFor="Name" id={"form-properties"} className="form-label">Name</label>
                                    <input type="text" id={"Name"} name={"Name"} defaultValue={selectedCoin?.name}
                                           className="form-control" disabled
                                           placeholder={"Name"}/>
                                </div>


                                <div className="col-3">
                                    <label htmlFor="Symbol" id={"form-properties"}
                                           className="form-label">Symbol</label>
                                    <input type="text" id={"input-properties"} name={"Symbol"}
                                           defaultValue={selectedCoin?.symbol} className="form-control" disabled
                                           placeholder={"Symbol"}/>
                                </div>

                                <div className="col-3">
                                    <label htmlFor="CoinAmount" id={"form-properties"}
                                           className="form-label">Coin Amount</label>
                                    <input type="text" id={"input-properties"} name={"CoinAmount"}
                                           defaultValue={selectedCoin?.coinAmount} className="form-control" disabled
                                           placeholder={"Coin Amount"}/>
                                </div>
                            </div>
                            <br/>

                            <div className="row justify-content-between">
                                <div className="col-3">
                                    <label htmlFor="MinimumUSDToBuy" id={"form-properties"}
                                           className="form-label">Minimum USD To Buy</label>
                                    <input type="text" id={"input-properties"} name={"MinimumUSDToBuy"}
                                           defaultValue={selectedCoin?.minimumUsdToBuy} className="form-control"
                                           disabled
                                           placeholder={"Minimum USD To Buy"}/>
                                </div>

                                <div className="col-3">
                                    <label htmlFor="MinimumUSDToSell" id={"form-properties"}
                                           className="form-label">Minimum USD To Sell</label>
                                    <input type="text" name={"MinimumUSDToSell"}
                                           defaultValue={selectedCoin?.minimumUsdToSell} className="form-control"
                                           disabled
                                           placeholder={"Minimum USD To Sell"}/>
                                </div>

                                <div className="col-3">
                                    <label htmlFor="AssignedUSD" id={"form-properties"}
                                           className="form-label">Assigned USD</label>
                                    <input type="text" name={"AssignedUSD"} defaultValue={selectedCoin?.assignedUsd}
                                           className="form-control" disabled
                                           placeholder={"Assigned USD"}/>
                                </div>
                            </div>
                            <br/>

                            <div className="row justify-content-between">
                                <div className="col-3">
                                    <label htmlFor="AvailableUSD" id={"form-properties"}
                                           className="form-label">Available USD</label>
                                    <input type="text" name={"AvailableUSD"}
                                           defaultValue={selectedCoin?.availableUsd}
                                           className="form-control" disabled
                                           placeholder={"Available USD"}/>
                                </div>

                                <div className="col-3">
                                    <label htmlFor="AssignedUSDToBuyInOffer" id={"form-properties"}
                                           className="form-label">Assigned USD To Buy In Offer</label>
                                    <input type="text" name={"AssignedUSDToBuyInOffer"}
                                           defaultValue={selectedCoin?.assignedUsdToBuyInOffer}
                                           className="form-control"
                                           disabled
                                           placeholder={"Assigned USD To Buy In Offer"}/>
                                </div>

                                <div className="col-3">
                                    <label htmlFor="AssignedUSDToSellInOffer" id={"form-properties"}
                                           className="form-label">Assigned USD To Sell In Offer</label>
                                    <input type="text" name={"AssignedUSDToSellInOffer"}
                                           defaultValue={selectedCoin?.assignedUsdToSellInOffer}
                                           className="form-control" disabled
                                           placeholder={"Assigned USD To Sell In Offer"}/>
                                </div>
                            </div>
                            <br/>

                            <div className="row justify-content-between">
                                <div className="col-3">
                                    <label htmlFor="UserName" id={"form-properties"}
                                           className="form-label">UserName</label>
                                    <input type="text" name={"UserName"} defaultValue={selectedCoin?.userName}
                                           className="form-control" disabled
                                           placeholder={"UserName"}/>
                                </div>

                                <div className="col-3">
                                    <label htmlFor="LastOrderPrice" id={"form-properties"}
                                           className="form-label">Last Order Price</label>
                                    <input type="text" name={"LastOrderPrice"}
                                           defaultValue={selectedCoin?.lastOrderPrice} className="form-control"
                                           disabled
                                           placeholder={"Last Order Price"}/>
                                </div>

                                <div className="col-3">
                                    <label htmlFor="LastBuyOrderPrice" id={"form-properties"}
                                           className="form-label">Last Buy Order Price</label>
                                    <input type="text" name={"LastBuyOrderPrice"}
                                           defaultValue={selectedCoin?.lastBuyOrderPrice} className="form-control"
                                           disabled
                                           placeholder={"Last Buy Order Price"}/>
                                </div>
                            </div>
                            <br/>

                            <div className="row justify-content-between">
                                <div className="col-3">
                                    <label htmlFor="LastSellOrderPrice" id={"form-properties"}
                                           className="form-label">Last Sell Order Price</label>
                                    <input type="text" name={"LastSellOrderPrice"}
                                           defaultValue={selectedCoin?.lastSellOrderPrice} className="form-control"
                                           disabled
                                           placeholder={"Last Sell Order Price"}/>
                                </div>

                                <div className="col-3">
                                    <label htmlFor="IsTrading" id={"form-properties"}
                                           className="form-label">Is Trading</label>
                                    <input type="text" name={"IsTrading"}
                                           value={selectedCoin?.isTrading === undefined ? "N/A" : String(selectedCoin?.isTrading)}
                                           className="form-control" disabled
                                           placeholder={"Is Trading"}/>
                                </div>

                                <div className="col-3" id={"invisible"}></div>
                            </div>

                            <br/>

                            <div className="container pb-2 d-flex justify-content-end">
                                <Button className={"btn btn-secondary button-form"}
                                        onClick={() => handleModalLoadCoinInfo(selectedCoin)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                         fill="currentColor"
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
                    {/*<div className={"container external-select-container mt-2"}>*/}
                        <div className={"container internal-select-container d-flex justify-content-center mt-2"}>

                            <select className="form-select form-select-mobile" aria-label="Default select example"
                                    onChange={handleSelectCoin} required>
                                <option value="">Select a Coin</option>
                                {coins?.map((coin, index) => (
                                    <option value={coin.id} key={index}>{coin.name}</option>))}
                            </select>

                        </div>
                    {/*</div>*/}

                    <br/>

                    <div className={"container container-form-items"}>

                        <form>

                            <div className={"form-header form-floating"}>
                                <h2 className={"pt-2"}>Coins Information</h2>
                            </div>

                            <br/>


                            <div className="form-floating mb-3">
                                <input type="text" name={"Name"} defaultValue={selectedCoin?.name}
                                       className="form-control"
                                       placeholder={"Name"} disabled/>
                                <label htmlFor="Name" id={"form-properties"} className="form-label">Name</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" name={"Symbol"} defaultValue={selectedCoin?.symbol}
                                       className="form-control" disabled
                                       placeholder={"Symbol"}/>
                                <label htmlFor="Symbol" id={"form-properties"} className="form-label">Symbol</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" name={"CoinAmount"} defaultValue={selectedCoin?.coinAmount}
                                       className="form-control" disabled
                                       placeholder={"Coin Amount"}/>
                                <label htmlFor="CoinAmount" id={"form-properties"}
                                       className="form-label">Coin Amount</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" name={"MinimumUSDToBuy"}
                                       defaultValue={selectedCoin?.minimumUsdToBuy}
                                       className="form-control" disabled
                                       placeholder={"Minimum USD To Buy"}/>
                                <label htmlFor="MinimumUSDToBuy" id={"form-properties"}
                                       className="form-label">Minimum USD ToBuy</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" name={"MinimumUSDToSell"}
                                       defaultValue={selectedCoin?.minimumUsdToSell} className="form-control"
                                       disabled
                                       placeholder={"Minimum USD To Sell"}/>
                                <label htmlFor="MinimumUSDToSell" id={"form-properties"}
                                       className="form-label">Minimum USD To Sell</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" name={"AssignedUSD"} className="form-control" disabled
                                       placeholder={"Assigned USD"}/>
                                <label htmlFor="AssignedUSD" id={"form-properties"}
                                       defaultValue={selectedCoin?.assignedUsd}
                                       className="form-label">Assigned USD</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" name={"AvailableUSD"} defaultValue={selectedCoin?.availableUsd}
                                       className="form-control" disabled
                                       placeholder={"Available USD"}/>
                                <label htmlFor="AvailableUSD" id={"form-properties"}
                                       className="form-label">Available USD</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" name={"AssignedUSDToBuyInOffer"}
                                       defaultValue={selectedCoin?.assignedUsdToBuyInOffer} className="form-control"
                                       disabled
                                       placeholder={"Assigned USD To Buy In Offer"}/>
                                <label htmlFor="AssignedUSDToBuyInOffer" id={"form-properties"}
                                       className="form-label">Assigned USD To Buy In Offer</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" name={"AssignedUSDToSellInOffer"}
                                       defaultValue={selectedCoin?.assignedUsdToSellInOffer}
                                       className="form-control"
                                       disabled
                                       placeholder={"Assigned USD To Sell In Offer"}/>
                                <label htmlFor="AssignedUSDToSellInOffer" id={"form-properties"}
                                       className="form-label">Assigned USD To Sell In Offer</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" name={"UserName"} defaultValue={selectedCoin?.userName}
                                       className="form-control" disabled
                                       placeholder={"UserName"}/>
                                <label htmlFor="UserName" id={"form-properties"}
                                       className="form-label">UserName</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" name={"LastOrderPrice"}
                                       defaultValue={selectedCoin?.lastOrderPrice}
                                       className="form-control" disabled
                                       placeholder={"Last Order Price"}/>
                                <label htmlFor="LastOrderPrice" id={"form-properties"}
                                       className="form-label">Last Order Price</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" name={"LastBuyOrderPrice"}
                                       defaultValue={selectedCoin?.lastBuyOrderPrice} className="form-control"
                                       disabled
                                       placeholder={"Last Buy Order Price"}/>
                                <label htmlFor="LastBuyOrderPrice" id={"form-properties"}
                                       className="form-label">Last Buy Order Price</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" name={"LastSellOrderPrice"}
                                       defaultValue={selectedCoin?.lastSellOrderPrice} className="form-control"
                                       disabled
                                       placeholder={"Last Sell Order Price"}/>
                                <label htmlFor="LastSellOrderPrice" id={"form-properties"}
                                       className="form-label">Last Sell Order Price</label>
                            </div>

                            <div className="form-floating">
                                <input type="text" name={"IsTrading"} defaultValue={selectedCoin?.isTrading === undefined ? "N/A" : String(selectedCoin?.isTrading)}
                                       className="form-control" disabled
                                       placeholder={"IsTrading"}/>
                                <label htmlFor="IsTrading" id={"form-properties"}
                                       className="form-label">IsTrading</label>
                            </div>

                            <div className="col-3" id={"invisible"}></div>

                            <br/>

                            <div className="container pb-2 pe-4 d-flex justify-content-end">
                                <Button className={"btn btn-secondary button-form"} onClick={() => handleShowModal()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                         fill="currentColor"
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
    </>);
};

export default CoinInformationForm;
