import React, {useEffect, useState} from "react";
import Menu from "./Menu";
import Table from "./Table";
import Icoin from "../types/Icoin";
import axios from "axios";
// import coin from "../types/Coin";
import Modal from "./Modal";

const Coins = ():JSX.Element => {

    const [coin, setCoins] = useState<Icoin[]>()
    // const [edit, setEdit] = useState<boolean>(true);
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
           // console.log(data.data);
        })();

        }, [])

    const handleModalLoadCoinInfo = (data:Icoin):void => {
        // setEdit(true);

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
    }

    const handleSubmitCoinInfo = (e:any):void => {
        e.target.reset();
        e.preventDefault();
        console.log(assignedUsd, minimumUsdToBuy, minimumUsdToSell, assignedUsdToSellInOffer, assignedUsdToBuyInOffer);

    }


    return (

        <div id={"body"}>
            <Menu/>
            <Table Coins={coin} handleModalLoadCoinInfo={handleModalLoadCoinInfo}/>
            <Modal coinName={name!} minimumUsdToSell={minimumUsdToSell!} assignedUsd={assignedUsd!}
                   assignedUsdToBuyInOffer={assignedUsdToBuyInOffer!} assignedUsdToSellInOffer={assignedUsdToSellInOffer!}
                   minimumUsdToBuy={minimumUsdToBuy!} isTrading={isTrading!} handleChangeCoinInfo={handleChangeCoinInfo}
                   handleSubmitCoinInfo={handleSubmitCoinInfo}/>

        </div>
    )
    /*
    if(edit){


        return (

            <div id={"body"}>
                <Menu/>
                {/!*<Form/>*!/}


                <h2 data-bs-toggle="modal" data-bs-target="#staticBackdrop">Holaaaa</h2>

                <Modal/>

            </div>

        )


    }else{
        return (

            <div id={"body"}>
                <Menu/>
                <Table Coins={coin} handleCoinEdit={handleCoinEdit}/>

            </div>

        )
    }*/

}



export default Coins;