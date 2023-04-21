import React from "react";
import Style from "../Style/Home.css"
const Home = () => {

  const img = {
    height: "300px",
    width: "400px",
  }

  const carData = [
    {
      title: "Cloud Computing", des: `I'm a paragraph. Click here to add your own text and edit me. I’m a 
    great place for you to tell a story and let your users know a little more about you.`, img: "com.png"
    },
    {
      title: "Security", des: `I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to 
    tell a story and let your users know a little more about you.`, img: "clouds.png"
    },
    {
      title: "Mobile", des: `I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to 
    tell a story and let your users know a little more about you.`, img: "beuty.png"
    }
  ]

  const cloudData=[
    {
      titlle : "Mobility",img:"com.png",des:`​Mobility I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.`
    },
    {
      titlle:"Cloud Computing",img:"clouds.png",des:`Cloud Computing This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.`
   },
   {
    titlle:"Security",img:"beuty.png",des:"Security At Wix we’re passionate about making templates that allow you to build fabulous websites and it’s all thanks to the support and feedback from users like you! Keep up to date with New Releases and what’s Coming Soon in Wixellaneous in Support. Feel free to tell us what you think and give us feedback in the Wix Forum. If you’d like to benefit from a professional designer’s touch, head to the Wix Arena and connect with one of our Wix Pro designers. Or if you need more help you can simply type your questions into the Support Forum and get instant answers. To keep up to date with everything Wix, including tips and things we think are cool, just head to the Wix Blog!"
   },
  ]
  console.log(carData)
  return (
    <>
      <div className="outer">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-sm-1"> </div>
            <div className="col-sm-3 mt-4 top_list ">
              <h1>Secure IT Solutions​ for a more secure
                environment</h1><br /><br />
              <p>
                I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
              </p>

              <button className="btn btn-outline bg-warning mb-4">Read more</button>
            </div>
            <div className="col-sm-8 ">
              <div className="row ">
                <div className="col-sm-4 mt-5">
                  <img src='../images/it2.jpg' style={img} className="img1" />

                </div>
                <div className="col-sm-4 mt-5">
                  <img src='../images/it1.png' style={img} className="img2" />
                </div>
              </div>
            </div>

          </div>

{/* ----------------------------------------second step code start ----------------------------------------- */}
          <div className="row mx-5 mt-4 ">

            {
              carData.map((item, index) => {
                return (
                  <div className="col-sm-4 border-end border-success " >
                    <center><img src={`../images/` + item.img} style={img} className="img-fluid img-size  jjj" />
                    </center>
                    <h5><center>{item.title}</center></h5>
                    <hr />
                    <p>{item.des}</p>
                  </div>
                )
              })
            }

          </div>
          
{/* ----------------------------------------second step code end ----------------------------------------- */}

          {/* ----------------------------- third number start code -------------------------------------------- */}

          <div className="row mt-5">
            <div className="col-sm-1"></div>
            <div className="col-sm-10 me-5">
              <div className="row m-5 middle ">
                <div className="col-sm-4 mt-5 ">
                  <div className="top_box bg-warning a">
                    1. Managed IT Solutions</div>
                  <div className="middle_box bg-success a">
                    2. Web Developments
                  </div>
                  <div className="bottom_box  bg-danger a">
                    3. Hosting & Cloud Computing
                  </div>
                    </div>

                
                <div className="col-sm-4 mt-5">
                  <img src='../images/it1.png' className="imgg" />
                </div>
                <div className="col-sm-4 mt-5">
                  <h6 className="heading">Helping you find the right IT solutions.</h6>
                  <p className="para" >
                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                  <button className="btn btn-outline me-5">More</button>
                </div>
              </div>

            </div>
            <div className="col-sm-1">
          
            </div>
          </div>





          {/* ----------------------------- third number end code -------------------------------------------- */}


{/* --------------------------------------------- 5 step code start ---------------------------------------------- */}

 <div className="row it_partner m-5">
  <div className="col-sm-2"></div>
  <div className="col-sm-8">
              {
              cloudData.map((item, index) => {
                return (
                  <>
              <div className="row ">
              
              <div className="col-sm-12 "> 
              <div className="row">
                  <div className="col-sm-2 border-end border-success mt-4" >
                    <h5><center>{item.titlle}</center></h5>
                    <center><img src={`../images/` + item.img}  className="img-fluid   " />
                    </center>
                   <br/>
                    </div>
                    <div className="col-sm-8 mt-4">
                  <h5>it partner </h5>
                  <p className="pargraph">{item.des}</p>
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
                  
                  
                 
                
           
    
 




{/* --------------------------------------------- 5 step code start ------------------------------------------------ */}
        </div>
      </div>




    </>
  );
}
export default Home;