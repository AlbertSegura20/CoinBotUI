import {toast} from "react-toastify";
import {HttpStatusCode} from "axios";


export class Notification {


    public UpdateCoinNotification = (response:HttpStatusCode) => {

       switch (response) {
           case HttpStatusCode.Accepted:
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
           default:
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

    public CreateMarginNotification = (success:any) => {

        switch (success.success) {
            case true:
                toast.success("New Margin created", {
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
                toast.error("An error occurred when you tried to create the margin", {
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


    public UpdateMarginNotification = (success:any) => {

        switch (success.success) {
            case true:
                toast.success("Updated Margin", {
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
                toast.error("An error occurred when you tried to update the margin", {
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


    public DeleteMarginNotification = (success:any) => {

        switch (success.success) {
            case true:
                toast.success("Deleted Margin", {
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
                toast.error("An error occurred when you tried to delete the margin", {
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


    public UndefinedNotification = (success:any) => {
        switch (success) {
            case false:
                toast.error("Please, Select a Coin", {
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