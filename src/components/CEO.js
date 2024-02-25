import React from 'react'
import './assests/home.css';
import Vinod from './assests/all_images_cybdr/founders/Vinod.png';
// import Background_Ceo from './assests/all_images_cybdr/IMAGES_CYBDEER_WEBSITE/background_ceofounder.png';
export default function CEO() {
  return (
    <div>
      <div className="container">
        <h2 className="heading-okr py-3 text-center">Our Founders</h2>
        <div className="row justify-content-center align-items-center">
          <div className="details-container avatar col-md-3">
            <img src={Vinod} className="img-fluid w-100" alt="" />
          </div>
          <div className="about col-md-6">
            <div className="name">
              <p>
                CEO, Founder and Promoter
              </p>
              <h1>
                Mr. Vinod Parihar
              </h1>
            </div>
            <div className="about-content">
              <p>
                Mr. Vinod Parihar is a first-generation entrepreneur and a well recognized
                personality amongst the business leadership fraternity, who has
                mentored and built multi-billion-dollar businesses in Fintech and
                Financial services space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
