import React from "react";
import "./assests/home.css";
// images
import Mission from "./assests/all_images_cybdr/IMAGES_CYBDEER_WEBSITE/mission.svg";
import Vision from "./assests/all_images_cybdr/IMAGES_CYBDEER_WEBSITE/vision.svg";
import Value from "./assests/all_images_cybdr/IMAGES_CYBDEER_WEBSITE/value.svg";

export default function Features() {
  return (
    <div>
      <div className="container">
        <h2 className="heading-okr py-5 text-center"></h2>
        <div className="row justify-content-evenly align-items-center g-5">
          <div className="col-lg-3 col-md-5 col-sm-5 p-3 contain-MVV d-flex flex-column justify-content-center align-items-center">
            <span className="text-center contain-img-heading">
              <img src={Mission} className="w-50" alt="mission" />
              <h3 className="text-center py-1">Mission</h3>
            </span>
            <p className="text-center pt-2">
              As we pursue our mission, we are guided by our core values of
              integrity, excellence, and innovation. Our mission is to make a
              positive difference in the world by leveraging technology.
            </p>
          </div>
          <div className="col-lg-3 col-md-5 col-sm-5 p-3 contain-MVV d-flex flex-column justify-content-center align-items-center">
            <span className="text-center contain-img-heading">
              <img src={Vision} className="w-50" alt="vision" />
              <h3 className="text-center py-1">Vision</h3>
            </span>
            <p className="text-center pt-2">
              We believe that by harnessing the power of innovation,
              collaboration, and commitment to sustainability, we can create a
              world where businesses can grow and prosper while also making a
              positive impact on the world around us.
            </p>
          </div>
          <div className="col-lg-3 col-md-5 col-sm-6 p-3 contain-MVV d-flex flex-column justify-content-center align-items-center">
            <span className="text-center contain-img-heading">
              <img src={Value} className="w-50" alt="value" />
              <h3 className="text-center py-1">Values</h3>
            </span>
            <p className="text-center pt-2">
              We believe that by operating with these values at the forefront of
              everything we do, we can build lasting relationships with our
              clients and partners, and help them achieve their full potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
