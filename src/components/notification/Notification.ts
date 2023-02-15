import React from "react";
import {toast} from "react-toastify";


class Notification {


    public UpdateCoinNotification = (success:any) => {

       switch (success.success) {
           case true:
               toast.success("Updated Coin", {
                   position: "top-right",
                   autoClose: 5000,
                   hideProgressBar: false,
                   closeOnClick: true,
                   pauseOnHover: true,
                   draggable: true,
                   progress: undefined,
                   theme: "dark",
               });
               break;
           case false:
               toast.error("An error occurred when you tried to update the coin", {
                   position: "top-right",
                   autoClose: 5000,
                   hideProgressBar: false,
                   closeOnClick: true,
                   pauseOnHover: true,
                   draggable: true,
                   progress: undefined,
                   theme: "dark",
               });

       }

       }

}

export default Notification;