import React, {StrictMode, useEffect, useState} from "react";
import Menu from "../Menu/Menu";
import ICoin from "../../types/Icoin";
import axios, {HttpStatusCode} from "axios";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Notification from "../../notification/Notification";
import CoinInformationForm from "./CoinInformationForm";
import EditCoinModal from "./EditCoinModal";


const Coins = (): JSX.Element => {

    const [coins, setCoins] = useState<ICoin[]>();
    const [id, setId] = useState<number>();
    const [name, setName] = useState<string>();
    const [minimumUsdToBuy, setMinimumUsdToBuy] = useState<number>();
    const [assignedUsd, setAssignedUsd] = useState<number>();
    const [assignedUsdToBuyInOffer, setAssignedUsdToBuyInOffer] = useState<number>();
    const [minimumUsdToSell, setMinimumUsdToSell] = useState<number>();
    const [assignedUsdToSellInOffer, setAssignedUsdToSellInOffer] = useState<number>();
    const [isTrading, setIstrading] = useState<boolean>();
    // const [loadCoin, setLoadCoin] = useState<Icoin>();
    const [loadCoin, setLoadCoin] = useState<ICoin | any>();
    const [selectedCoin, setSelectedCoin] = useState<ICoin | any>();
    const [show, setShow] = useState<boolean>(false);


    useEffect(() => {

        (async () => {
            const data = await axios.get("/api/coins");
            if (HttpStatusCode.Ok === data.status) {
                console.log(data.data.data)
                setCoins(data.data.data);
            }
        })();
    }, []);


    const getAllCoins = async (): Promise<void> => {
        const data = await axios.get("/api/coins");
        if (HttpStatusCode.Ok === data.status) {
            setCoins(data.data.data);
        }
    }
    const handleModalLoadCoinInfo = (data: ICoin): void => {
        if (data === undefined) {
            new Notification().UndefinedNotification(false);
            return;
        }

        if (data.id === undefined) {
            new Notification().UndefinedNotification(false);
            return;
        }
        setId(data.id);
        setName(data.name);
        setAssignedUsd(data.assignedUsd);
        setMinimumUsdToBuy(data.minimumUsdToBuy);
        setAssignedUsdToBuyInOffer(data.assignedUsdToBuyInOffer);
        setMinimumUsdToSell(data.minimumUsdToSell);
        setAssignedUsdToSellInOffer(data.assignedUsdToSellInOffer);
        setIstrading(data.isTrading);
        handleShowModal();
    }

    const handleSubmitCoinInfo = async (e: any): Promise<void> => {
        e.target.reset();
        e.preventDefault();
        setSelectedCoin(selectedCoin);

        const updatedCoin = {
            id: id,
            assignedUsd: selectedCoin.assignedUsd,
            minimumUsdToBuy: selectedCoin.minimumUsdToBuy,
            minimumUsdToSell: selectedCoin.minimumUsdToSell,
            assignedUsdToBuyInOffer: selectedCoin.assignedUsdToBuyInOffer,
            assignedUsdToSellInOffer: selectedCoin.assignedUsdToSellInOffer,
            isTrading: selectedCoin.isTrading
        }

        const response = await axios.put("/api/coins", updatedCoin);
        await getAllCoins();
        const notification = new Notification();
        notification.UpdateCoinNotification(response.status);
        handleCloseModal();
    }

    const handleSelectCoin = (data: any): void => {
        const value = data.target.value;
        if (value) {
            const coinId = Number(value);
            const result = coins?.filter((coin) => coin.id === coinId);
            const selectedCoin = result?.shift();
            setLoadCoin(selectedCoin);
            setSelectedCoin(selectedCoin);
            return;
        }
        setLoadCoin(null);
        setSelectedCoin(null);
    }

    const handleCloseModal = () => {
        setShow(false);
    };
    const handleShowModal = () => setShow(true);


    return (

        // <div id={"body"}>
        //     <Menu/>
        //
        //     <CoinsTable Coins={coin} handleModalLoadCoinInfo={handleModalLoadCoinInfo}/>
        //     <Modal checkBox={checkBox} id={id!}  coinName={name!} minimumUsdToSell={minimumUsdToSell!} assignedUsd={assignedUsd!}
        //            assignedUsdToBuyInOffer={assignedUsdToBuyInOffer!} assignedUsdToSellInOffer={assignedUsdToSellInOffer!}
        //            minimumUsdToBuy={minimumUsdToBuy!} isTrading={isTrading!} handleChangeCoinInfo={handleChangeCoinInfo}
        //            handleSubmitCoinInfo={handleSubmitCoinInfo}/>
        //
        //     <ToastContainer
        //         position="top-right"
        //         autoClose={5000}
        //         hideProgressBar={false}
        //         newestOnTop={false}
        //         closeOnClick
        //         rtl={false}
        //         pauseOnFocusLoss
        //         draggable
        //         pauseOnHover
        //         theme="dark"
        //     />
        // </div>


        <StrictMode>
            <Menu/>

            <EditCoinModal show={show} handleCloseModal={handleCloseModal} handleShowModal={handleShowModal}
                           id={id!} handleSubmitCoinInfo={handleSubmitCoinInfo} selectedCoin={selectedCoin}/>

            <CoinInformationForm handleModalLoadCoinInfo={handleModalLoadCoinInfo} coins={coins}
                                 handleSelectCoin={handleSelectCoin}
                                 selectedCoin={selectedCoin!} handleShowModal={handleShowModal}/>

            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false}
                            newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss
                            draggable pauseOnHover theme="dark"/>
        </StrictMode>
    )
}


export default Coins;
