import React, {useState} from "react";
import Menu from "./Menu";
import Form from "./Form";
import Table from "./Table";

const Coins = ():JSX.Element => {

    const [edit, setEdit] = useState<boolean>(false);



    if(edit){


        return (


            <div id={"body"}>
                <Menu/>
                <Form/>
            </div>

        )


    }else{
        return (

            <div id={"body"}>
                <Menu/>
                <Table/>

            </div>

        )
    }

}



export default Coins;