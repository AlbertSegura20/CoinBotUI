import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Home.css";
import Code from "../../images/Code.jpeg";
import {Link} from "react-router-dom";
import React from "react";

const Home = () => {
    return (
        <>

            <section className={"navbar-container vh-100"}>

                <div className={"container"}>

                    <nav className="navbar navbar-dark navbar-expand-lg bg-transparent rounded-3 pb-3">
                        <div className="container-fluid">

                            <a className="navbar-brand text-white" href="#">Brand</a>
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
                                        <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown"
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
                                        <a className="nav-link dropdown-toggle text-white" role="button" data-bs-toggle="dropdown"
                                           aria-expanded="false" href={"#"}>
                                            UserName
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href={"#"}>Action</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>


                {/*HERO SECTION*/}
                <div className={"container"}>

                    <div className={"hero "}>
                        <h1 className={"hero-title"}>Welcome to PROJECT XERO</h1>

                        <div className={"heroText-container"}>
                            <p className={"hero-text"}>Make Trading never was so EASY!</p>
                        </div>

                    </div>


                </div>


            </section>


            {/*WHAT IS XERO SECTION*/}
            <section className={"Xero-Section"}>

                <div className={"border border-info container Xero-SectionContainer "}>
                    <div className={"mx-auto border border-warning mt-1"}>
                        <h2 className={"text-center"}>What is PROJECT XERO?</h2>
                    </div>

                    <div className={"container border border-danger mt-2"}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis urna a dui bibendum rhoncus.
                            Donec auctor justo eu felis pellentesque finibus at vel quam. Pellentesque dolor magna, egestas quis odio at, mattis mattis nisi.
                            Quisque sit amet ipsum eu nisl cursus tempus id eu leo. Sed venenatis aliquet nunc, vitae mattis erat molestie vel.
                            Phasellus rhoncus sit amet elit sit amet mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            In id lacus pellentesque, interdum libero eu,</p>
                    </div>

                    <div className={"container border border-success container-code"}>
                        <img className={"CodeImage"} src={Code} alt={"Code"} />
                    </div>

                    {/*data-bs-toggle="modal" data-bs-target="#exampleModal"*/}
                    {/*<div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">*/}
                    {/*    <div className="modal-dialog">*/}
                    {/*        <div className="modal-content">*/}
                    {/*            <div className="modal-header">*/}
                    {/*                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>*/}
                    {/*                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>*/}
                    {/*            </div>*/}
                    {/*            <div className="modal-body">*/}

                    {/*                    <img className={"CodeImage"} src={Code} alt={"Code"} />*/}
                    {/*            </div>*/}
                    {/*            <div className="modal-footer">*/}
                    {/*                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}



                </div>

            </section>






            <section className={"container border border-danger "}>

                <div className={"About-Us border border-warning d-flex flex-column justify-content-center"}>
                    <div>
                        <h2 className={"text-center"}>About us</h2>
                    </div>

                    <div className={"mt-2"}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis urna a dui bibendum rhoncus.
                            Donec auctor justo eu felis pellentesque finibus at vel quam. Pellentesque dolor magna, egestas quis odio at, mattis mattis nisi.</p>
                    </div>

                </div>

            </section>

            <footer className={"d-flex border border-danger"}>

                <div className={"container d-flex border border-danger justify-content-center align-items-center"}>
                    <p className={"text-white border border-danger"}>FOOTER</p>
                </div>

            </footer>

        </>
    );
};

export default Home;