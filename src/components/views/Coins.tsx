import React, {useEffect, useState} from "react";
import Menu from "./Menu";
import Form from "./Form";
import Table from "./Table";
import Coin from "../types/Coin";
import axios from "axios";
import coin from "../types/Coin";

const Coins = ():JSX.Element => {

    const [coin, setCoins] = useState<Coin[]>()
    const [edit, setEdit] = useState<boolean>(true);
    // http://localhost:8080/api/coins

    useEffect(() => {

        (async () => {
            const data = await axios.get("/api/coins");
           setCoins(data.data);
        })();

        }, [])

    const handleEdit = (data:coin):void => {
        setEdit(true);
    }

    if(edit){


        return (

            <div id={"body"}>
                <Menu/>
                {/*<Form/>*/}



                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Launch static backdrop modal
                </button>

                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                asdasd
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Understood</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )


    }else{
        return (

            <div id={"body"}>
                <Menu/>
                <Table Coins={coin} handleEdit={handleEdit}/>

            </div>

        )
    }

}



export default Coins;