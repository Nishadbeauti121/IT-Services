import React from "react";
import Style from '../Style/Book.css'

const Bookonline = () => {

    const bookData = [
        {
            img: "clouds.png", title: "I'am a Service", time: "1 hr 50", book: "BOOK NOW"
        },
        {
            img: "man.jpg", title: "I'am a Service", time: "1 hr 50", book: "BOOK NOW"
        },
        {
            img: "w2.png", title: "I'am a Service", time: "1 hr 50", book: "BOOK NOW"
        },
        {
            img: "w1.png", title: "I'am a Service", time: "1 hr 50", book: "BOOK NOW"
        }
    ]
    return( 
        <div className="container">
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8 mt-2">
                    <h4>Book Online</h4>
                    <hr />
                    <br />

                    <hr />
                </div>
                <div className="col-sm-2"></div>
            </div>

            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <div className="row mb-4 ">
                        {
                            bookData.map((item, index) => {
                                return (
                                    <>
                                        <div className="col-sm-2 mt-2 ">
                     <div className="boxe  p-0"><img src={`images/` + item.img} /> </div>
                     </div>
                        <div className="col-sm-4 mt-2">{item.title}</div>
                            <div className="col-sm-4 mt-2">{item.time}</div>
                            <div className="col-sm-2 float-end mt-2">
                    <button type="button" className="btn btn-primary active" data-bs-toggle="button" aria-pressed="true">{item.book}</button>
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
export default Bookonline;