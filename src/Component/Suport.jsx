import React from "react";
import Style from '../Style/Suport.css'
const Suport = () =>{
    const creData=[
        {
           hed:"lets task", title:"​​Thanks for your interest in our services. Please fill out the email form, submit and we will get back to you soon."
        }

],
imginData=[
    {
        img:"web1.jpg"
    }
]

    return(
        <div className="container-fluid">
        <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8 mt-4">
                <h3>Support</h3>
                <hr/>
                <div className="row">
                {
                 creData.map((item,index)=>{
                    return(
                        <div className="col-sm-12">
                         <p> {item.hed}</p> 
                         <p> {item.title}</p> 
                         <p className="dist " style={{fontSize:"15px"}}> {item.des}</p> 
                        </div>               
                            )
                         })
                     }
                    </div>
                    </div>
            <div className="col-sm-2"></div>
            </div>

            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <div className="row">
                        <div className="col-sm-8 mb-4">
                            <form>
                            <input type="email" className="form-control " name="email" id="Email" placeholder="email"/>
                            <br/>
                            <input type="text" className="form-control" name="name" id="Name" placeholder="name"/>
                            <br/>
                            <input type="text" className="form-control" name="subject" id="Subject" placeholder="subject"/>
                            <br/>
                            <textarea  cols="40" rows="4"  name="submit" placeholder="description" className="form-control"></textarea>
                            <button type="submit" className=" form-control btn btn-primary mb-3  btnn-btnn mt-3 ">Submit</button>
                         </form>
                        </div>
                        <div className="col-sm-4 mt">
                            <div className="row">
                                {
                                    imginData.map((item,index)=>{
                                        return(
                                        <>
                 
                                        <div className="col-sm-12 mt-5 ">
        
<div className="box ms-5"><img src={`images/`+item.img}  /> 
                                        </div> 
                                        </div>
                                        </>
                                        )
                                    })
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2"></div>
            </div>

          
            </div>
    );
}
export default Suport;