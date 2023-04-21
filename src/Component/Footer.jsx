import React from "react";
import { NavLink } from "react-router-dom";
import Style from "../Style/Footer.css"
const Footer = () => {


    return (
        <>
            <div className="row m-5">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row mt-5">
                                <div className="col-sm-4 ">
                                    <div className="footer_right mb-3"><NavLink className="navlk" style={{textDecoration:"none"}} to="about" >About Us</NavLink></div>
                                    <div className="footer_right mb-3"><NavLink className="navlk" style={{textDecoration:"none"}} to="service" >Services</NavLink></div>
                                    <div className="footer_right mb-3"><NavLink className="navlk" style={{textDecoration:"none"}} to="carrers" >careers</NavLink></div>
                                    <div className="footer_right mb-3"><NavLink className="navlk" style={{textDecoration:"none"}} to="clints" >Clints</NavLink></div>
                                

                                </div>
                                <div className="col-sm-4">
                                <div className="footer_right mb-3"><NavLink className="navlk" style={{textDecoration:"none"}} to="suport" >Support</NavLink></div>
                                    <div className="footer_right mb-3">News Flashes</div>
                                
                                    <div className="footer_right mb-3">Our Clints</div>
                                  
                                </div>
                                <div className="col-sm-4">
                                <div className="footer_right mb-3"> Follow  twiter</div>
                                    <div className="footer_right mb-3">Links facebook</div>
                                    <div className="footer_right mb-3">join our team</div>
                                    <div className="footer_right mb-3">Give us feedback</div>
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                <div className="inbox">inbox</div>
                </div>
            </div>

        </>







    );
}
export default Footer;