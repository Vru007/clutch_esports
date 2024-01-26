import React, { useState } from "react";
import "./navbar.css";
import logo from"../images/logo.jpg";
import {Link} from 'react-router-dom';


function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const [textcolor,setColor] = useState('white');
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");

    if(textcolor==="white"){
      setColor('black');
    }
    else{
      setColor('white');
    }

    
  };

  
  return (
    
    <div className="nav">
      <img className="logoimage" src={logo}></img>
      <ul className={active}>
        <li className="nav__item">
          <Link to ="/"><h3 style={{color:textcolor}}className="navlink hover-underline-animation">
            Home
          </h3>
          </Link>
        </li>
        <li className="nav__item">
          <Link to ="/about"> <h3 style={{color:textcolor}} className="navlink hover-underline-animation">
            About
            </h3>
          </Link>
        </li>
        {/*<li className="nav__item">
          <a href="#events"><h3 style={{color:textcolor}} className="navlink hover-underline-animation">
            Previous Events
          </h3></a>
          
  </li>*/}
        <li className="nav__item">
          <a href="#teamsignup"><h3 style={{color:textcolor}} className="navlink hover-underline-animation">
            Team Signup
          </h3></a>
          
        </li>
      {/*    <li className="nav__item">
         <a href="#events"><h3 style={{color:textcolor}} className="navlink hover-underline-animation">
          Login
        </h3></a>
        
       </li>
  */}
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
}

export default Navbar;