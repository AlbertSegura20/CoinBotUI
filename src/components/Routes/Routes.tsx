import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login/Login";
import Coins from "../views/Coins/Coins";
import Margins from "../views/Margins/Margins";
import Orders from "../views/Orders/Orders";


const Routes = createBrowserRouter([

    {
        path:"/",
        element:<Home/>
    },

    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/coins",
        element: <Coins/>
    },
    {
        path:"/margins",
        element: <Margins/>
    },
    {
        path:"/orders",
        element: <Orders/>
    }
])

export default Routes;