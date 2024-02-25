import React from 'react'
import './assests/contactform.css';
import facebook_cybdeer from './assests/all_images_cybdr/IMAGES_CYBDEER_WEBSITE/facebook_cybdeer.svg';
import linkdin_cybdeer from './assests/all_images_cybdr/IMAGES_CYBDEER_WEBSITE/linkdin_cybdeer.svg';
import instagram_cybdeer from './assests/all_images_cybdr/IMAGES_CYBDEER_WEBSITE/instagram_cybdeer.svg';
import { FaPhoneAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
export default function ContactForm() {
  return (
    <div>
      <div className="container">
        <h2 className="heading-okr py-5 text-center">
          Get In Touch
        </h2>
        <div className='contain-row-cf m-auto col-md-10 col-sm-12 col-12'>
          <div className="contact-logo">
          </div>
          <form className="contact-form">
            <div className="heading">
              <h2>CONTACT US</h2>
              <p>Join the journey towards success and innovation by contacting us today.</p>
            </div>
            <div className="location-cybdeer">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14232.36799804654!2d75.7390197!3d26.9005752!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db49791850a05%3A0x1ba7902d1be2c1b5!2sCybdeer%20Network%20Private%20Limited!5e0!3m2!1sen!2sin!4v1683795925566!5m2!1sen!2sin"
                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </form>
          <div className="contact-info">
            <h3 className="heading">GET IN TOUCH</h3>
            <p>Find out how we can help your business succeed.</p>
            <ul className="contacts p-0">
              <li>
                <i><FaMapMarkedAlt /></i>
                Cybdeer Service Pvt Ltd, Jaipur
              </li>
              <li>
                <i><FaMailBulk /></i>
                info@cybdeer.com
              </li>
              <li>
                <i><FaPhoneAlt /></i>
                7428274282
              </li>
            </ul>
            <div className="social-links d-flex position-relative p-0">

              <a href='https://www.linkedin.com/company/cybdeer-network-private-limited/'><img src={linkdin_cybdeer} className="image-social-icons" alt="linkdin" /></a>
              <a href='https://www.instagram.com/Paydeer.business/'><img src={instagram_cybdeer} className="image-social-icons" alt="instagram" /></a>
              <a href='https://www.facebook.com/Paydeer.business'><img src={facebook_cybdeer} className="image-social-icons" alt="facebook" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
