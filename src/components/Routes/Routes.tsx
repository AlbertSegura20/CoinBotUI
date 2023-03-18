import React, {StrictMode} from "react";
import {createBrowserRouter} from "react-router-dom";
// import Home from "../views/Home";
import Home from "../views/Home/Home";
import Login from "../views/Login/Login";
import Coins from "../views/Coins/Coins";
import Margins from "../views/Margins/Margins";
import Orders from "../views/Orders/Orders";


const Routes = createBrowserRouter([

    {
        path:"/",
        element:<StrictMode><Home/></StrictMode>
    },

    {
        path:"/login",
        element:<StrictMode><Login/></StrictMode>
    },
    {
        path:"/coins",
        element: <StrictMode><Coins/></StrictMode>
    },
    {
        path:"/margins",
        element: <StrictMode><Margins/></StrictMode>
    },
    {
        path:"/orders",
        element: <Orders/>
    }
])

export default Routes;