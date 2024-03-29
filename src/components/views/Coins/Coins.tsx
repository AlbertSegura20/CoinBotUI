import React, {FormEventHandler, useEffect, useState} from "react";
import Menu from "../Menu";
import Icoin from "../../types/Icoin";
import axios from "axios";
import Modal from "./Modal";
import TableCoin from "./CoinsTable";
import {ToastContainer} from "react-toastify";
import Notification from "../../notification/Notification";
import CoinsTable from "./CoinsTable";


const Coins = ():JSX.Element => {

    const [coin, setCoins] = useState<Icoin[]>();
    const [id, setId] = useState<number>();
    const [name, setName] = useState<string>();
    const [minimumUsdToBuy, setMinimumUsdToBuy] = useState<number>();
    const [assignedUsd, setAssignedUsd] = useState<number>();
    const [assignedUsdToBuyInOffer, setAssignedUsdToBuyInOffer] = useState<number>();
    const [minimumUsdToSell, setMinimumUsdToSell] = useState<number>();
    const [assignedUsdToSellInOffer, setAssignedUsdToSellInOffer] = useState<number>();
    const [isTrading, setIstrading] = useState<boolean>();


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

    const checkBox = (event:any):void => {
        const object = event.target;
        let checkID = document.querySelector('#' + object.id) as HTMLInputElement;

        coin?.forEach((item) => {
            if(item.id === Number(checkID.value)){
                item.isTrading = checkID.checked;
                setIstrading(item.isTrading);
            }
        });


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

            <CoinsTable Coins={coin} handleModalLoadCoinInfo={handleModalLoadCoinInfo}/>
            <Modal checkBox={checkBox} id={id!}  coinName={name!} minimumUsdToSell={minimumUsdToSell!} assignedUsd={assignedUsd!}
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
