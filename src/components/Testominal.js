import React, { Component } from "react";
import "./assests/testominal.css";
import { Link } from "react-router-dom";
// import { FaStar } from "react-icons/fa";
// import { FaStarHalfAlt } from "react-icons/fa";
// import { FaRegStar } from "react-icons/fa";
// import { FaQuoteLeft } from "react-icons/fa";
// images
import { FaStar } from "react-icons/fa";
import google_play from "./assests/all_images_cybdr/IMAGES_CYBDEER_WEBSITE/google_play.svg";
import AtoZ from "./assests/all_images_cybdr/reviews/A_To_Z_Vlog.webp";
import Chetan from "./assests/all_images_cybdr/reviews/Chetan_Mali.webp";
import khetsingh from "./assests/all_images_cybdr/reviews/Khetsingh_Khetsingh.webp";
import Mintu_Khan from "./assests/all_images_cybdr/reviews/Mintu_Khan.webp";
import Mohammad_Tariq from "./assests/all_images_cybdr/reviews/Mohammad_Tariq.webp";
import Networking_tower from "./assests/all_images_cybdr/reviews/Networking_tower.webp";
import PrashantKumar_Yadav from "./assests/all_images_cybdr/reviews/PrashantKumar_Yadav.webp";
import Rakesh_Roy from "./assests/all_images_cybdr/reviews/Rakesh_Roy.webp";
// import Star_review from "./assests/all_images_cybdr/reviews/Star_review.png";

export default class Testominal extends Component {
  render() {
    return (
      <>
        <div className="row align-items-center justify-content-center g-2">
          <div className="col-lg-5 col-md-12 col-sm-12 reviews-content">
            <h4 className="text-start">
              Customer Satisfaction Guaranteed: Why Cybdeer Netwrok Pvt Ltd Is
              The Top Choice For You
            </h4>
            <p className="text-start">
              With insights from customers, industry experts, and company
              representatives, this review provides a comprehensive look at
              Cybdeer Network PVT LTD innovative solutions for small businesses.
              Whether you're a small business owner looking to stay ahead of the
              curve or simply interested in the latest trends in technology and
              sustainability, this review has something for everyone.
            </p>
            <Link
              to="https://play.google.com/store/apps/details?id=com.india.paydeer"
              className="text-decoration-none"
            >
              <img
                src={google_play}
                className="float-start"
                alt="google_play"
              />
            </Link>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 position-relative contain-all-reviews">
            <div className="four-back-review  w-100">
            <div className="row w-100 justify-content-start">
              <div className="review_rectangle d-flex align-items-center f">
                <div className="review-customer-image p-3">
                  <img src={AtoZ} alt="review-customer-img" />
                </div>
                <div className="customer-name-reviewStart text-start">
                  <h5 className="p-0 m-0">A To Z Vlog</h5>
                  <h6 className="p-0 m-0">
                    18 February 2023 <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                  </h6>
                  <p className="p-0 m-0">
                    Excellent company. Super fast server.
                  </p>
                </div>
              </div>
              </div>
              <div className="row justify-content-end">
              <div className="review_rectangle d-flex align-items-center">
                <div className="review-customer-image p-3">
                  <img src={Chetan} alt="review-customer-img" />
                </div>
                <div className="customer-name-reviewStart text-start">
                  <h5 className="p-0 m-0">Chetan Mali</h5>
                  <h6 className="p-0 m-0">
                    2 July 2022 <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                  </h6>
                  <p className="p-0 m-0">
                    Great app. There are wallet facility, UPI payment, bank
                    transfer, recharge and booking options. And most
                    importantly, they work properly. Very reliable that you are
                    careful in using Paydeer app
                  </p>
                </div>
              </div>
              </div>
              <div className="row w-100 justify-content-start">
              <div className="review_rectangle d-flex align-items-center f">
                <div className="review-customer-image p-3">
                  <img src={khetsingh} alt="review-customer-img" />
                </div>
                <div className="customer-name-reviewStart text-start">
                  <h5 className="p-0 m-0">Khetsingh Khetsingh</h5>
                  <h6 className="p-0 m-0">
                    18 February 2023 <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                  </h6>
                  <p className="p-0 m-0">
                    This app is good with this my experience is fabulous igave 5
                    star
                  </p>
                </div>
              </div>
              </div>
              <div className="row justify-content-end">
              <div className="review_rectangle d-flex align-items-center">
                <div className="review-customer-image p-3">
                  <img src={Mintu_Khan} alt="review-customer-img" />
                </div>
                <div className="customer-name-reviewStart text-start">
                  <h5 className="p-0 m-0">Mintu Khan</h5>
                  <h6 className="p-0 m-0">
                    10 February 2023 <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                  </h6>
                  <p className="p-0 m-0">
                    Excellent service All problem solved in under 24 hour.
                  </p>
                </div>
              </div>
              </div>
              </div>
            {/* front-review */}
            <div className="four-front-review position-absolute d-flex justify-content-center align-items-center flex-column top-0">
            <div className="row justify-content-center">
              <div className="review_rectangle d-flex align-items-center">
                <div className="review-customer-image p-3">
                  <img src={Mohammad_Tariq} alt="review-customer-img" />
                </div>
                <div className="customer-name-reviewStart text-start">
                  <h5 className="p-0 m-0">Mohammad Tariq</h5>
                  <h6 className="p-0 m-0">
                    9 February 2023 <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                  </h6>
                  <p className="p-0 m-0">
                    Paydeer is good for every thing and all services provide
                    AEPS service is fast and payout services also immediate
                    transaction in this app and customer services is very fast
                    thankyou sakshi mam for supporting me on this app.
                  </p>
                </div>
              </div>
              </div>
              
              <div className="row justify-content-center">
              <div className="review_rectangle d-flex align-items-center">
                <div className="review-customer-image p-3">
                  <img src={Networking_tower} alt="review-customer-img" />
                </div>
                <div className="customer-name-reviewStart text-start">
                  <h5 className="p-0 m-0">Networking tower</h5>
                  <h6 className="p-0 m-0">
                    4 March 2023 <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                  </h6>
                  <p className="p-0 m-0">
                    4 March 2023 this is a Best aeps company of india
                  </p>
                </div>
              </div>
              </div>
              <div className="row justify-content-center">
              <div className="review_rectangle d-flex align-items-center">
                <div className="review-customer-image p-3">
                  <img src={PrashantKumar_Yadav} alt="review-customer-img" />
                </div>
                <div className="customer-name-reviewStart text-start">
                  <h5 className="p-0 m-0">PrashantKumar Yadav</h5>
                  <h6 className="p-0 m-0">
                    29 January 2023 <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                  </h6>
                  <p className="p-0 m-0">
                    This is a app it's very good service Full costume saport.
                  </p>
                </div>
              </div>
              </div>
              <div className="row justify-content-center">
              <div className="review_rectangle d-flex align-items-center">
                <div className="review-customer-image p-3">
                  <img src={Rakesh_Roy} alt="review-customer-img" />
                </div>
                <div className="customer-name-reviewStart text-start">
                  <h5 className="p-0 m-0">Rakesh Roy</h5>
                  <h6 className="p-0 m-0">
                    8 January 2023 <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                  </h6>
                  <p className="p-0 m-0">
                    Paydeer apps is very good performance but this apps is
                    trangaction limit very poor limit. Please paydeer team your
                    transaction limit is dailiy up to 200000 rupees then paydeer
                    apps is always best.
                  </p>
                </div>
              </div>
              </div>
            </div>
          
          </div>
        </div>
      </>
    );
  }
}
