import React from "react";
import logo from '../images/preloader.gif'
import "./preloader.css";
export default function PreLoader(){

    return(
        <div class="preloader-container">
        <img src={logo} alt="loading..." />
        </div>
    )
}