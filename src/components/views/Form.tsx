import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Form.css"
import "../styles/Queries.css"
const Form = () => {

    return (

        <div className={"container-fluid"} id={"form"}>


            <div id={"text"}>
                <h3 id={"title"}>
                    <p >CoinName</p>
                </h3>
            </div>

            <div className={"formData"}>
                <form id={"Form"}>

                    <div className={"form-floating"}>
                        <input placeholder={"Add your FirstName"} type={"text"} name={"firstName"} required
                               className={"form-control"} autoComplete={"off"}/><br/>
                        <label htmlFor={"firstName"}>First Name</label>
                    </div>

                    <div className={"form-floating"}>
                        <input placeholder={"Add your LastName"} type={"text"} name={"lastName"} required
                              className={"form-control"} autoComplete={"off"}/><br/>
                        <label htmlFor={"lastName"}>Last Name</label>
                    </div>


                    <div className={"form-floating"}>
                        <input placeholder={"Add your License"} type={"text"} name={"agentLicense"} required
                               className={"form-control"} autoComplete={"off"}/><br/><br/>
                        <label htmlFor={"agentLicense"} >Agent License</label>
                    </div>

                    <div className={"form-floating"}>
                        <input placeholder={"Add your Address"} type={"text"} name={"address"} required
                                 className={"form-control"} autoComplete={"off"}/><br/><br/>
                        <label htmlFor={"Address"} >Address</label>
                    </div>

                    <div className={"form-floating"}>
                        <input placeholder={"Add your PracticeAreas"} type={"text"} name={"practiceAreas"} required
                                className={"form-control"} autoComplete={"off"}/><br/><br/>
                        <label htmlFor={"practiceAreas"} >Practice Areas</label>
                    </div>

                    <div className={"form-floating"}>
                        <input placeholder={"Add your PracticeAreas"} type={"text"} name={"practiceAreas"} required
                               className={"form-control"} autoComplete={"off"}/><br/><br/>
                        <label htmlFor={"practiceAreas"} >Practice Areas</label>
                    </div>



                    <button className="btn btn-primary" id={"SaveButtonForm"} type={"submit"}>Save</button>
                </form>
            </div>


         </div>




    )
}



export default Form;