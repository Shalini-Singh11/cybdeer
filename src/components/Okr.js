import React from 'react'
import './assests/home.css';
// images
import initiative_cybdeer from "./assests/all_images_cybdr/IMAGES_CYBDEER_WEBSITE/initiative_cybdeer.svg";
import Objective_cybdeer from "./assests/all_images_cybdr/IMAGES_CYBDEER_WEBSITE/Objective_cybdeer.svg";
import keyResult_cybdeer from "./assests/all_images_cybdr/IMAGES_CYBDEER_WEBSITE/keyResult_cybdeer.svg";


export default function Okr() {
  return (
    <div>
        <div className="container">
          <h2 className="heading-okr py-5 text-center">
            The Objectives and Key Results (OKR)
          </h2>
          <div className="row justify-content-evenly align-items-center g-5">
            <div className="col-md-3">
              <div className="box d-flex justify-content-around align-items-center flex-column">
                <h4>Initiative</h4>
                <img
                  src={initiative_cybdeer}
                  className="w-25"
                  alt="initiative_cybdeer"
                />
                <p>“Where do I need to go?”</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box1 d-flex justify-content-around align-items-center flex-column">
                <h4>Objective</h4>
                <img
                  src={Objective_cybdeer}
                  className="w-25"
                  alt="Objective_cybdeer"
                />
                <p>“What you want to Achieve?”</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box2 d-flex justify-content-around align-items-center flex-column">
                <h4>KeyResult</h4>
                <img
                  src={keyResult_cybdeer}
                  className="w-25"
                  alt="keyResult_cybdeer"
                />
                <p>“key to achieve your objective”</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
