import React, {StrictMode, useEffect, useState} from "react";
import Menu from "../Menu/Menu";
import Icoin from "../../types/Icoin";
import axios from "axios";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Notification from "../../notification/Notification";
import CoinInformationForm from "./CoinInformationForm";
import EditCoinModal from "./EditCoinModal";


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
    // const [loadCoin, setLoadCoin] = useState<Icoin>();
    const [loadCoin, setLoadCoin] = useState<Icoin | any>();
    const [show, setShow] = useState<boolean>(false);





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

        if(data === undefined){
            new Notification().UndefinedNotification(false);
            return;
        }

        if(data.id === undefined){
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

        await getAllCoins();
        const notification = new Notification();
        notification.UpdateCoinNotification(response.data);
        handleCloseModal();
    }

    const handleSelectCoin =  (data:any):void => {

        // console.log(data.target.value);


        if(data.target.value){
            const coinID = Number(data.target.value);
            const result = coin?.filter((item) => item.id === coinID);
            const arrayResult = result?.shift();
            setLoadCoin(arrayResult);
        }else{
            // console.log("false");

            // const demo = document.getElementsByName("MinimunUSDToBuy") as NodeListOf<HTMLInputElement>;
            // console.log(demo[0].value);
            // if(demo[0].value !== ""){
            //     demo[0].value = "";
            // }


            const obj = {
                id: undefined,
                name: undefined,
                symbol: undefined,
                coinAmount: undefined,
                minimumUsdToBuy: undefined,
                assignedUsd: undefined,
                availableUsd: undefined,
                assignedUsdToBuyInOffer: undefined,
                minimumUsdToSell: undefined,
                assignedUsdToSellInOffer: undefined,
                userName: undefined,
                lastOrderPrice: undefined,
                lastBuyOrderPrice: undefined,
                lastSellOrderPrice: undefined,
                isTrading: undefined
            }

            setLoadCoin(obj);
        }

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
                           checkBox={checkBox} id={id!} minimumUsdToSell={minimumUsdToSell!} assignedUsd={assignedUsd!}
                           assignedUsdToBuyInOffer={assignedUsdToBuyInOffer!} assignedUsdToSellInOffer={assignedUsdToSellInOffer!}
                           minimumUsdToBuy={minimumUsdToBuy!} isTrading={isTrading!} handleChangeCoinInfo={handleChangeCoinInfo}
                           handleSubmitCoinInfo={handleSubmitCoinInfo}/>
            {/*<CoinsTable Coins={coin} handleModalLoadCoinInfo={handleModalLoadCoinInfo}/>*/}
            <CoinInformationForm handleModalLoadCoinInfo={handleModalLoadCoinInfo} Coins={coin} name={name!} assignedUsd={assignedUsd!} minimumUsdToSell={minimumUsdToSell!}
                                 assignedUsdToBuyInOffer={assignedUsdToBuyInOffer!} assignedUsdToSellInOffer={assignedUsdToSellInOffer!}
                                 minimumUsdToBuy={minimumUsdToBuy!} handleSelectCoin={handleSelectCoin} CoinData={loadCoin!} handleShowModal={handleShowModal}/>
            {/*<Modal checkBox={checkBox} id={id!}  coinName={name!} minimumUsdToSell={minimumUsdToSell!} assignedUsd={assignedUsd!}*/}
            {/*       assignedUsdToBuyInOffer={assignedUsdToBuyInOffer!} assignedUsdToSellInOffer={assignedUsdToSellInOffer!}*/}
            {/*       minimumUsdToBuy={minimumUsdToBuy!} isTrading={isTrading!} handleChangeCoinInfo={handleChangeCoinInfo}*/}
            {/*       handleSubmitCoinInfo={handleSubmitCoinInfo}/>*/}


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

        </StrictMode>
    )

}



export default Coins;
