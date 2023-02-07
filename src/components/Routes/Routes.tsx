import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";
import Coins from "../views/Coins";

const Routes = createBrowserRouter([

    {
        path:"/",
        element:<Home/>
    },

    {
        path:"/Login",
        element:<Login/>
    },
    {
        path:"/Coins",
        element: <Coins/>
    }
])

export default Routes;