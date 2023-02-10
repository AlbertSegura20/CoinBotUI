import React, {useEffect, useState} from "react";
import Menu from "./Menu";
import Table from "./Table";
import Coin from "../types/Coin";
import axios from "axios";
// import coin from "../types/Coin";
import Modal from "./Modal";

const Coins = ():JSX.Element => {

    const [coin, setCoins] = useState<Coin[]>()
    // const [edit, setEdit] = useState<boolean>(true);
    const [name, setName] = useState<string>();
    const [minimumUsdToBuy, setMinimumUsdToBuy] = useState<number>();
    const [assignedUsd, setAssignedUsd] = useState<number>();
    const [assignedUsdToBuyInOffer, setAssignedUsdToBuyInOffer] = useState<number>();
    const [minimumUsdToSell, setMinimumUsdToSell] = useState<number>();
    const [assignedUsdToSellInOffer, setAssignedUsdToSellInOffer] = useState<number>();


    // http://localhost:8080/api/coins

    useEffect(() => {

        (async () => {
            const data = await axios.get("/api/coins");
           setCoins(data.data);
        })();

        }, [])

    const handleModalLoadCoinInfo = (data:Coin):void => {
        // setEdit(true);
        setName(data.name);
        setAssignedUsd(data.assignedUsd);
        setMinimumUsdToBuy(data.minimumUsdToBuy);
        setAssignedUsdToBuyInOffer(data.assignedUsdToBuyInOffer);
        setMinimumUsdToSell(data.minimumUsdToSell);
        setAssignedUsdToSellInOffer(data.assignedUsdToSellInOffer);


    }


    return (

        <div id={"body"}>
            <Menu/>
            <Table Coins={coin} handleModalLoadCoinInfo={handleModalLoadCoinInfo}/>
            <h2 data-bs-toggle="modal" data-bs-target="#staticBackdrop">Holaaaa</h2>

            <Modal coinName={name!} minimumUsdToSell={minimumUsdToSell!} assignedUsd={assignedUsd!}
                   assignedUsdToBuyInOffer={assignedUsdToBuyInOffer!} assignedUsdToSellInOffer={assignedUsdToSellInOffer!}
                   minimumUsdToBuy={minimumUsdToBuy!}/>

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