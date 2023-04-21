import React from "react";
import Home from "./Component/Home";
import Header from "./Component/Header";
import About from "./Component/About";
import Carrers from "./Component/Carrers";
import Suport from "./Component/Suport";
import Bookonline from "./Component/Bookonline";
import Clints from "./Component/Clints";
import Services from "./Component/Services";
import Login from "./Component/Login";

import Footer from "./Component/Footer";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";


import {BrowserRouter,Routes,Route} from "react-router-dom";


const App = () =>{

    return(
                
               <BrowserRouter>
               <Header/>
               <Routes>
                <Route path="/home" element={<Home />}/>
                
                <Route path="/about" element={<About />}/>
                <Route path="/carrers" element={<Carrers />}/>
                 <Route path="/service" element={<Services />}/>
              <Route path = "/suport" element={< Suport/>}/>
                 <Route path="/bookonline" element={<Bookonline/>}/>
                 <Route path="/login" element={<Login/>}/>
                 <Route path="/clints" element={<Clints/>}/>
           
                
               </Routes>
               <Footer/>
               </BrowserRouter>
               
    );
}
export default App;