import React, {useEffect, useState} from "react";
import Menu from "../Menu";
import MarginsTable from "./MarginsTable";
import IMargin from "../../types/IMargin";
import axios from "axios";
import EditMarginModal from "./EditMarginModal";
import NewMarginModal from "./NewMarginModal";
import ICoin from "../../types/Icoin";


const Margins = ():JSX.Element => {

    const [margins, setMargins] = useState<IMargin[]>();
    const [name, setName] = useState<string>();
    const [value, setValue] = useState<number>();
    const [coinID, setCoinID] = useState<number>();
    const [orderType, setOrderType] = useState<string>();
    const [coinNames, setCoinNames] = useState<ICoin[]>();
    const [orderTypeArray] = useState<string[]>(["SELL", "BUY"]);
    const [orderTypeModal, setOrderTypeModal] = useState<string>();


    useEffect(() => {

        (async () => {
            const data = await axios.get("/api/margins");
            setMargins(data.data);

        })();

    }, [])

   const handleLoadMarginModal = (data:any):void => {
        setName(data.Coin);
        setValue(data.value);
        setOrderType(data.orderType);

   }

   const handleLoadSelectCoinMarginModal = async ():Promise<void> => {
       const data = await axios.get("/api/coins");
       setCoinNames(data.data);
   }

   const handleCreateMarginModal = ({target}:{target:any}):void => {
       // // setCoinID(target.name);
       if(target.name === "selectCoin"){
           setCoinID(target.value);
       }

       if(target.name === "selectOrder"){
           setOrderTypeModal(target.value);

       }

   }

   const handleChangeCreateModal = ({target}:{target:any}):void => {
        setValue(target.value);
   }

    const handleSubmitCreateMarginModal = (e:any):void => {
        e.target.reset();
        e.preventDefault();
        handleSaveNewMarginModal();

    }

    const handleSaveNewMarginModal = async ():Promise<void> => {

        const obj = {
            coinID: coinID,
            value: value,
            orderType: orderTypeModal
        }

        const response = await axios.post("/api/margins", obj);
        console.log(response.data);
    }

    const handleDeleteMarginModal = async ():Promise<void> => {

    }


    return (
        <div id={"body"}>
        <Menu/>
        <MarginsTable Margins={margins!} handleLoadSelectCoinMarginModal={handleLoadSelectCoinMarginModal} handleLoadMarginModal={handleLoadMarginModal}/>
        <EditMarginModal name={name!} value={value!} orderType={orderType!}/>
        <NewMarginModal CoinsName={coinNames!} orderTypeArray={orderTypeArray}
                        handleCreateMarginModal={handleCreateMarginModal} handleSubmitCreateMarginModal={handleSubmitCreateMarginModal}
                        handleChangeCreateModal={handleChangeCreateModal}/>
        </div>
    )
}

export default Margins;