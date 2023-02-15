import React, {useEffect, useState} from "react";
import Menu from "./Menu";
import Icoin from "../types/Icoin";
import axios from "axios";
import Modal from "./Modal";
import TableCoin from "./TableCoin";
import {toast, ToastContainer} from "react-toastify";
import NotificationSuccess from "../notification/Notification";
import Notification from "../notification/Notification";

const Coins = ():JSX.Element => {

    const [coin, setCoins] = useState<Icoin[]>()
    const [id, setId] = useState<number>();
    const [name, setName] = useState<string>();
    const [minimumUsdToBuy, setMinimumUsdToBuy] = useState<number>();
    const [assignedUsd, setAssignedUsd] = useState<number>();
    const [assignedUsdToBuyInOffer, setAssignedUsdToBuyInOffer] = useState<number>();
    const [minimumUsdToSell, setMinimumUsdToSell] = useState<number>();
    const [assignedUsdToSellInOffer, setAssignedUsdToSellInOffer] = useState<number>();
    const [isTrading, setIstrading] = useState<boolean>();


    // http://localhost:8080/api/coins

    useEffect(() => {

        (async () => {
            const data = await axios.get("/api/coins");
           setCoins(data.data);

        })();
        }, []);


    const getAllCoins = async ():Promise<void> => {
        const data = await axios.get("/api/coins");
        setCoins(data.data);
    }
    const handleModalLoadCoinInfo = (data:Icoin):void => {

        setId(data.id);
        setName(data.name);
        setAssignedUsd(data.assignedUsd);
        setMinimumUsdToBuy(data.minimumUsdToBuy);
        setAssignedUsdToBuyInOffer(data.assignedUsdToBuyInOffer);
        setMinimumUsdToSell(data.minimumUsdToSell);
        setAssignedUsdToSellInOffer(data.assignedUsdToSellInOffer);
        setIstrading(data.isTrading);

    }

    const handleChangeCoinInfo = ({target}:{target:any}):void => {


        if(target.name === "assignedUsd")
            setAssignedUsd(target.value);
        if(target.name === "minimumUsdToBuy")
            setMinimumUsdToBuy(target.value);
        if(target.name === "minimumUsdToSell")
            setMinimumUsdToSell(target.value);
        if(target.name === "assignedUsdToSellInOffer")
            setAssignedUsdToSellInOffer(target.value);
        if(target.name === "assignedUsdToBuyInOffer")
            setAssignedUsdToBuyInOffer(target.value);
        if(target.name === "isTrading")
            setIstrading(target.checked);

    }

    const handleSubmitCoinInfo = async (e:any):Promise<void> => {
        e.target.reset();
        e.preventDefault();

        const objectCoin = {
            id: id,
            assignedUsd: assignedUsd,
            minimumUsdToBuy: minimumUsdToBuy,
            minimumUsdToSell: minimumUsdToSell,
            assignedUsdToBuyInOffer: assignedUsdToBuyInOffer,
            assignedUsdToSellInOffer: assignedUsdToSellInOffer,
            isTrading: isTrading
        }
        const response = await axios.put("/api/coins",  objectCoin);
        getAllCoins();
        const notification = new Notification();
        notification.UpdateCoinNotification(response.data);

    }




    return (

        <div id={"body"}>
            <Menu/>

            <TableCoin Coins={coin} handleModalLoadCoinInfo={handleModalLoadCoinInfo}/>
            <Modal coinName={name!} minimumUsdToSell={minimumUsdToSell!} assignedUsd={assignedUsd!}
                   assignedUsdToBuyInOffer={assignedUsdToBuyInOffer!} assignedUsdToSellInOffer={assignedUsdToSellInOffer!}
                   minimumUsdToBuy={minimumUsdToBuy!} isTrading={isTrading!} handleChangeCoinInfo={handleChangeCoinInfo}
                   handleSubmitCoinInfo={handleSubmitCoinInfo}/>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    )

}



export default Coins;
