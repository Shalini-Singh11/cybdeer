import React from 'react'
import './assests/home.css';
// icons
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
// images
import kishan from './assests/all_images_cybdr/founders/Kishan_Jakhar.png';
import umesh from './assests/all_images_cybdr/founders/umesh_homepage.png';
import Minakshi from './assests/all_images_cybdr/founders/minakshiii.png';
import kalash from './assests/all_images_cybdr/founders/kalashh.png';


export default function Founders() {
  return (
    <div>
         <div class="container">
          
          <div className='row justify-content-evenly align-items-center'>
            <div className="col-md-3 col-sm-6 contain-cards-founders position-relative">
              <div className="contain-founder-img position-absolute top-0 start-0 w-100">
                <img src={kishan} alt='kishanJhakr' />
              </div>
              <div className="founder-content d-flex justify-content-center align-items-end top-0 start-0 w-100 position-absolute">
                <div className="founders-details d-flex justify-content-center align-items-center flex-column text-center">
                  <h2>Kishan Jakhar <br /><span>CHIEF MARKETING OFFICER</span></h2>
                  <ul className="founders-social_icons d-flex position-relative">
                    <li className="unstyled-list">
                      <a href="#" className="d-flex justify-content-center align-items-center text-decoration-none text-white"><FaFacebookF /></a>
                    </li>
                    <li className="unstyled-list">
                      <a href="#" className="d-flex justify-content-center align-items-center text-decoration-none text-white"><FaTwitter /></a>
                    </li>
                    <li className="unstyled-list">
                      <a href="#" className="d-flex justify-content-center align-items-center text-decoration-none text-white"><FaLinkedinIn /></a>
                    </li>
                    <li className="unstyled-list">
                      <a href="#" className="d-flex justify-content-center align-items-center text-decoration-none text-white"><FaInstagram /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 contain-cards-founders position-relative">
              <div className="contain-founder-img position-absolute top-0 start-0 w-100">
                <img src={umesh} alt='umesh' />
              </div>
              <div className="founder-content d-flex justify-content-center align-items-end top-0 start-0 w-100 position-absolute">
                <div className="founders-details d-flex justify-content-center align-items-center flex-column text-center">
                  <h2>Umesh Kumar<br /><span>VICE PRESIDENT-STRATEGIC ALLIANCE</span></h2>
                  <ul className="founders-social_icons d-flex position-relative">
                    <li className="unstyled-list">
                      <a href="#" className="d-flex justify-content-center align-items-center text-decoration-none text-white"><FaFacebookF /></a>
                    </li>
                    <li className="unstyled-list">
                      <a href="#" className="d-flex justify-content-center align-items-center text-decoration-none text-white"><FaTwitter /></a>
                    </li>
                    <li className="unstyled-list">
                      <a href="#" className="d-flex justify-content-center align-items-center text-decoration-none text-white"><FaLinkedinIn /></a>
                    </li>
                    <li className="unstyled-list">
                      <a href="#" className="d-flex justify-content-center align-items-center text-decoration-none text-white"><FaInstagram /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 contain-cards-founders position-relative">
              <div className="contain-founder-img position-absolute top-0 start-0 w-100">
                <img src={Minakshi} alt='minakshi' />
              </div>
              <div className="founder-content d-flex justify-content-center align-items-end top-0 start-0 w-100 position-absolute">
                <div className="founders-details d-flex justify-content-center align-items-center flex-column text-center">
                  <h2>Minakshi Sharma<br /><span>ASSOCIATE DIRECTOR-STRATEGIC ALLIANCE</span></h2>
                  <ul className="founders-social_icons d-flex position-relative">
                    <li className="unstyled-list">
                      <a href="#" className="d-flex justify-content-center align-items-center text-decoration-none text-white"><FaFacebookF /></a>
                    </li>
                    <li className="unstyled-list">
                      <a href="#" className="d-flex justify-content-center align-items-center text-decoration-none text-white"><FaTwitter /></a>
                    </li>
                    <li className="unstyled-list">
                      <a href="#" className="d-flex justify-content-center align-items-center text-decoration-none text-white"><FaLinkedinIn /></a>
                    </li>
                    <li className="unstyled-list">
                      <a href="#" className="d-flex justify-content-center align-items-center text-decoration-none text-white"><FaInstagram /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 contain-cards-founders position-relative">
              <div className="contain-founder-img position-absolute top-0 start-0 w-100">
                <img src={kalash} alt='kalash' />
              </div>
              <div className="founder-content d-flex justify-content-center align-items-end top-0 start-0 w-100 position-absolute">
                <div className="founders-details d-flex justify-content-center align-items-center flex-column text-center">
                  <h2>Kalash Sharma<br /><span>ASSOCIATE DIRECTOR</span></h2>
                  <ul className="founders-social_icons d-flex position-relative">
                    <li className="unstyled-list">
                      <a href="#" className="d-flex justify-content-center align-items-center text-decoration-none text-white"><FaFacebookF /></a>
                    </li>
                    <li className="unstyled-list">
                      <a href="#" className="d-flex justify-content-center align-items-center text-decoration-none text-white"><FaTwitter /></a>
                    </li>
                    <li className="unstyled-list">
                      <a href="#" className="d-flex justify-content-center align-items-center text-decoration-none text-white"><FaLinkedinIn /></a>
                    </li>
                    <li className="unstyled-list">
                      <a href="#" className="d-flex justify-content-center align-items-center text-decoration-none text-white"><FaInstagram /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
