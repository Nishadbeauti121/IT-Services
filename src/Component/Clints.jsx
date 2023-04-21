import React from "react";
import Style from '../Style/Clints.css'
const Clints = () =>{

    const clintData=[
        {
            des:"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you."
        },

]
 const imageData=[
    {
        img:"w.png"
    },
    {
        img:"com.png"
    },
    {
        img:"clouds.png"
    },
   
    {
        img:"com.png"
    },
    {
        img:"w4.png"
    },
    {
        img:"w2.png"
    },
   
] 
const cltData=[
    {
        dist:`​

        “I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”`,dist1:"​​Samantha Jones, Project Manager"
    },  {
        dist:`​

        “I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”`,dist1:"​​Samantha Jones, Project Manager"
    }

]
    return(
               <div className="container">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8 mt-4">
                        <h3>Clints</h3>
                        <hr/>
                        <div className="row">
                        {
                 clintData.map((item,index)=>{
                    return(
                        <>
                        <div className="col-sm-12">
                        
                         <p className="dis " style={{fontSize:"15px"}}> {item.des}</p> 
                        </div> 
                        </>              
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
                        <div className="row mb-4">
                {
                 imageData.map((item,index)=>{
                    return(
                        <>
                        <div className="col-sm-4">
                        <div className="box "><img src={`../images/` + item.img}  className="img-fluid  mt-3" /></div>
                    </div>
              
                        </>              
                            )
                         })
                     }
                     </div>
                     </div>
                    <div className="col-sm-2"></div>
                </div>

                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8 mt-4">
                        <h3>TESTIMONIALS</h3>
                        
                        <div className="row">
                        {
                 cltData.map((item,index)=>{
                    return(
                        <>
                        <div className="col-sm-12">
                        
                         <p className="dis " style={{fontSize:"15px"}}> {item.dist}</p> 
                         <p className="dis " style={{fontSize:"12px"}}> {item.dist1}</p> 
                       
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
    );
}
export default Clints;