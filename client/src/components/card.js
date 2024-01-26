import React, { useEffect } from "react";
import "./cards.css";
import Aos from "aos"
import "aos/dist/aos.css"
export default function Cards(){
  useEffect(()=>{
    Aos.init({duration: 1000})
  })
    return(

        <div class="cardcontainer">
        <div data-aos="zoom-in-up" class="cards">
            
            <div class="wrapper">
              <img src={require("../images/valorant.jpg")} class="cover-image" />
            </div>
        
            <img src={require("../images/comingsoon.png")} class="character" />
        </div>
        <div data-aos="zoom-in-up" class="cards">
            
        <div class="wrapper">
          <img src={require("../images/csgo.jpg")} class="cover-image" />
        </div>
    
        <img src={require("../images/comingsoon.png")} class="character" />
    </div>
    <div data-aos="zoom-in-up" class="cards">
            
    <div class="wrapper">
      <img src={require("../images/freefire.jpg")} class="cover-image" />
    </div>

    <img src={require("../images/comingsoon.png")} class="character" />
</div>
<div data-aos="zoom-in-up" class="cards">
            
<div class="wrapper">
  <img src={require("../images/bgmi.jpg")} class="cover-image" />
</div>

<img src={require("../images/comingsoon.png")} class="character" />
</div>
        
   
       
        </div>
    )
}