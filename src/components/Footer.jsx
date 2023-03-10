import React, { Component } from 'react';
import styles from '../components/Footer.module.css';

export function Footer(){
    return(
        <>
        <div className={`${styles.footerContainer}`}>
           <div className={`${styles.footerLogo}`}>
            <h1 className={`${styles.brandName}`}>CollFin</h1> 
            <h5 style={{marginLeft:"1rem"}}>Our Github: <a href="https://github.com/Gautam2305/collfin" className={`${styles.githubLogo}`}><i class="fa-brands fa-github"></i></a></h5>
           </div>
           <div className={`${styles.creditContainer}`}>
              <div className={`${styles.designer}`}>
                  <a href="" className={`${styles.name}`}>Bhanu</a>
                  <img src="https://ik.imagekit.io/wxybv7obs/Snapchat-692133158.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678186519268" className={`${styles.img}`} alt="" />
              </div>
              <div className={`${styles.designer}`}>
                  <a href="" className={`${styles.name}`}>Aravind</a>
                  <img src="https://ik.imagekit.io/wxybv7obs/Snapchat-1054366735.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678186518954" className={`${styles.img}`} alt="" />
              </div>
              <div className={`${styles.designer}`}>
                  <a href="" className={`${styles.name}`}>Nikitha</a>
                  <img src="https://ik.imagekit.io/wxybv7obs/Snapchat-283365015.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678186517628" className={`${styles.img}`} alt="" />
              </div>
              <div className={`${styles.designer}`}>
                  <a href="" className={`${styles.name}`}>Gautam</a>
                  <img src="https://ik.imagekit.io/wxybv7obs/Snapchat-532864015.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678186518132" className={`${styles.img}`} alt="" />
              </div>
             
              
           </div>

        </div>
        </>
    )
}