import React from "react";
import Style from "../Style/About.css";

const About = () =>{

    const aboutData=[
        {
           tit:"About", para:`I'm a title. Click here to add your own text and edit me.` ,para2:`​

           I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.`,dist:`This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.`,dist1:`At Wix we’re passionate about making templates that allow you to build fabulous websites and it’s all thanks to the support and feedback from users like you! Keep up to date with New Releases and what’s Coming Soon in Wixellaneous in Support. Feel free to tell us what you think and give us feedback in the Wix Forum. If you’d like to benefit from a professional designer’s touch, head to the Wix Arena and connect with one of our Wix Pro designers. Or if you need more help you can simply type your questions into the Support Forum and get instant answers. To keep up to date with everything Wix, including tips and things we think are cool, just head to the Wix Blog! Tip: Add your own image by double clicking the image and clicking Change Image.`, foote:`I'm a title. Click here to add your own text and edit me.`,img:"man.jpg",img1:"mani.jpg"
        }
    ]
    return(
                
        <>
        <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">

            {
              aboutData.map((item, index) => {
                return (
                  <>
              <div className="row ">
              
              <div className="col-sm-12 "> 
              <div className="row">
                  <div className="col-sm-8  mt-4" >
                    <h5>{item.tit}</h5>
                  <hr/>
                    <p className="pargraph">{item.para}</p>
                   
                   <p className="pargraph">{item.para2}</p>
                   <p className="pargraph">{item.dist}</p>
                   <p className="pargraph">{item.dist1}</p>
                   <br/>
                   <p className="pargraph">{item.dist1}</p>
                    </div>
                    <div className="col-sm-4 mt-4">
                 
                  
                 {/* <img src={`../images/` + item.img1}  className="img-fluid  mt-5 " /> */}
                  <div className="box ms-5"><img src={`../images/` + item.img}  className="img-fluid  mt-5 " /></div>
                  <div className="box ms-5"><img src={`../images/` + item.img1}  className="img-fluid  mt-5 " /></div>
                    
                    </div>
                    </div>
                    </div>
                    </div>
                    </>
                  
                )
              })
            }
            </div>
            <div className="col-sm-2">
            
            </div>
        </div>
        </>
    );
}
export default About;
