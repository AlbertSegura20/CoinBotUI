import React, {StrictMode, useEffect, useState} from "react";
// import Menu from "../Menu";
import Menu from "../Menu/Menu";
import MarginsTable from "./MarginsTable";
import IMargin from "../../types/IMargin";
import axios from "axios";
import EditMarginModal from "./EditMarginModal";
import NewMarginModal from "./NewMarginModal";
import ICoin from "../../types/Icoin";
import {Notification} from "../../notification/Notification";
import {ToastContainer} from "react-toastify";
import "./MarginsModal.css";


const Margins = ():JSX.Element => {

    const [margins, setMargins] = useState<IMargin[]>();
    const [name, setName] = useState<string>();
    const [value, setValue] = useState<number>();
    const [coinID, setCoinID] = useState<number>();
    const [orderType, setOrderType] = useState<string>();
    const [coinNames, setCoinNames] = useState<ICoin[]>();
    const [orderTypeArray] = useState<string[]>(["SELL", "BUY"]);
    const [orderTypeModal, setNewOrderTypeModal] = useState<string>();
    const [idMargin, setIdMargin] = useState<number>();
    const [show, setShow] = useState<boolean>(false);
    const [showEdit, setShowEdit] = useState<boolean>(false);
    const notification = new Notification();




    useEffect(() => {

        (async () => {
            const data = await axios.get("/api/margins");
            setMargins(data.data.data);

        })();

    }, [])

    const getAllData = async ():Promise<void> => {
        const data = await axios.get("/api/margins");
        setMargins(data.data.data);
    }


    //EDIT MARGIN

   const handleLoadMarginModal = (data:any):void => {
        setIdMargin(data.id);
        setName(data.Coin);
        setValue(data.value);
        setOrderType(data.orderType);
        handleEditShowModal();
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
        }
        console.log(obj);

        const response = await axios.put("/api/margins", obj);
        notification.UpdateMarginNotification(response.status);
        await getAllData();
    }
    const handleDeleteMarginModal = async ():Promise<void> => {
        const obj = {
            id: idMargin
        }
        console.log(obj);
        const response = await axios.delete("/api/margins", {data: obj});
        notification.DeleteMarginNotification(response.status);
        console.log(obj);
        await getAllData();
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


    const handleLoadSelectCoinMarginModal = async ():Promise<void> => {
        // const data = await axios.get("/api/coins");
        // setCoinNames(data.data);
        handleShowModal();
    }


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
        await getAllData();
        //Verificar si no hay problema con que el metodo submit sea asincrono

    }

    const handleSaveNewMarginModal = async ():Promise<void> => {

        const obj = {
            idCoin: coinID,
            value: value,
            orderType: orderTypeModal
        }
        const response = await axios.post("/api/margins", obj);
        notification.CreateMarginNotification(response.status);
    }

    const handleCloseModal = () => {
        setShow(false);
    };
    const handleShowModal = () => setShow(true);

    const handleEditCloseModal = () => {
        setShowEdit(false);
    };
    const handleEditShowModal = () => setShowEdit(true);

    //END SAVE MARGIN

    return (
        <StrictMode>
        <Menu/>
        <MarginsTable Margins={margins!}
                      handleLoadSelectCoinMarginModal={handleLoadSelectCoinMarginModal}
                      handleLoadMarginModal={handleLoadMarginModal}/>







        <EditMarginModal updateOrDeleteMarginModal={updateOrDeleteMarginModal}
                         handleChangeEditMarginModal={handleChangeEditMarginModal}
                         handleSubmitEditMarginModal={handleSubmitEditMarginModal}
                         name={name!} value={value!} orderType={orderType!}
                         showEdit={showEdit} handleEditCloseModal={handleEditCloseModal} handleEditShowModal={handleEditShowModal}/>




        <NewMarginModal show={show} handleCloseModal={handleCloseModal} handleShowModal={handleShowModal} CoinsName={coinNames!} orderTypeArray={orderTypeArray}
                        handleCreateMarginModal={handleCreateMarginModal} handleSubmitCreateMarginModal={handleSubmitCreateMarginModal}
                        handleChangeCreateModal={handleChangeCreateModal}/>

        {/*<NewMarginModal CoinsName={coinNames!} orderTypeArray={orderTypeArray}*/}
        {/*                    handleSubmitCreateMarginModal={handleSubmitCreateMarginModal}*/}
        {/*                    handleChangeCreateModal={handleChangeCreateModal}/>*/}

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

export default Margins;