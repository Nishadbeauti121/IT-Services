import React from "react";

const Login = () =>{

    return(
    <>
        <button type="button" className="btn btn-primary fs-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
       <center>Login</center> 
        </button>
        
       
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-2 text-decoration-underline" id="staticBackdropLabel">Login Here</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
              <form action="">
               <div className="row">
               <div className="col-sm-12 ">
               your name:<br/>
               <input type="text" className="form-control" placeholder="enter your name" /><br/>
               Mobile no:<br/>
               <input type="text"className="form-control" placeholder="enter your number"/><br/>
             project type:<br/>
                <input type="text"className="form-control" placeholder="project type"/><br/>
                your Email:<br/>
               <input type="email"className="form-control" placeholder="enter your Email"/><br/>
            project title:<br/>
               <input type="text"className="form-control" placeholder="project title"/><br/>
            cost of project:<br/>
                <input type="text"className="form-control" placeholder="cost of project"/><br/>
               </div>
              
         </div>
          description:<br/>
          <textarea rows="3" cols="60" placeholder="description your project" className="form-control"></textarea>
          <br/>
          <input type="submit"value="send"className="btn btn-info w-100 fw-bold text-white"/>
          </form>
        
            </div>
          </div>
        </div>
        </div>
        </>
    );
}
export default Login;