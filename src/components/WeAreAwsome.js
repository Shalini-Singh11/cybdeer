import React from "react";
import "./assests/home.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function WeAreAwsome() {
  return (
    <div>
      <div className="container Lets-make-something-container">
        <h4 className="text-center">WE ARE STUNNING</h4>
        <h1 className="text-center">
          <b>Let’s Make Something Great</b>
        </h1>
        <p className="pb-5 text-center">
          We strive to create a positive impact in the world by providing
          sustainable solutions that improve the lives of our customers and the
          communities we serve.
        </p>
        <div className="button-gap d-flex justify-content-center align-items-center">
          <button className="button-learnMore-letsMake">
            {" "}
            <Link to="/AboutUs" className="text-decoration-none text-light">
              Learn More &nbsp;
              <FaArrowRight />
            </Link>
          </button>
          <button className="button-learnMore-letsMake-colored">
            {" "}
            <Link to="/AboutUs" className="text-decoration-none text-dark">
              Learn More &nbsp;
              <FaArrowRight />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
