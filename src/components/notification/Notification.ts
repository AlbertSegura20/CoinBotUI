import {toast} from "react-toastify";
import {HttpStatusCode} from "axios";


export class Notification {

    public UpdateCoinNotification = (response: HttpStatusCode) => {
        if (response === HttpStatusCode.Accepted) {
            this.showToastSuccess("Updated Coin");
        } else {
            this.showToastError("An error occurred when you tried to update the coin");
        }
    }

    public CreateMarginNotification = (response: HttpStatusCode) => {

        if (response === HttpStatusCode.Created) {
            this.showToastSuccess("New Margin created");
        } else {
            this.showToastError("An error occurred when you tried to create the margin");
        }
    }

    public UpdateMarginNotification = (response: HttpStatusCode) => {
        if (response === HttpStatusCode.Accepted) {
            this.showToastSuccess("Updated Margin");
        } else {
            this.showToastError("An error occurred when you tried to update the margin");
        }
    }


    public DeleteMarginNotification = (response: HttpStatusCode) => {
        if (response === HttpStatusCode.NoContent) {
            this.showToastSuccess("Deleted Margin");
        } else {
            this.showToastError("An error occurred when you tried to delete the margin");
        }
    }

    private showToastSuccess = (message: String) => {
        toast.success(message, {
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

    private showToastError = (message: String) => {
        toast.error(message, {
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


    public UndefinedNotification = (success: any) => {
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