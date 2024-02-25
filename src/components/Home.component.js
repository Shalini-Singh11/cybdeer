import React from 'react'
import './assests/home.css';
import { Link } from "react-router-dom";
// components
import GetInTouch from './ContactForm.component';
import WeAreAwsome from './WeAreAwsome';
import Founders from './Founders';
import Okr from './Okr';
import HomeAbout from './HomeAbout';
import HomeCompanies from './HomeCompany';
import Testominal from './Testominal';
import MissionValueVision from './Mission';
import CeoFounder from './CEO';
// images
import Findeer from './assests/all_images_cybdr/IMAGES_CYBDEER_WEBSITE/findeer_maincard_img.svg';
import payvendor from './assests/all_images_cybdr/IMAGES_CYBDEER_WEBSITE/payvendor_maincard_img.svg';
import webhub from './assests/all_images_cybdr/IMAGES_CYBDEER_WEBSITE/webhub_maincard_img.svg';
import paydeer from './assests/all_images_cybdr/IMAGES_CYBDEER_WEBSITE/paydeer_maincard_img.svg';


export default function home() {
  return (
    <>
      <section className='section-main-home'>
        <div className='container'>
          <div className='row justify-content-evenly align-items-center contain-row-main'>
            <div className='col-lg-6 col-md-7'>
           
              <h1 className='main-heading bolder'>
                <span style={{ "--i": "1" }}>Y</span>
                <span style={{ "--i": "2" }}>o</span>
                <span style={{ "--i": "3" }}>u</span>
                <span style={{ "--i": "4" }}>r</span>
                &nbsp;
                <span style={{ "--i": "5" }}>N</span>
                <span style={{ "--i": "6" }}>e</span>
                <span style={{ "--i": "5" }}>x</span>
                <span style={{ "--i": "6" }}>t</span>
                &nbsp;
                <span style={{ "--i": "7" }}>B</span>
                <span style={{ "--i": "8" }}>i</span>
                <span style={{ "--i": "9" }}>g</span>
                &nbsp;
                <span style={{ "--i": "10" }}>I</span>
                <span style={{ "--i": "11" }}>d</span>
                <span style={{ "--i": "12" }}>e</span>
                <span style={{ "--i": "13" }}>a</span>
                &nbsp;
                <span style={{ "--i": "10" }}>S</span>
                <span style={{ "--i": "11" }}>t</span>
                <span style={{ "--i": "12" }}>a</span>
                <span style={{ "--i": "13" }}>r</span>
                <span style={{ "--i": "14" }}>t</span>
                <span style={{ "--i": "15" }}>s</span>
                &nbsp;
                <span style={{ "--i": "16" }}>H</span>
                <span style={{ "--i": "17" }}>e</span>
                <span style={{ "--i": "18" }}>r</span>
                <span style={{ "--i": "19" }}>e</span>

              </h1>
              <p>Cybdeer Network Private limited is a leading provider of innovative technology solutions for businesses of all sizes. </p>
              <Link to="/ContactUs"><button className="bg-dark text-white p-1 px-3">Read More</button></Link>
            </div>
            <div className='col-lg-5 col-md-5'>
              <div className='d-flex flex-column align-items-end imgges'>
                <a href='https://paydeer.in/'><img src={paydeer } className='imgg1' /></a>
                <a href='https://webhubzone.in/'><img src={webhub} className='imgg2' /></a>
                <a href='http://findeer.in/'><img src={Findeer} className='imgg3' /></a>
                <a href='http://payvendors.in/'><img src={payvendor} className='imgg4' /></a>
              </div>
             
            </div>
          </div>
        </div>
      </section>
      {/* abouts us */}
      <section className='aboutusHome_section py-5'>
        <HomeAbout />
      </section>
      {/* companies */}
      <section className='companies-section py-5'>
        <HomeCompanies />
      </section>
      {/* the mission value vission */}
      <section className='section-value-vision-mision pb-5'>
        <MissionValueVision />
      </section>

      {/* The Objectives and Key Results (OKR) */}
      <section className="The-Objectives-and-Key-Results py-5">
        <Okr />
      </section>
      {/* founder ceo */}
     <section className="our-founders-ceo py-5">
     <CeoFounder />
     </section>

      {/* founder section */}
      <section className='founder-section py-5'>
        <Founders />
      </section>
      {/* we are awsome */}
      <section className="Lets-make-something-great p-5 my-4">
        <WeAreAwsome />
      </section>
      {/* testominal */}
      <section className="section-testominal p-5 my-4">
        <div className='container'>
          <h2 className="heading-okr py-5 text-center">
            Our Business Reviews
          </h2>
          <Testominal />
        </div>
      </section>
      {/* get-in-touch */}
      <section className="get-in-touch pb-5">
        <GetInTouch />
      </section>
    </>
  )
}
