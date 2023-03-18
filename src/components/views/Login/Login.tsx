import React from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


class Login extends React.Component<any, any>{

    render() {
        return (

           <>
               <section className={"login-page"}>

               <div className={"container-fluid"}>

                   <div className={"d-flex justify-content-center vh-100 align-items-center"}>

                       <form className={"border border-light pt-4 rounded-3 d-flex flex-column form"} style={{width:"450px", height:"300px"}}>
                           <h2 className={"text-white text-center pb-3 login"}>Sign in </h2>

                           <div className="form-floating  mb-3 text-white">
                               <input type="email" className="form-control bg-transparent text-white fs-5" id="floatingInput" placeholder="name@example.com"/>
                               <label htmlFor="floatingInput">Email address</label>
                           </div>

                           <div className="form-floating text-white">
                               <input type="password" className="form-control mb-2 bg-transparent text-white fs-5" id="floatingPassword" placeholder="Password"/>
                               <label htmlFor="floatingPassword">Password</label>
                           </div>

                           <button className={"btn btn-light  mx-auto my-auto bg-transparent text-white btn-login"} style={{width:"130px"}}>Sign in</button>

                       </form>



                   </div>

               </div>

               </section>

           </>

        );
    }

}

export default Login;


