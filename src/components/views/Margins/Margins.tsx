import React, {useEffect, useState} from "react";
import Menu from "../Menu";
import MarginsTable from "./MarginsTable";
import IMargin from "../../types/IMargin";
import axios from "axios";
import EditMarginModal from "./EditMarginModal";
import NewMarginModal from "./NewMarginModal";
import ICoin from "../../types/Icoin";
import {Notification} from "../../notification/Notification";
import {ToastContainer} from "react-toastify";


const Margins = ():JSX.Element => {

    const [margins, setMargins] = useState<IMargin[]>();
    const [name, setName] = useState<string>();
    const [value, setValue] = useState<number>();
    const [coinID, setCoinID] = useState<number>();
    const [orderType, setOrderType] = useState<string>();
    const [coinNames, setCoinNames] = useState<ICoin[]>();
    const [orderTypeArray] = useState<string[]>(["SELL", "BUY"]);
    const [orderTypeModal, setNewOrderTypeModal] = useState<string>();
    // const [editMargin, setEditMargin] = useState<number>();
    const [idMargin, setIdMargin] = useState<number>();
    const notification = new Notification();




    useEffect(() => {

        (async () => {
            const data = await axios.get("/api/margins");
            setMargins(data.data);

        })();

    }, [])

    //EDIT MARGIN

   const handleLoadMarginModal = (data:any):void => {
        setIdMargin(data.id);
        setName(data.Coin);
        setValue(data.value);
        setOrderType(data.orderType);

   }

   const handleLoadSelectCoinMarginModal = async ():Promise<void> => {
       const data = await axios.get("/api/coins");
       setCoinNames(data.data);
   }

    const handleChangeEditMarginModal = ({target}: {target:any}):void => {
        // setEditMargin(target.value);
        setValue(target.value);
    }

    const updateOrDeleteMarginModal = async (e:any):Promise<void> => {

        if(e.target.value === "updateButton"){
            await handleUpdateMarginModal();
        }

        if(e.target.value === "deleteButton"){
            await handleDeleteMarginModal();
        }
    }

    const handleUpdateMarginModal = async ():Promise<void> => {
        const obj = {
            id: idMargin,
            name: name,
            value: value,
            orderType: orderType
            // margin: editMargin
        }
        console.log(obj);

        const response = await axios.post("/api/margins", obj);
        notification.UpdateMarginNotification(response.data);
    }
    const handleDeleteMarginModal = async ():Promise<void> => {
        const obj = {
            id: idMargin
        }
        const response = await axios.post("/api/margins", obj);
        notification.DeleteMarginNotification(response.data);
        console.log(obj);
    }

    const handleSubmitEditMarginModal = (e:any):void => {
        e.preventDefault();

    }

   //END EDIT MARGIN

   /*
   *
   *
   * */



   //SAVE MARGIN

   const handleCreateMarginModal = ({target}:{target:any}):void => {
       // // setCoinID(target.name);
       if(target.name === "selectCoin"){
           setCoinID(target.value);
       }

       if(target.name === "selectOrder"){
           setNewOrderTypeModal(target.value);

       }

   }

   const handleChangeCreateModal = ({target}:{target:any}):void => {
        setValue(target.value);
   }

    const handleSubmitCreateMarginModal = async (e:any):Promise<void> => {
        e.target.reset();
        e.preventDefault();
       await handleSaveNewMarginModal();
        //Verificar si no hay problema con que el metodo submit sea asincrono

    }

    const handleSaveNewMarginModal = async ():Promise<void> => {

        const obj = {
            idCoin: coinID,
            value: value,
            orderType: orderTypeModal
        }
        const response = await axios.post("/api/margins", obj);
        notification.CreateMarginNotification(response.data);
    }

    //END SAVE MARGIN

    return (
        <div id={"body"}>
        <Menu/>
        <MarginsTable Margins={margins!} handleLoadSelectCoinMarginModal={handleLoadSelectCoinMarginModal} handleLoadMarginModal={handleLoadMarginModal}/>
        <EditMarginModal updateOrDeleteMarginModal={updateOrDeleteMarginModal} handleChangeEditMarginModal={handleChangeEditMarginModal} handleSubmitEditMarginModal={handleSubmitEditMarginModal} name={name!} value={value!} orderType={orderType!}/>
        <NewMarginModal CoinsName={coinNames!} orderTypeArray={orderTypeArray}
                        handleCreateMarginModal={handleCreateMarginModal} handleSubmitCreateMarginModal={handleSubmitCreateMarginModal}
                        handleChangeCreateModal={handleChangeCreateModal}/>

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

export default Margins;