import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Menu.css";
import "../styles/Table.css"
import "../styles/Queries.css"
import Table from "./Table";
import Menu from "./Menu";
import Form from "./Form";
const Home = ():JSX.Element => {

    const [edit, setEdit] = useState<boolean>(true);


        return (
            <div id={"body"}>
            <Menu/>
            </div>
        )

    // if(edit){
    //
    //
    //     return (
    //
    //
    //         <div id={"body"}>
    //             <Menu/>
    //             <Form/>
    //         </div>
    //
    //     )
    //
    //
    // }else{
    //     return (
    //
    //         <div id={"body"}>
    //             <Menu/>
    //             <Table/>
    //
    //         </div>
    //
    //     )
    // }

}



export default Home;