import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Menu.css";
import "../styles/Table.css"
import "../styles/Queries.css"
import Menu from "./Menu";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Home = ():JSX.Element => {

    const notify = () => toast('🦄 Wow so easy!');


        return (
            <div id={"body"}>
            <Menu/>


            </div>
        )

}



export default Home;