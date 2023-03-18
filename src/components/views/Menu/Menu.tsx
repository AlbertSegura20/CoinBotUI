import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Link} from "react-router-dom";
import React from "react";




const Menu = () => {

    return (

        <>
        <section className={"Navbar-section"}>

            <div className={"navbar-container"}>

                <div>

                    <nav className="navbar navbar-dark navbar-expand-lg bg-dark pb-3">
                        <div className="container-fluid">

                            <a className="navbar-brand" href="#">Brand</a>


                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>


                            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                <ul className="navbar-nav mx-auto">

                                    <li className="nav-item d-flex align-items-center">
                                        <Link to={"/"} style={{textDecoration:"none", color:"#fff"}}>Home</Link>
                                    </li>

                                    <li className="nav-item d-flex align-items-center">
                                        <Link to={"/coins"} style={{ color: '#FFF', textDecoration: "none" }}>Coins</Link>
                                    </li>
                                    <li className="nav-item d-flex align-items-center">
                                        <Link to={"/margins"} style={{ color: '#FFF', textDecoration: "none" }}>Margins</Link>
                                    </li>
                                    <li className="nav-item d-flex align-items-center">
                                        <Link to={"/orders"} style={{ color: '#FFF', textDecoration: "none" }}>Orders</Link>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                           aria-expanded="false">
                                            Manage
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item " href="#">Action</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                        </ul>
                                    </li>
                                </ul>

                                <ul className={"navbar-nav"}>
                                    <li className="nav-user dropdown">
                                        <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown"
                                           aria-expanded="false">
                                            UserName
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item " href="#">Action</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

            </div>
        </section>
        </>

    )
}

export default Menu;