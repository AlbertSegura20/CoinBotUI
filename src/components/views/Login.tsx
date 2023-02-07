import React from "react";
import "../styles/Login.css";
import "../styles/Queries.css";
import "../styles/LoginQuerie.css";

class Login extends React.Component<any, any>{

    render() {
        return (


           <>

               <div  id={"LoginBody"}>
                   <h1 id={"WelcomeBack1"}>Welcome Back </h1>
                   <h1 id={"ToCoinBot1"}>To CoinBot</h1>



                   <div id={"backColor1"}>

                   </div>

                   <div className={"container-fluid"} id={"LoginContainer1"}>
                       <h1 id={"LoginTitle"}>Login</h1>

                       <form id={"Login"}>
                           <div className={"form-floating"}>
                               <input placeholder={"Add your FirstName"} type={"text"} name={"firstName"} required
                                      className={"form-control"} autoComplete={"off"}/><br/>
                               <label htmlFor={"firstName"}>User</label>
                           </div>

                           <div className={"form-floating"}>
                               <input placeholder={"Add your LastName"} type={"password"} name={"lastName"} required
                                      className={"form-control"} autoComplete={"off"}/><br/>
                               <label htmlFor={"lastName"}>Password</label>
                           </div>

                           <button className="btn btn-primary" id={"LoginButton"} type={"submit"}>Login</button>
                       </form>
                   </div>



               </div>


           </>

/*
            <div  id={"LoginBody"}>
                <h1 id={"WelcomeBack"}>Welcome Back </h1>
                <h1 id={"ToCoinBot"}>To CoinBot</h1>



                <div id={"backColor"}>

                </div>

                <h2 id={"Prueba"}>aaaaaaaaaaaaaaaaaaaaa</h2>

                <div className={"container-fluid"} id={"LoginContainer"}>
                    <h1 id={"LoginTitle"}>Login</h1>

                    <form id={"Login"}>
                        <div className={"form-floating"}>
                            <input placeholder={"Add your FirstName"} type={"text"} name={"firstName"} required
                                   className={"form-control"} autoComplete={"off"}/><br/>
                            <label htmlFor={"firstName"}>User</label>
                        </div>

                        <div className={"form-floating"}>
                            <input placeholder={"Add your LastName"} type={"password"} name={"lastName"} required
                                   className={"form-control"} autoComplete={"off"}/><br/>
                            <label htmlFor={"lastName"}>Password</label>
                        </div>

                        <button className="btn btn-primary" id={"LoginButton"} type={"submit"}>Login</button>
                    </form>
                </div>
            </div>*/
        );
    }

}

export default Login;


