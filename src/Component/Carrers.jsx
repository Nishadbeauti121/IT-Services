import React from "react";
 import Styel from "../Style/Carrers.css"

const Carrers = () =>{
 
        const creData=[
                    {
                        title:"I'm a title. Click here to add your own text and edit me.",des:"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you."
                    },
           
        ],
        boxData=[
            {
                ind:"1",  tite:"I'm a title. Click to edit me.",disc:`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.​`
            },
            {
                ind:"2", tite:"I'm a title. Click to edit me.",disc:`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.​`
            },
            {
                ind:"3", tite:"I'm a title. Click to edit me.",disc:`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.​`
            },
            {
                ind:"4",tite:"I'm a title. Click to edit me.",disc:`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.​`
            },
            
        ]
    return(
               <>
                  <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8 mt-4">
                        <h3>Carrers</h3>
                        <hr/>
                        <div className="row">
                        {
                         creData.map((item,index)=>{
                            return(
                                <div className="col-sm-12">
                                 <p> {item.title}</p> 
                                 <p className="dist " style={{fontSize:"15px"}}> {item.des}</p> 
                                </div>               
                                    )
                                 })
                             }
                            </div>
                            </div>
                    <div className="col-sm-2"></div>
                 <div className="row">
                     <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <div className="row mt-5">
                            {
                                boxData.map((item,index)=>{
                                    return(
                                                <>
                                            <div className="col-sm-2 border-end border-danger box_outer "> 
                                            <div className="boxx rounded-2 text-center"><h1 className="hed">{item.ind}</h1></div>
                                           </div>
                                                <div className="col-sm-10 ps-5"><h4>{item.tite}</h4>
                                                <p className="pars fs-6">{item.disc}</p>
                                                </div>
                                                </>
                                    )
                                })
                            }
                            
                        </div>
                    </div>
                     <div className="col-sm-2"></div>
                 </div>
        
                </div>
                </div>
               </>
    );
}
export default Carrers;