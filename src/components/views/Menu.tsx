import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Menu.css";
import "../styles/Table.css"
import "../styles/Queries.css"
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Link} from "react-router-dom";

const Menu = () => {

    return (

        <>
            <div className={"bg-dark"} id={"Menu"}>
                <h2 className={"text-center"}> <Link to={"/"} style={{ color: '#FFF' }}>CoinBot 1.0</Link></h2>
                <br/>
                <hr/>
                <h4><Link to={"/Coins"} style={{ color: '#FFF' }}>Coins</Link></h4>
                <hr/>

                <h4>Margins</h4>
                <hr/>

                <h4>Orders</h4>
                <hr/>
                {/*<h4 className="dropdown" data-bs-toggle="dropdown" aria-expanded="false">Manage*/}
                {/*</h4>*/}
                <div className="dropdown dropdown-menu-lg-end">
                    <button data-bs-toggle="dropdown"
                            aria-expanded="false" id={"ManageButton"}><h4>Manage/</h4>
                    </button>
                    <ul className="dropdown-menu" >
                        <button className="dropdown-item">Users</button>
                        <button className="dropdown-item">Create Users</button>
                    </ul>
                </div>
                <hr/>


            </div>



            <div className={"container-fluid"} id={"containerUserName"}>

                <h2 id={"userName"} >UserName</h2>
                <button className={"btn btn-primary"} id={"buttonUser"}>^</button>
            </div>
        </>


    )
}



export default Menu;