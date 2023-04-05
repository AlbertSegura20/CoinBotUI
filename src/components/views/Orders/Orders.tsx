import Menu from "../Menu/Menu";
import React, {useState} from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend, Title} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import "bootstrap/dist/css/bootstrap.min.css";
import {DayPicker} from "react-day-picker";
import {format} from "date-fns";
import 'react-day-picker/dist/style.css';
import {Modal, Button} from "react-bootstrap";
import "./Orders.css";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const Orders = ():JSX.Element => {
    const data = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
            {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    const data1 = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
            {
                label: "# of Coins",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    "rgba(255, 99, 132)",
                    "rgba(54, 162, 235)",
                    "rgba(255, 206, 86)",
                    "rgba(75, 192, 192)",
                    "rgba(153, 102, 255)",
                    "rgba(255, 159, 64)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    const [selected, setSelected] = React.useState<Date>();

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>

            <Menu/>



            <section className={"orders-section vh-100"}>

                <div className={"container d-flex flex-row justify-content-around align-items-center"}>

                    <div className={"container d-flex flex-row justify-content-around align-items-center select-and-table-container "}>

                        <select className="form-select select-coin-order w-25" aria-label="Default select example">
                            <option defaultValue={""}>Select a Coin </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        <select className="form-select select-order-type w-25" aria-label="Default select example">
                            <option defaultValue={""}>Select an Order</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        <Button className={"btn btn-date"} onClick={handleShow}>
                            Select a Date
                        </Button>
                    </div>

                </div>




                <Modal show={show} onHide={handleClose} backdrop={"static"}>
                    <Modal.Header closeButton className={"bg-dark"}>
                        <Modal.Title className={"text-white fs-3"}>Calendar</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={"d-flex justify-content-center bg-dark"}>

                        <DayPicker
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                            footer={footer}
                            className={"text-white"}
                        />

                    </Modal.Body>
                    <Modal.Footer className={"bg-dark"}>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

                <div className={"d-flex align-items-center container-all-orders"}>
                    <div className={"container table-container-orders"}>
                        <div className={"scroll-orders-items"}>
                            <table className="table table-hover">
                                <thead className={"table-head-orders"}>
                                <tr className={"align-middle"}>
                                    <th scope="col">Coin Name</th>
                                    <th scope="col">Order Type</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Amount</th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>

                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>Larry the Bird</td>

                                </tr>

                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>Larry the Bird</td>

                                </tr>

                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>Larry the Bird</td>

                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>Larry the Bird</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                     </div>
                </div>
            </section>

            <section className={"charts-section"}>
                <div
                    className={
                        "container-fluid charts d-flex align-items-center justify-content-around border border-dark"
                    }
                >
                    <div className="border border-warning container-img data">
                        <h3 className={"text-center"}>Numero total XX</h3>
                        <Doughnut data={data} />
                    </div>

                    <div className="border border-danger container-img data1">
                        <h3 className={"text-center"}>Numero total ZZ</h3>
                        <Doughnut data={data1} />
                    </div>
                </div>
            </section>
        </>
    );
}


export default Orders;



















