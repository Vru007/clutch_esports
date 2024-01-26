import React from "react";
import "./tournament.css";
const tour=require("../images/tour.png")
const legend=require("../images/legend.jpg");
// import "./tournament.css";
export default function tournament(){
          
    return(
        <div>
         
           <div className="tour">
              <img src={tour} alt="tour"/>
           </div>
    
        </div>
    )
}