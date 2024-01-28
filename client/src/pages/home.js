import React, { useEffect } from "react"
import Header from "../components/header"
import Slider from"../components/slider.js"
import { Link } from "react-router-dom"
import Cards from"../components/card.js";
import Aos from "aos";
import 'aos/dist/aos.css';
import './home.css';
import Table from '../components/table.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function HomePage(){

  useEffect(()=>{
    Aos.init({duration:1500});
  },[])
 return(
        <div id="top">
        
      <Header/>
      <main className="mainclass">
      
      <article>
    
      
      <div class="home-icons">
        <p>FOLLOW US |</p>
        <FontAwesomeIcon icon="fa-brands fa-discord" ></FontAwesomeIcon>
        <div class="sicons">
        <a href="https://www.instagram.com/clutch_iiitkota"><ion-icon name="logo-instagram"></ion-icon></a>
        <a href="https://chat.whatsapp.com/GI8iYyrFtMUFm0Ifr5wvMt"><ion-icon name="logo-whatsapp"></ion-icon></a>
        <a href="https://discord.com/invite/Z8mVq7Gq"><ion-icon name="logo-discord"></ion-icon></a>
        <a href="https://www.youtube.com/@Clutch-iiitk"><ion-icon name="logo-youtube"></ion-icon></a>
        </div>
         </div>
        <section style={{marginTop:0,paddingBottom:0}} class="section hero" id="home" aria-label="home">
        

        
        <div class="banner-icons">
        
        
        <div data-aos="flip-down" class="container heroimage" >
  
              
            <figure class="hero-banner">
              <img class="heroposter w-100" src={require("../images/hero-banner.png")} style={{width:1000,height:500}}alt="hero banner"/>
            </figure>
  
          </div>
          </div>
        </section>
  
        <section class="section brand" aria-label="brand">
          <div class="container">
  
            <ul class="has-scrollbar">
  
              <li class="brand-item">
                <img class="colorchange" src={require('../images/brand-1.png')} style={{width:90 ,height:90 }} alt="brand logo"/>
              </li>
  
              <li class="brand-item">
                <img class="colorchange" src={require("../images/brand-2.png")} style={{width:90 ,height:90 }} alt="brand logo"/>
              </li>
  
              <li class="brand-item">
                <img class="colorchange" src={require("../images/brand-3.png")} style={{width:90,height:90}} loading="lazy" alt="brand logo"/>
              </li>
  
              <li class="brand-item">
                <img class="colorchange" src={require("../images/brand-4.png")} style={{width:90,height:90}} loading="lazy" alt="brand logo"/>
              </li>
  
              <li class="brand-item">
                <img class="colorchange" src={require("../images/brand-5.png")} style={{width:90,height:90}} loading="lazy" alt="brand logo"/>
              </li>
  
              <li class="brand-item">
                <img class="colorchange" src={require("../images/brand-6.png")} style={{width:90,height:90}} loading="lazy" alt="brand logo"/>
              </li>
  
            </ul>
  
          </div>
        </section>
  
  
       <div class="section-wrapper">
  
        <section class="section featured-game" id="teamsignup" aria-label="featured game">
        <div class="container">

          <h2 class="h2 section-title">
           Register Your <span class="span">Team</span>
          </h2>

          <div class="has-scrollbar featuregame">

           <Cards/>

          </div>

        </div>
      </section>
          
      <section class="section live-match" id="live" aria-label="live match">
      <div data-aos="fade-down" class="container livematch">

        <h2 class="h2 section-title">
        <span class="span">Watch Live Match </span>
        </h2>

        <figure class="live-match-banner img-holder" >
          
          <img src={require("../images/live-match-banner.jpg")} width="800" height="470" loading="lazy"
            alt="Live Match Video" class="img-cover"/>
            <a href="https://www.youtube.com/@Clutch-iiitk/streams">
          <button class="play-btn" aria-label="play video">
            <ion-icon name="play"></ion-icon>
          </button>
          </a>
        </figure>

        <div class="live-match-player">
          <div class="live-match-detail">

            <a href="" class="live-match-subtitle">Download Match Schedules</a>

          </div>
        </div>
        
        <Table/>
      </div>
    </section>
  
        </div>
  
    
       <section class="section featured-game" id="events" aria-label="featured game">
        <div  data-aos="zoom-in-up" class="container">

          <h2 class="h2 section-title">
           Upcoming <span class="span">Events</span>
          </h2>

          <Slider/>



        </div>
      </section>
  
  
        <section class="newsletter" aria-label="newsletter">
          <div class="container">
  
            <div class="newsletter-card">
  
              <h2 class="h2">
                Get <span class="span">Notified</span>
              </h2>
  
              <form action="" class="newsletter-form">
  
                <div class="input-wrapper skewBg">
                  <input type="email" name="email_address" aria-label="email" placeholder="Enter your email..." required
                    class="email-field"/>
  
                  <ion-icon name="mail-outline"></ion-icon>
                </div>
  
                <button type="submit" class="btn newsletter-btn skewBg">
                  <span class="span">Subscribe</span>
  
                  <ion-icon name="paper-plane" aria-hidden="true"></ion-icon>
                </button>
  
              </form>
  
            </div>
  
          </div>
        </section>
  
      </article>
    </main>

    <footer class="footer">

    <div class="footer-top">
      <div class="container">

        <div class="footer-brand">

          

          <p class="footer-text">
            Clutch Gaming is an official Esports club of Indian Institute of Information Technology, Kota (IIIT KOTA)
          </p>

          <ul class="contact-list">

            <li class="contact-item">
              <div class="contact-icon">
                <ion-icon name="location"></ion-icon>
              </div>

              <address class="item-text">
                Address :Indian Institute of Information Technology Kota,
                SPL-269, RIICO Industrial Area, Kuber Extension,
                Ranpur, Kota, Rajasthan, India - 325003
              </address>
            </li>

            {/*<li class="contact-item">
              <div class="contact-icon">
                <ion-icon name="headset"></ion-icon>
              </div>

              <a href="tel:+241245654235" class="item-text">Phone :8707740700 </a>
            </li>*/}

            <li class="contact-item">
              <div class="contact-icon">
                <ion-icon name="mail-open"></ion-icon>
              </div>

              <a href="mailto:info@exemple.com" class="item-text">Email :2021kuec2033@iiitkota.ac.in </a>
            </li>

          </ul>

        </div>

        <ul class="footer-list">

          

        </ul>

        <ul class="social-list">


        

      </ul>
        <div class="footer-wrapper">

          <div class="social-wrapper">

            <p class="footer-list-title">Follow Us</p>
            
            <ul class="social-list">


              <li>
                <a href="https://www.youtube.com/@Clutch-iiitk" class="social-link">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </li>
              <li>
              <a href="https://www.instagram.com/clutch_iiitkota" class="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            </ul>




          </div>
          </div>

      </div>
    </div>

    
    

  </footer>

</div>

  
)

}