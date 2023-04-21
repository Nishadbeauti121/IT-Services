import React from "react";
import { NavLink } from "react-router-dom";
import Style from "../Style/Header.css";

const Header = () => {

    return (
        <div className="outer">
            <div className="container-fluid">
                <div className="row p-3">
                    <div className="col-sm-2 "></div>

                    <div className="col-sm-8  ">
                        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                            <div className="container-fluid">

                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className="nav-link ms-3 rounded-3 text-center" aria-current="page" to="home">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link ms-3 rounded-3 text-center" to="about">About</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink className="nav-link ms-3 rounded-3 text-center" to="service">Services</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink className="nav-link ms-3 rounded-3 text-center" to="carrers">Carrers</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink className="nav-link ms-3 rounded-3 text-center" to="suport">Suport</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink className="nav-link ms-5 rounded-3 text-center" to="bookonline">Bookonline</NavLink>
                                        </li>

                                        <li className="nav-item">
                                           
                                             <a className="fs-5 ps-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
       <center>Login</center> 
        </a>
        
       
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
                                        </li>

                                    </ul>

                                </div>

                            </div>


                        </nav>
                    </div>
                    <div className="col-sm-2"></div>
                </div>

                
            </div>
            <div className="row2 ">
                <div className="col-sm-1  bottom_nav"></div>
                <div className="col-sm-7  bottom_nav">
                <h1>IT Services</h1>
                <p>Providing a Complete Suite of IT Solutions</p>
                </div>
                <div className="col-sm-4  bottom_nav"></div>
                </div>
        </div>
    );
}
export default Header;