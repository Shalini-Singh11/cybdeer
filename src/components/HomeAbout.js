import React from "react";
import AboutUs_First from "./assests/all_images_cybdr/IMAGES_CYBDEER_WEBSITE/aboutus_home_first.png";
import AboutUs from "./assests/all_images_cybdr/IMAGES_CYBDEER_WEBSITE/aboutus_home.png";

export default function HomeAbout() {
  return (
    <div>
      <div className="container">
        <h2 className="heading-okr py-5 text-center">About Us</h2>
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6">
            <div className="position-relative contain-all-images">
              <img
                src={AboutUs_First}
                className="position-relative w-100"
                alt="about-us"
              />
              <img
                src={AboutUs}
                className="position-absolute first-aboutus"
                alt="about-us"
              />
            </div>
          </div>
          <div className="col-md-5">
            {/* <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div> */}
            <h1 className="home-aboutus-header">
              We provide best service solution in town
            </h1>
            <p>
              Cybdeer Network Private limited is a leading provider of
              innovative technology solutions for businesses of all sizes. Since
              our founding in 2018, we have been dedicated to helping our
              clients stay ahead of the curve by providing cutting-edge
              solutions that increase efficiency, reduce costs, and enhance the
              overall customer experience.{" "}
            </p>
            <ul className="list-unstyled">
              <li className="contain-aboutus-lists">
                We believe that technology should be a tool that empowers
                businesses, not a barrier that holds them back.
              </li>
              <li className="contain-aboutus-lists">
                That's why we work closely with each of our clients to
                understand their unique needs and develop tailored solutions
                that deliver real results.
              </li>
              <li className="contain-aboutus-lists">
                Our team of experienced professionals brings a wealth of
                knowledge and expertise to every project, and we pride ourselves
                on our ability to deliver exceptional service and support at
                every stage of the process.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
