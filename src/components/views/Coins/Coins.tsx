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
    const handleModalLoadCoinInfo = (coin: ICoin): void => {
        if (coin === null || coin === undefined || coin.id === undefined) {
            new Notification().UndefinedNotification(false);
            return;
        }
        handleShowModal();
    }

    const handleSubmitCoinInfo = async (e: any): Promise<void> => {
        e.target.reset();
        e.preventDefault();
        setSelectedCoin(selectedCoin);
        const updatedCoin = {
            id: selectedCoin.id,
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
            setSelectedCoin(selectedCoin);
            return;
        }
        setSelectedCoin(null);
    }

    const handleCloseModal = () => {
        setShow(false);
    };
    const handleShowModal = () => setShow(true);
    
    return (
        <StrictMode>
            <Menu/>

            <CoinInformationForm handleModalLoadCoinInfo={handleModalLoadCoinInfo} coins={coins}
                                 handleSelectCoin={handleSelectCoin}
                                 selectedCoin={selectedCoin!} handleShowModal={handleShowModal}/>

            <EditCoinModal show={show} handleCloseModal={handleCloseModal} handleShowModal={handleShowModal}
                           handleSubmitCoinInfo={handleSubmitCoinInfo} selectedCoin={selectedCoin}/>

            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false}
                            newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss
                            draggable pauseOnHover theme="dark"/>
        </StrictMode>
    )
}


export default Coins;
