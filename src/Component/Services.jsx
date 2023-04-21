import React from "react";
import Style from "../Style/Services.css"

const Services = () => {
        const serData=[
                    {
                        title:"I'm a title. Click here to add your own text and edit me.",des:"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you."
                    },
        ]
 const sereData=[
    {
        tit:`
        I'm a title.​
        
        Click to edit me.​`,
        img:"com.png",
        dis:`
        I'm a title.​
        
        Click to edit me.​
        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
        
        Tip: Use this area to describe one of your services. You can change the title to the service you provide and use this text area to describe your service. Feel free to change the image.`
    },
    {
        tit:`
        I'm a title.​
        
        Click to edit me.​`,
        img:"clouds.png",
        dis:`
        I'm a title.​
        
        Click to edit me.​
        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
        
        Tip: Use this area to describe one of your services. You can change the title to the service you provide and use this text area to describe your service. Feel free to change the image.`
    },
    {
        tit:`
        I'm a title.​
        
        Click to edit me.​`,
        img:"it2.jpg",
        dis:`
        I'm a title.​
        
        Click to edit me.​
        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
        
        Tip: Use this area to describe one of your services. You can change the title to the service you provide and use this text area to describe your service. Feel free to change the image.`
    },
    {
        tit:`
        I'm a title.​
        
        Click to edit me.​`,
        img:"w1.png",
        dis:`
        I'm a title.​
        
        Click to edit me.​
        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
        
        Tip: Use this area to describe one of your services. You can change the title to the service you provide and use this text area to describe your service. Feel free to change the image.`
    },
    {
        tit:`
        I'm a title.​
        
        Click to edit me.​`,
        img:"w3.png",
        dis:`
        I'm a title.​
        
        Click to edit me.​
        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
        
        Tip: Use this area to describe one of your services. You can change the title to the service you provide and use this text area to describe your service. Feel free to change the image.`
    },
    {
        tit:`
        I'm a title.​
        
        Click to edit me.​`,
        img:"clouds.png",
        dis:`
        I'm a title.​
        
        Click to edit me.​
        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
        
        Tip: Use this area to describe one of your services. You can change the title to the service you provide and use this text area to describe your service. Feel free to change the image.`
    },
    
]
    return(
               <>
                <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8 mt-4">
                        <h3>Services</h3>
                        <hr/>
                        <div className="row">
                        {
                         serData.map((item,index)=>{
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
                </div>
                <div className="row">
                <div className="col-sm-2"> </div>
                <div className="col-sm-8 mid-horizental ">
                <div className="row ">
                {
                         sereData.map((item,index)=>{
                            return(
                                <>
                                <div className="col-sm-4 main-col ms-3 mt-3 ps-4 ">
                                <div className="row top mt-3"><p className="parag mt-5">{item.tit}</p></div>
                                <div className="row mid mt-3"><img src={`../images/` + item.img}   /></div>
                                <div className="row bottom mt-3 "><p>{item.dis}</p></div>
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
          </>
              
                  
    );
                            }
export default Services;