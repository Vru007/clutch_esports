import React from "react";
import Header from "../components/header";
import "./aboutus.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from 'react-responsive-carousel';
export default function AboutPage() {
  return (
    <div class="container">
      <Header />
      <div class="about-content">
        <div class="image-container">
          <img class="logo-image" src={require("../images/logo.jpg")}></img>
        </div>
        <div class="about-clutch">
          <h1>The Official E-sports Club of IIIT KOTA</h1>
          <p>
          Unleashing the Power of Play: Join Clutch the Esports Club Where Passion Meets Precision, and Victory is the Ultimate Achievement!"
          </p>
        </div>
      </div>
     {/* <div class="about-team">
        <h1>Meet Our Team</h1>
        <br></br>
        <br />

        
            <div class="teaminfo-card" id="carousel-class">
            <figure
              class="profile-banner profile-img-holder"
            
            >
              <img
              src={require("../images/devanshu.jpg")} 
    
                loading="lazy"
                alt="vrushik-patel"
                class="profile-img-cover"
                id="carousel-img"
              />
            </figure>
    
            <div class="profile-content">
              <ul class="card-meta-list">
                <li class="card-meta-item">
                  <ion-icon name="person-outline"></ion-icon>
    
                  <a class="item-text">
                    Coordinator
                  </a>
                </li>
              </ul>
    
              <h3>
                <a class="card-title">
                  Devanshu Saran
                </a>
              </h3>
            </div>
          </div>
          
        

        <div class="manager-container-first">
        <h2>Pr Managers</h2>
        <div class="carousel-container">
        <Carousel >
      <div class="teaminfo-card" id="carousel-class">
        <figure
          class="profile-banner profile-img-holder"
        
        >
          <img src={require("../images/vanshaj.jpeg")}

            loading="lazy"
            alt="vanshaj-bhatnagar"
            class="profile-img-cover"
            id="carousel-img"
          />
        </figure>

        <div class="profile-content">
          <ul class="card-meta-list">
            <li class="card-meta-item">
              <ion-icon name="person-outline"></ion-icon>

              <a class="item-text">
                PR Manager
              </a>
            </li>
          </ul>

          <h3>
            <a class="card-title">
              Vanshaj Bhatnagar
            </a>
          </h3>
        </div>
      </div>
      <div class="teaminfo-card" id="carousel-class">
        <figure
          class="profile-banner profile-img-holder"
        
        >
          <img
          src={require("../images/anadi.png")}

            loading="lazy"
            alt="vrushik-patel"
            class="profile-img-cover"
            id="carousel-img"
          />
        </figure>

        <div class="profile-content">
          <ul class="card-meta-list">
            <li class="card-meta-item">
              <ion-icon name="person-outline"></ion-icon>

              <a class="item-text">
                PR Manager
              </a>
            </li>
          </ul>

          <h3>
            <a class="card-title">
              Anadi Singh
            </a>
          </h3>
        </div>
      </div>
      
        </Carousel>
        </div>
        </div>

        <div class="managers-container">
        <h2>Social Media & Content Managers</h2>
        <div class="carousel-container">
        <Carousel>
        <div class="teaminfo-card" id="carousel-class">
        <figure
          class="profile-banner profile-img-holder"
        
        >
          <img
          src={require("../images/Harshit_dohare.jpeg")}

            loading="lazy"
            alt="vrushik-patel"
            class="profile-img-cover"
            id="carousel-img"
          />
        </figure>

        <div class="profile-content">
          <ul class="card-meta-list">
            <li class="card-meta-item">
              <ion-icon name="person-outline"></ion-icon>

              <a class="item-text">
                Social Media Manager
              </a>
            </li>
          </ul>

          <h3>
            <a class="card-title">
              Harshit Dohare
            </a>
          </h3>
        </div>
      </div>
      <div class="teaminfo-card" id="carousel-class">
        <figure
          class="profile-banner profile-img-holder"
        
        >
          <img
          src={require("../images/shivansh.jpg")} 

            loading="lazy"
            alt="vrushik-patel"
            class="profile-img-cover"
            id="carousel-img"
          />
        </figure>

        <div class="profile-content">
          <ul class="card-meta-list">
            <li class="card-meta-item">
              <ion-icon name="person-outline"></ion-icon>

              <a class="item-text">
                Content Creator
              </a>
            </li>
          </ul>

          <h3>
            <a class="card-title">
              Shivansh Yadav
            </a>
          </h3>
        </div>
      </div>
      <div class="teaminfo-card" id="carousel-class">
        <figure
          class="profile-banner profile-img-holder"
        
        >
          <img
          src={require("../images/shivang.jpg")} 

            loading="lazy"
            alt="vrushik-patel"
            class="profile-img-cover"
            id="carousel-img"
          />
        </figure>

        <div class="profile-content">
          <ul class="card-meta-list">
            <li class="card-meta-item">
              <ion-icon name="person-outline"></ion-icon>

              <a class="item-text">
                 Content Creator
              </a>
            </li>
          </ul>

          <h3>
            <a class="card-title">
              Shivang Yadav
            </a>
          </h3>
        </div>
      </div>
      
      
        </Carousel>
        </div>
        </div>
      
        <div class="managers-container">
        <h2>Tech Team</h2>
        <div class="carousel-container">
        <Carousel>
        <div class="teaminfo-card" id="carousel-class">
        <figure
          class="profile-banner profile-img-holder"
        
        >
          <img
          src={require("../images/Vrushik.jpg")}

            loading="lazy"
            alt="vrushik-patel"
            class="profile-img-cover"
            id="carousel-img"
          />
        </figure>

        <div class="profile-content">
          <ul class="card-meta-list">
            <li class="card-meta-item">
              <ion-icon name="person-outline"></ion-icon>

              <a class="item-text">
                Website Manager
              </a>
            </li>
          </ul>

          <h3>
            <a class="card-title">
              Vrushik Patel
            </a>
          </h3>
        </div>
      </div>
      <div class="teaminfo-card" id="carousel-class">
        <figure
          class="profile-banner profile-img-holder"
        
        >
          <img
          src={require("../images/rujul.jpg")} 

            loading="lazy"
            alt="vrushik-patel"
            class="profile-img-cover"
            id="carousel-img"
          />
        </figure>

        <div class="profile-content">
          <ul class="card-meta-list">
            <li class="card-meta-item">
              <ion-icon name="person-outline"></ion-icon>

              <a class="item-text">
                Website Manager
              </a>
            </li>
          </ul>

          <h3>
            <a class="card-title">
              Rujul
            </a>
          </h3>
        </div>
      </div>
      
        </Carousel>
        </div>
        </div>

        <div class="managers-container">
        <h2>Event Managers</h2>
        <div class="carousel-container">
        
        <Carousel>
        <div class="teaminfo-card" id="carousel-class">
        <figure
          class="profile-banner profile-img-holder"
        
        >
          <img
          src={require("../images/abhay.jpg")} 

            loading="lazy"
            alt="vrushik-patel"
            class="profile-img-cover"
            id="carousel-img"
          />
        </figure>

        <div class="profile-content">
          <ul class="card-meta-list">
            <li class="card-meta-item">
              <ion-icon name="person-outline"></ion-icon>

              <a class="item-text">
                Valaorant 
              </a>
            </li>
          </ul>

          <h3>
            <a class="card-title">
              Abhay Singh
            </a>
          </h3>
        </div>
      </div>
      <div class="teaminfo-card" id="carousel-class">
        <figure
          class="profile-banner profile-img-holder"
        
        >
          <img
          src={require("../images/priyanshu.png")} 

            loading="lazy"
            alt="vrushik-patel"
            class="profile-img-cover"
            id="carousel-img"
          />
        </figure>

        <div class="profile-content">
          <ul class="card-meta-list">
            <li class="card-meta-item">
              <ion-icon name="person-outline"></ion-icon>

              <a class="item-text">
                Valorant
              </a>
            </li>
          </ul>

          <h3>
            <a class="card-title">
              Priyanshu Kumar
            </a>
          </h3>
        </div>
      </div>
      <div class="teaminfo-card" id="carousel-class">
        <figure
          class="profile-banner profile-img-holder"
        
        >
          <img
          src={require("../images/harshit_jeph.jpg")}

            loading="lazy"
            alt="vrushik-patel"
            class="profile-img-cover"
            id="carousel-img"
          />
        </figure>

        <div class="profile-content">
          <ul class="card-meta-list">
            <li class="card-meta-item">
              <ion-icon name="person-outline"></ion-icon>

              <a class="item-text">
                BGMI
              </a>
            </li>
          </ul>

          <h3>
            <a class="card-title">
              
              Harshit Jeph
            </a>
          </h3>
        </div>
      </div>
      <div class="teaminfo-card" id="carousel-class">
        <figure
          class="profile-banner profile-img-holder"
        
        >
          <img
          src={require("../images/shivam.jpg")}

            loading="lazy"
            alt="vrushik-patel"
            class="profile-img-cover"
            id="carousel-img"
          />
        </figure>

        <div class="profile-content">
          <ul class="card-meta-list">
            <li class="card-meta-item">
              <ion-icon name="person-outline"></ion-icon>

              <a class="item-text">
                BGMI
              </a>
            </li>
          </ul>

          <h3>
            <a class="card-title">
              Shivam Singh
            </a>
          </h3>
        </div>
      </div>
      <div class="teaminfo-card" id="carousel-class">
        <figure
          class="profile-banner profile-img-holder"
        
        >
          <img
          src={require("../images/gaurav.jpeg")} 

            loading="lazy"
            alt="vrushik-patel"
            class="profile-img-cover"
            id="carousel-img"
          />
        </figure>

        <div class="profile-content">
          <ul class="card-meta-list">
            <li class="card-meta-item">
              <ion-icon name="person-outline"></ion-icon>

              <a class="item-text">
                CS 2.O
              </a>
            </li>
          </ul>

          <h3>
            <a class="card-title">
              Gaurav Singh
            </a>
          </h3>
        </div>
      </div>
      <div class="teaminfo-card" id="carousel-class">
        <figure
          class="profile-banner profile-img-holder"
        
        >
          <img
          src={require("../images/aman.jpg")} 

            loading="lazy"
            alt="vrushik-patel"
            class="profile-img-cover"
            id="carousel-img"
          />
        </figure>

        <div class="profile-content">
          <ul class="card-meta-list">
            <li class="card-meta-item">
              <ion-icon name="person-outline"></ion-icon>

              <a class="item-text">
                FIFA
              </a>
            </li>
          </ul>

          <h3>
            <a class="card-title">
              Aman Singh
            </a>
          </h3>
        </div>
      </div>
      <div class="teaminfo-card" id="carousel-class">
        <figure
          class="profile-banner profile-img-holder"
        
        >
          <img
          src={require('../images/pranshul.jpg')}

            loading="lazy"
            alt="vrushik-patel"
            class="profile-img-cover"
            id="carousel-img"
          />
        </figure>

        <div class="profile-content">
          <ul class="card-meta-list">
            <li class="card-meta-item">
              <ion-icon name="person-outline"></ion-icon>

              <a class="item-text">
                FIFA
              </a>
            </li>
          </ul>

          <h3>
            <a class="card-title">
              Pranshul Agrawal
            </a>
          </h3>
        </div>
      </div>
      <div class="teaminfo-card" id="carousel-class">
        <figure
          class="profile-banner profile-img-holder"
        
        >
          <img
          src={require('../images/akshay.jpg')}

            loading="lazy"
            alt="vrushik-patel"
            class="profile-img-cover"
            id="carousel-img"
          />
        </figure>

        <div class="profile-content">
          <ul class="card-meta-list">
            <li class="card-meta-item">
              <ion-icon name="person-outline"></ion-icon>

              <a class="item-text">
                  CODM
              </a>
            </li>
          </ul>

          <h3>
            <a class="card-title">
              Akshay Singh
            </a>
          </h3>
        </div>
      </div>
      <div class="teaminfo-card" id="carousel-class">
        <figure
          class="profile-banner profile-img-holder"
        
        >
          <img
          src={require('../images/aditya.jpg')}

            loading="lazy"
            alt="vrushik-patel"
            class="profile-img-cover"
            id="carousel-img"
          />
        </figure>

        <div class="profile-content">
          <ul class="card-meta-list">
            <li class="card-meta-item">
              <ion-icon name="person-outline"></ion-icon>

              <a class="item-text">
                Free Fire
              </a>
            </li>
          </ul>

          <h3>
            <a class="card-title">
              Aditya Raj Verma
            </a>
          </h3>
        </div>
      </div>
      
      
        </Carousel>
        </div>
        </div>
      </div>
  */}
    </div>
  );
}
