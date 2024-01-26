import React from "react";
import Header from "../components/header";
import "./ab.css";
export default function AbPage(){
    return (
    
            <section class="center-container">
                  <img class="header-bg" src="" alt="" aria-hidden="true" />
                  <img class="profile-pic" src="" alt="Victor Crest profile picture" />
                  <section class="personal-details">
                      <h1>Victor Crest<span> 26</span></h1>
                  </section>
                  <p class="location">London</p>
                  <hr></hr>
                  <section class="info-container">
                      <section class="followers">
                          <h2>80K</h2>
                          <p>Followers</p>
                      </section>
                      <section class="likes">
                          <h2>803K</h2>
                          <p>Likes</p>
                      </section>
                      <section class="photos">
                          <h2>1.4K</h2>
                          <p>Photos</p>
                      </section>
                  </section>
              </section>
        
    )
}